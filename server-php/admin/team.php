<?php
/**
 * "Meet the Team" manager — staff join and leave often, so the owner edits this
 * himself rather than messaging me each time.
 *
 * Writes /team-data/team.json, which the About page reads at runtime.
 * Same conventions as menu.php: one .bak generation, an Undo button, and
 * "hide" preferred over "delete" so a returning member keeps their write-up.
 */
require_once __DIR__ . '/config.php';
requireLogin();

define('TEAM_DIR',  __DIR__ . '/../team-data');
define('TEAM_FILE', TEAM_DIR . '/team.json');
define('TEAM_BAK',  TEAM_DIR . '/team.json.bak');

function loadTeam() {
    if (!file_exists(TEAM_FILE)) return [];
    $d = json_decode(file_get_contents(TEAM_FILE), true);
    return is_array($d) ? $d : [];
}

function saveTeam($team) {
    if (!is_dir(TEAM_DIR)) mkdir(TEAM_DIR, 0755, true);
    if (file_exists(TEAM_FILE)) @copy(TEAM_FILE, TEAM_BAK);
    file_put_contents(
        TEAM_FILE,
        json_encode(array_values($team), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
        LOCK_EX
    );
}

function teamSlug($t) {
    $t = strtolower(trim($t));
    $t = preg_replace('/[^a-z0-9]+/', '-', $t);
    return trim($t, '-') ?: 'member';
}

function teamUniqueId($base, $team, $ignore = '') {
    $taken = [];
    foreach ($team as $m) if (($m['id'] ?? '') !== $ignore) $taken[$m['id']] = true;
    $id = $base; $n = 2;
    while (isset($taken[$id])) { $id = $base . '-' . $n; $n++; }
    return $id;
}

$team   = loadTeam();
$notice = '';
$error  = '';
$action = $_POST['action'] ?? '';

if ($action === 'save_member') {
    $editId = trim($_POST['edit_id'] ?? '');
    $name   = trim($_POST['name'] ?? '');

    if ($name === '') {
        $error = 'Name is required.';
    } else {
        $photo = trim($_POST['existing_photo'] ?? '');
        if (isset($_POST['remove_photo'])) $photo = '';

        if (!empty($_FILES['photo']) && $_FILES['photo']['error'] === UPLOAD_ERR_OK) {
            if (!is_dir(UPLOADS_DIR)) mkdir(UPLOADS_DIR, 0755, true);
            $ext = strtolower(pathinfo($_FILES['photo']['name'], PATHINFO_EXTENSION));
            if (in_array($ext, ['jpg', 'jpeg', 'png', 'webp', 'gif'])) {
                $fname = 'team-' . teamSlug($name) . '-' . time() . '.' . $ext;
                if (move_uploaded_file($_FILES['photo']['tmp_name'], UPLOADS_DIR . '/' . $fname)) {
                    $photo = UPLOADS_URL . '/' . $fname;
                }
            } else {
                $error = 'Photo must be JPG, PNG, WEBP or GIF.';
            }
        }

        if (!$error) {
            $member = [
                'id'        => $editId ?: teamUniqueId(teamSlug($name), $team),
                'name'      => $name,
                'role'      => trim($_POST['role'] ?? ''),
                'roleJa'    => trim($_POST['roleJa'] ?? ''),
                'desc'      => trim($_POST['desc'] ?? ''),
                'descJa'    => trim($_POST['descJa'] ?? ''),
                'emoji'     => trim($_POST['emoji'] ?? '') ?: '👤',
                'photo'     => $photo,
                'available' => isset($_POST['available']),
            ];

            $found = false;
            foreach ($team as $i => $m) {
                if ($editId !== '' && ($m['id'] ?? '') === $editId) { $team[$i] = $member; $found = true; break; }
            }
            if (!$found) $team[] = $member;

            saveTeam($team);
            header('Location: team.php?saved=1');
            exit;
        }
    }
}

if ($action === 'delete_member') {
    $id = $_POST['id'] ?? '';
    $before = count($team);
    $team = array_values(array_filter($team, fn($m) => ($m['id'] ?? '') !== $id));
    if (count($team) !== $before) { saveTeam($team); $notice = 'Member removed.'; }
}

if ($action === 'toggle_all') {
    $shown = $_POST['available'] ?? [];
    $ids   = $_POST['known'] ?? [];
    $changed = 0;
    foreach ($team as $i => $m) {
        if (!in_array($m['id'], $ids, true)) continue;
        $now = isset($shown[$m['id']]);
        if ($now !== (($m['available'] ?? true) !== false)) { $team[$i]['available'] = $now; $changed++; }
    }
    if ($changed) { saveTeam($team); $notice = "Saved — $changed change(s) are live now."; }
    else $notice = 'Nothing changed.';
}

if ($action === 'move') {
    $id = $_POST['id'] ?? '';
    $dir = ($_POST['dir'] ?? '') === 'up' ? -1 : 1;
    foreach ($team as $i => $m) {
        if (($m['id'] ?? '') === $id) {
            $j = $i + $dir;
            if ($j >= 0 && $j < count($team)) {
                $tmp = $team[$j]; $team[$j] = $team[$i]; $team[$i] = $tmp;
                saveTeam($team);
            }
            break;
        }
    }
}

if ($action === 'restore') {
    if (file_exists(TEAM_BAK)) {
        $bak = json_decode(file_get_contents(TEAM_BAK), true);
        if (is_array($bak)) {
            file_put_contents(TEAM_FILE, json_encode($bak, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES), LOCK_EX);
            header('Location: team.php?restored=1');
            exit;
        }
    }
    $error = 'No backup available yet.';
}

if (isset($_GET['saved']))    $notice = 'Saved — live on the About page now.';
if (isset($_GET['restored'])) $notice = 'Previous version restored.';

$team = loadTeam();

$unreadMsgs = 0;
if (file_exists(DATA_DIR . '/messages.json')) {
    $mm = json_decode(file_get_contents(DATA_DIR . '/messages.json'), true);
    if (is_array($mm)) $unreadMsgs = count(array_filter($mm, fn($m) => empty($m['read'])));
}

$page = $_GET['page'] ?? 'list';
$editMember = null;
if ($page === 'edit' && isset($_GET['id'])) {
    foreach ($team as $m) if (($m['id'] ?? '') === $_GET['id']) { $editMember = $m; break; }
    if (!$editMember) $page = 'list';
}
$hidden = count(array_filter($team, fn($m) => ($m['available'] ?? true) === false));
function h($s) { return htmlspecialchars((string) $s, ENT_QUOTES, 'UTF-8'); }
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Nepal Dining — Team Manager</title>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f5f5f0; color: #333; }
.topbar { background: #1C1A18; color: white; padding: 0 20px; min-height: 56px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 100; flex-wrap: wrap; gap: 8px; }
.topbar h1 { font-size: 16px; font-weight: 700; }
.topbar h1 span { color: #D4821A; }
.topbar-right { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
.topbar a { color: rgba(255,255,255,0.7); text-decoration: none; font-size: 13px; padding: 6px 12px; border-radius: 6px; }
.topbar a:hover, .topbar a.on { background: rgba(255,255,255,0.12); color: white; }
.pill { background: #C0392B; color: white; font-size: 11px; font-weight: 700; border-radius: 10px; padding: 1px 6px; margin-left: 4px; }
.container { max-width: 1000px; margin: 0 auto; padding: 20px; }
.notice { background: #ECFDF5; color: #065F46; border: 1px solid #A7F3D0; padding: 12px 16px; border-radius: 10px; margin-bottom: 16px; font-size: 14px; font-weight: 600; }
.err { background: #FEF2F2; color: #991B1B; border: 1px solid #FECACA; padding: 12px 16px; border-radius: 10px; margin-bottom: 16px; font-size: 14px; font-weight: 600; }
.hint { background: #FFFBEB; border: 1px solid #FDE68A; color: #92400E; padding: 12px 16px; border-radius: 10px; font-size: 13px; line-height: 1.6; margin-bottom: 18px; }
.stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; margin-bottom: 18px; }
.stat { background: white; border-radius: 12px; padding: 16px; text-align: center; }
.stat .num { font-size: 24px; font-weight: 800; color: #C0392B; }
.stat .label { font-size: 12px; color: #888; margin-top: 2px; }
.head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; flex-wrap: wrap; gap: 10px; }
.head h2 { font-size: 19px; font-weight: 800; }
.btn { display: inline-flex; align-items: center; gap: 6px; padding: 10px 18px; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; border: none; text-decoration: none; }
.btn-primary { background: #C0392B; color: white; }
.btn-primary:hover { background: #a5311f; }
.btn-secondary { background: #eee; color: #555; }
.btn-danger { background: #fef2f2; color: #C0392B; }
.btn-sm { padding: 5px 10px; font-size: 12px; }
.card { background: white; border-radius: 12px; padding: 20px; margin-bottom: 18px; }
table { width: 100%; background: white; border-radius: 12px; overflow: hidden; border-collapse: collapse; }
th { background: #fafaf8; text-align: left; padding: 10px 12px; font-size: 11px; color: #888; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
td { padding: 12px; border-top: 1px solid #f0f0f0; font-size: 14px; vertical-align: middle; }
tr.off td { background: #fbfbfb; opacity: 0.55; }
.av { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; background: linear-gradient(135deg,#D4821A,#769a00); display: flex; align-items: center; justify-content: center; font-size: 22px; color: white; }
.nm { font-weight: 700; color: #1C1A18; }
.nm small { display: block; font-weight: 500; color: #D4821A; font-size: 12px; margin-top: 2px; }
.nm em { display: block; font-style: normal; color: #aaa; font-size: 12px; margin-top: 3px; }
.acts { display: flex; gap: 4px; align-items: center; }
.sw { position: relative; display: inline-block; width: 40px; height: 22px; }
.sw input { display: none; }
.sw span { position: absolute; inset: 0; background: #ccc; border-radius: 22px; cursor: pointer; transition: .2s; }
.sw span:before { content: ""; position: absolute; width: 16px; height: 16px; left: 3px; top: 3px; background: white; border-radius: 50%; transition: .2s; }
.sw input:checked + span { background: #10B981; }
.sw input:checked + span:before { transform: translateX(18px); }
.sticky-save { position: sticky; bottom: 0; background: white; border-top: 2px solid #C0392B; padding: 14px 20px; display: flex; justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap; border-radius: 0 0 12px 12px; }
.sticky-save p { font-size: 13px; color: #777; }
.fg { margin-bottom: 16px; }
.fg label { display: block; font-size: 13px; font-weight: 600; color: #555; margin-bottom: 5px; }
.fg input[type=text], .fg textarea { width: 100%; padding: 10px 13px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; font-family: inherit; }
.fg input:focus, .fg textarea:focus { outline: none; border-color: #C0392B; }
.fg textarea { min-height: 110px; resize: vertical; }
.row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.chk { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; font-size: 14px; }
.chk input { width: auto; }
.prev { width: 110px; height: 110px; border-radius: 50%; object-fit: cover; border: 3px solid #eee; margin-top: 8px; display: block; }
.lang { display: inline-block; font-size: 10px; font-weight: 700; padding: 1px 6px; border-radius: 4px; margin-left: 5px; }
.lang.en { background: #E0E7FF; color: #3730A3; }
.lang.ja { background: #FCE7F3; color: #9D174D; }
.emoji-pick { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 6px; }
.emoji-pick button { font-size: 20px; padding: 6px 10px; border: 1px solid #ddd; background: white; border-radius: 8px; cursor: pointer; }
.emoji-pick button:hover { border-color: #C0392B; }
@media (max-width: 700px) { .row2 { grid-template-columns: 1fr; } td, th { padding: 8px 6px; } }
</style>
</head>
<body>

<div class="topbar">
  <h1>Nepal<span>Dining</span> — Team Manager</h1>
  <div class="topbar-right">
    <a href="menu.php">Menu</a>
    <a href="team.php" class="on">Team</a>
    <a href="index.php">Blog</a>
    <a href="messages.php">Messages<?= $unreadMsgs ? '<span class="pill">' . $unreadMsgs . '</span>' : '' ?></a>
    <a href="https://nepaldining.online/about/#team" target="_blank">View page ↗</a>
    <a href="index.php?logout=1">Logout</a>
  </div>
</div>

<div class="container">

<?php if ($notice): ?><div class="notice"><?= h($notice) ?></div><?php endif; ?>
<?php if ($error): ?><div class="err"><?= h($error) ?></div><?php endif; ?>

<?php if ($page === 'list'): ?>

  <div class="stats">
    <div class="stat"><div class="num"><?= count($team) - $hidden ?></div><div class="label">On the page</div></div>
    <div class="stat"><div class="num"><?= $hidden ?></div><div class="label">Hidden</div></div>
    <div class="stat"><div class="num"><?= count(array_filter($team, fn($m) => !empty($m['photo']))) ?></div><div class="label">With photo</div></div>
  </div>

  <div class="hint">
    <b>Koi chala gaya?</b> Uska green switch band kar dijiye — About page se hat jayega, par uski details yahin rahengi.
    Agar wapas aaya to switch on kar dena, dobara likhna nahi padega. Pakka hatana ho tabhi Delete use kijiye.<br>
    <b>Photo:</b> Edit kholke photo upload kijiye. Photo na ho to emoji wala gol circle dikhta rahega — page kabhi khali nahi lagega.
    Square photo sabse achhi lagti hai (chehra beech me).
  </div>

  <form method="post">
    <input type="hidden" name="action" value="toggle_all">
    <div class="head">
      <h2>Meet the Team</h2>
      <a class="btn btn-primary" href="team.php?page=edit&amp;new=1">+ Add member</a>
    </div>

    <table>
      <tr><th style="width:60px"></th><th>Name &amp; role</th><th style="width:80px">Show</th><th style="width:150px"></th></tr>
      <?php foreach ($team as $m):
        $on = ($m['available'] ?? true) !== false; ?>
        <tr class="<?= $on ? '' : 'off' ?>">
          <td>
            <?php if (!empty($m['photo'])): ?>
              <img class="av" src="<?= h($m['photo']) ?>" alt="">
            <?php else: ?>
              <div class="av"><?= h($m['emoji'] ?? '👤') ?></div>
            <?php endif; ?>
          </td>
          <td>
            <div class="nm"><?= h($m['name']) ?><?= $on ? '' : ' <span class="lang ja">HIDDEN</span>' ?>
              <small><?= h($m['role']) ?><?= !empty($m['roleJa']) ? ' / ' . h($m['roleJa']) : '' ?></small>
              <em><?= h(mb_substr($m['desc'] ?? '', 0, 70)) ?><?= mb_strlen($m['desc'] ?? '') > 70 ? '…' : '' ?></em>
            </div>
          </td>
          <td>
            <input type="hidden" name="known[]" value="<?= h($m['id']) ?>">
            <label class="sw"><input type="checkbox" name="available[<?= h($m['id']) ?>]" value="1" <?= $on ? 'checked' : '' ?>><span></span></label>
          </td>
          <td>
            <div class="acts">
              <a class="btn btn-secondary btn-sm" href="team.php?page=edit&amp;id=<?= urlencode($m['id']) ?>">Edit</a>
              <button class="btn btn-secondary btn-sm" type="submit" form="tm-up-<?= h($m['id']) ?>">↑</button>
              <button class="btn btn-secondary btn-sm" type="submit" form="tm-dn-<?= h($m['id']) ?>">↓</button>
            </div>
          </td>
        </tr>
      <?php endforeach; ?>
      <?php if (!$team): ?>
        <tr><td colspan="4" style="text-align:center;padding:40px;color:#999">No team members yet. Click "+ Add member".</td></tr>
      <?php endif; ?>
    </table>

    <div class="sticky-save">
      <p>Show/Hide badla ho to save karna na bhulein.</p>
      <button class="btn btn-primary" type="submit">Save changes</button>
    </div>
  </form>

  <?php foreach ($team as $m): ?>
    <form id="tm-up-<?= h($m['id']) ?>" method="post" style="display:none">
      <input type="hidden" name="action" value="move"><input type="hidden" name="dir" value="up"><input type="hidden" name="id" value="<?= h($m['id']) ?>">
    </form>
    <form id="tm-dn-<?= h($m['id']) ?>" method="post" style="display:none">
      <input type="hidden" name="action" value="move"><input type="hidden" name="dir" value="down"><input type="hidden" name="id" value="<?= h($m['id']) ?>">
    </form>
  <?php endforeach; ?>

  <?php if (file_exists(TEAM_BAK)): ?>
    <div class="card" style="margin-top:18px">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap">
        <div style="font-size:13px;color:#777">Galti ho gayi? <?= h(date('d M Y, H:i', filemtime(TEAM_BAK))) ?> wali copy wapas la sakte hain.</div>
        <form method="post" onsubmit="return confirm('Undo the last save?')">
          <input type="hidden" name="action" value="restore">
          <button class="btn btn-secondary" type="submit">Undo last save</button>
        </form>
      </div>
    </div>
  <?php endif; ?>

<?php else: /* ---- edit / add ---- */ ?>

  <?php $e = $editMember; ?>
  <div class="head">
    <h2><?= $e ? 'Edit member' : 'Add team member' ?></h2>
    <a class="btn btn-secondary" href="team.php">← Back</a>
  </div>

  <form method="post" enctype="multipart/form-data">
    <input type="hidden" name="action" value="save_member">
    <input type="hidden" name="edit_id" value="<?= h($e['id'] ?? '') ?>">
    <input type="hidden" name="existing_photo" value="<?= h($e['photo'] ?? '') ?>">

    <div class="card">
      <div class="fg">
        <label>Name</label>
        <input type="text" name="name" required value="<?= h($e['name'] ?? '') ?>" placeholder="KHATRI NARAYAN">
      </div>

      <div class="row2">
        <div class="fg">
          <label>Role <span class="lang en">EN</span></label>
          <input type="text" name="role" value="<?= h($e['role'] ?? '') ?>" placeholder="Head Chef">
        </div>
        <div class="fg">
          <label>Role <span class="lang ja">日本語</span></label>
          <input type="text" name="roleJa" value="<?= h($e['roleJa'] ?? '') ?>" placeholder="ヘッドシェフ">
        </div>
      </div>

      <div class="row2">
        <div class="fg">
          <label>About <span class="lang en">EN</span></label>
          <textarea name="desc"><?= h($e['desc'] ?? '') ?></textarea>
        </div>
        <div class="fg">
          <label>About <span class="lang ja">日本語</span></label>
          <textarea name="descJa"><?= h($e['descJa'] ?? '') ?></textarea>
        </div>
      </div>

      <div class="fg">
        <label>Photo</label>
        <input type="file" name="photo" accept="image/*">
        <?php if (!empty($e['photo'])): ?>
          <img class="prev" src="<?= h($e['photo']) ?>" alt="">
          <label class="chk" style="margin-top:10px"><input type="checkbox" name="remove_photo" value="1"> Photo hata dein (emoji wapas aa jayega)</label>
        <?php endif; ?>
        <p style="font-size:12px;color:#999;margin-top:6px">Square photo best hai. Photo na ho to niche wala emoji dikhega.</p>
      </div>

      <div class="fg" style="max-width:220px">
        <label>Emoji (photo na ho to)</label>
        <input type="text" name="emoji" id="emoji" value="<?= h($e['emoji'] ?? '👤') ?>">
        <div class="emoji-pick">
          <?php foreach (['👨‍🍳', '👩‍🍳', '👨', '👩', '🧑', '👤'] as $em): ?>
            <button type="button" onclick="document.getElementById('emoji').value='<?= $em ?>'"><?= $em ?></button>
          <?php endforeach; ?>
        </div>
      </div>

      <label class="chk"><input type="checkbox" name="available" value="1" <?= ($e === null || ($e['available'] ?? true) !== false) ? 'checked' : '' ?>> About page pe dikhaye</label>
    </div>

    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <button class="btn btn-primary" type="submit">Save member</button>
      <a class="btn btn-secondary" href="team.php">Cancel</a>
      <?php if ($e): ?>
        <button class="btn btn-danger" type="submit" form="tdel" onclick="return confirm('Remove <?= h(addslashes($e['name'])) ?> permanently? Agar wo wapas aa sakta hai to Show switch band karna better hai.')">Delete</button>
      <?php endif; ?>
    </div>
  </form>

  <?php if ($e): ?>
  <form id="tdel" method="post" style="display:none">
    <input type="hidden" name="action" value="delete_member">
    <input type="hidden" name="id" value="<?= h($e['id']) ?>">
  </form>
  <?php endif; ?>

<?php endif; ?>

</div>
</body>
</html>
