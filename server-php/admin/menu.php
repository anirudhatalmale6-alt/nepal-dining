<?php
/**
 * Menu manager — the owner edits the food list here instead of asking me.
 *
 * Writes /menu-data/menu.json, which BOTH the Menu page and the Order (takeaway)
 * page read at runtime. One edit updates both; before this, the 29 items were
 * typed out separately in each page's source and had already drifted apart.
 *
 * Every write keeps the previous file as menu.json.bak, so a bad edit is one
 * SSH copy away from being undone.
 */
require_once __DIR__ . '/config.php';
requireLogin();

define('MENU_DIR',  __DIR__ . '/../menu-data');
define('MENU_FILE', MENU_DIR . '/menu.json');
define('MENU_BAK',  MENU_DIR . '/menu.json.bak');

/** Shape the rest of the file can rely on, whatever is (or isn't) on disk. */
function defaultMenu() {
    return [
        'updated'    => gmdate('c'),
        'categories' => [
            ['key' => 'Curry',       'ja' => 'カレー'],
            ['key' => 'Soup Curry',  'ja' => 'スープカレー'],
            ['key' => 'Naan & Rice', 'ja' => 'ナン＆ライス'],
            ['key' => 'Tandoori',    'ja' => 'タンドリー'],
            ['key' => 'Sides',       'ja' => 'サイド'],
        ],
        'options' => [
            'largeExtra' => 200,
            'naanRice'   => [
                ['en' => 'Plain Naan',  'ja' => 'プレーンナン',     'extra' => 0],
                ['en' => 'Garlic Naan', 'ja' => 'ガーリックナン',   'extra' => 100],
                ['en' => 'Cheese Naan', 'ja' => 'チーズナン',       'extra' => 150],
                ['en' => 'Rice',        'ja' => 'ライス',           'extra' => 0],
            ],
        ],
        'items' => [],
    ];
}

function loadMenu() {
    if (!file_exists(MENU_FILE)) return defaultMenu();
    $data = json_decode(file_get_contents(MENU_FILE), true);
    if (!is_array($data) || !isset($data['items'])) return defaultMenu();
    $d = defaultMenu();
    // Merge shallowly so a file written by an older version still opens.
    foreach (['categories', 'options', 'items'] as $k) {
        if (!empty($data[$k])) $d[$k] = $data[$k];
    }
    return $d;
}

function saveMenu($menu) {
    if (!is_dir(MENU_DIR)) mkdir(MENU_DIR, 0755, true);
    $menu['updated'] = gmdate('c');
    // Keep one generation back. Cheap insurance against a mis-click wiping the
    // whole list — the site reads this file live, so a bad write is visible
    // to customers immediately.
    if (file_exists(MENU_FILE)) @copy(MENU_FILE, MENU_BAK);
    $json = json_encode($menu, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    file_put_contents(MENU_FILE, $json, LOCK_EX);
}

function menuSlug($text) {
    $t = strtolower(trim($text));
    $t = preg_replace('/[^a-z0-9]+/', '-', $t);
    return trim($t, '-');
}

/** Unique id so two "Chicken Curry" entries can't overwrite each other. */
function uniqueId($base, $items, $ignoreId = '') {
    $base = $base ?: 'item';
    $id = $base;
    $n = 2;
    $taken = [];
    foreach ($items as $it) {
        if ($it['id'] !== $ignoreId) $taken[$it['id']] = true;
    }
    while (isset($taken[$id])) { $id = $base . '-' . $n; $n++; }
    return $id;
}

$menu   = loadMenu();
$notice = '';
$error  = '';
$action = $_POST['action'] ?? '';

// ---------------------------------------------------------------- actions ---
if ($action === 'save_prices') {
    $prices = $_POST['price'] ?? [];
    $avail  = $_POST['available'] ?? [];
    $changed = 0;
    foreach ($menu['items'] as $i => $it) {
        $id = $it['id'];
        if (isset($prices[$id]) && $prices[$id] !== '') {
            $new = (int) $prices[$id];
            if ($new >= 0 && $new !== (int) $it['price']) {
                $menu['items'][$i]['price'] = $new;
                $changed++;
            }
        }
        // Unchecked checkboxes are simply absent from the POST, so presence is
        // the whole test — but only for rows that were actually on screen.
        $wasShown = isset($prices[$id]);
        if ($wasShown) {
            $nowAvail = isset($avail[$id]);
            if ($nowAvail !== ($it['available'] !== false)) {
                $menu['items'][$i]['available'] = $nowAvail;
                $changed++;
            }
        }
    }
    saveMenu($menu);
    $notice = $changed ? "Saved — $changed change(s) are live now." : 'Nothing changed.';
}

if ($action === 'save_item') {
    $editId = trim($_POST['edit_id'] ?? '');
    $nameEn = trim($_POST['name'] ?? '');

    if ($nameEn === '') {
        $error = 'English name is required.';
    } else {
        $img = trim($_POST['existing_img'] ?? '');
        if (!empty($_FILES['img']) && $_FILES['img']['error'] === UPLOAD_ERR_OK) {
            if (!is_dir(UPLOADS_DIR)) mkdir(UPLOADS_DIR, 0755, true);
            $ext = strtolower(pathinfo($_FILES['img']['name'], PATHINFO_EXTENSION));
            if (in_array($ext, ['jpg', 'jpeg', 'png', 'webp', 'gif'])) {
                $fname = menuSlug($nameEn) . '-' . time() . '.' . $ext;
                if (move_uploaded_file($_FILES['img']['tmp_name'], UPLOADS_DIR . '/' . $fname)) {
                    $img = UPLOADS_URL . '/' . $fname;
                }
            } else {
                $error = 'Photo must be JPG, PNG, WEBP or GIF.';
            }
        }

        if (!$error) {
            $item = [
                'id'              => $editId ?: uniqueId(menuSlug($nameEn), $menu['items']),
                'cat'             => trim($_POST['cat'] ?? 'Curry') ?: 'Curry',
                'name'            => $nameEn,
                'nameJa'          => trim($_POST['nameJa'] ?? '') ?: $nameEn,
                'price'           => max(0, (int) ($_POST['price'] ?? 0)),
                'desc'            => trim($_POST['desc'] ?? ''),
                'descJa'          => trim($_POST['descJa'] ?? ''),
                'tag'             => trim($_POST['tag'] ?? ''),
                'tagJa'           => trim($_POST['tagJa'] ?? ''),
                'img'             => $img,
                'spice'           => max(0, min(5, (int) ($_POST['spice'] ?? 0))),
                'hasNaanRice'     => isset($_POST['hasNaanRice']),
                'hasLargePortion' => isset($_POST['hasLargePortion']),
                'available'       => isset($_POST['available']),
            ];

            $found = false;
            foreach ($menu['items'] as $i => $it) {
                if ($it['id'] === $editId && $editId !== '') {
                    $menu['items'][$i] = $item;
                    $found = true;
                    break;
                }
            }
            if (!$found) $menu['items'][] = $item;

            // A brand-new category typed into the form has to join the filter
            // bar, or its items are invisible on the website.
            $known = array_column($menu['categories'], 'key');
            if (!in_array($item['cat'], $known, true)) {
                $menu['categories'][] = ['key' => $item['cat'], 'ja' => $item['cat']];
            }

            saveMenu($menu);
            header('Location: menu.php?saved=1');
            exit;
        }
    }
}

if ($action === 'delete_item') {
    $id = $_POST['id'] ?? '';
    $before = count($menu['items']);
    $menu['items'] = array_values(array_filter($menu['items'], fn($it) => $it['id'] !== $id));
    if (count($menu['items']) !== $before) {
        saveMenu($menu);
        $notice = 'Item deleted.';
    }
}

if ($action === 'move') {
    $id  = $_POST['id'] ?? '';
    $dir = $_POST['dir'] === 'up' ? -1 : 1;
    foreach ($menu['items'] as $i => $it) {
        if ($it['id'] === $id) {
            $j = $i + $dir;
            if ($j >= 0 && $j < count($menu['items'])) {
                $tmp = $menu['items'][$j];
                $menu['items'][$j] = $menu['items'][$i];
                $menu['items'][$i] = $tmp;
                saveMenu($menu);
            }
            break;
        }
    }
}

if ($action === 'save_options') {
    $menu['options']['largeExtra'] = max(0, (int) ($_POST['largeExtra'] ?? 200));

    $naan = [];
    $en = $_POST['naan_en'] ?? [];
    foreach ($en as $k => $v) {
        $v = trim($v);
        if ($v === '') continue;
        $naan[] = [
            'en'    => $v,
            'ja'    => trim($_POST['naan_ja'][$k] ?? '') ?: $v,
            'extra' => max(0, (int) ($_POST['naan_extra'][$k] ?? 0)),
        ];
    }
    if ($naan) $menu['options']['naanRice'] = $naan;

    $cats = [];
    foreach (($_POST['cat_key'] ?? []) as $k => $v) {
        $v = trim($v);
        if ($v === '') continue;
        $cats[] = ['key' => $v, 'ja' => trim($_POST['cat_ja'][$k] ?? '') ?: $v];
    }
    if ($cats) $menu['categories'] = $cats;

    saveMenu($menu);
    $notice = 'Options saved.';
}

if (isset($_GET['saved'])) $notice = 'Item saved — it is live on the website now.';
if (isset($_GET['restored'])) $notice = 'Previous version restored.';

if ($action === 'restore') {
    if (file_exists(MENU_BAK)) {
        $bak = json_decode(file_get_contents(MENU_BAK), true);
        if (is_array($bak) && !empty($bak['items'])) {
            // Deliberately not backing up again here — restoring twice in a row
            // would otherwise just swap between two bad versions.
            file_put_contents(MENU_FILE, json_encode($bak, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES), LOCK_EX);
            header('Location: menu.php?restored=1');
            exit;
        }
    }
    $error = 'No backup available yet.';
}

$menu = loadMenu();
$items = $menu['items'];
$catKeys = array_column($menu['categories'], 'key');

$page = $_GET['page'] ?? 'list';
$editItem = null;
if ($page === 'edit' && isset($_GET['id'])) {
    foreach ($items as $it) {
        if ($it['id'] === $_GET['id']) { $editItem = $it; break; }
    }
    if (!$editItem) $page = 'list';
}

$unreadMsgs = 0;
if (file_exists(DATA_DIR . '/messages.json')) {
    $mm = json_decode(file_get_contents(DATA_DIR . '/messages.json'), true);
    if (is_array($mm)) $unreadMsgs = count(array_filter($mm, fn($m) => empty($m['read'])));
}

$soldOut = count(array_filter($items, fn($i) => ($i['available'] ?? true) === false));
function h($s) { return htmlspecialchars((string) $s, ENT_QUOTES, 'UTF-8'); }
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Nepal Dining — Menu Manager</title>
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
.container { max-width: 1100px; margin: 0 auto; padding: 20px; }
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
.btn-secondary:hover { background: #e2e2e2; }
.btn-danger { background: #fef2f2; color: #C0392B; }
.btn-sm { padding: 5px 10px; font-size: 12px; }
.card { background: white; border-radius: 12px; padding: 20px; margin-bottom: 18px; }
table { width: 100%; background: white; border-radius: 12px; overflow: hidden; border-collapse: collapse; }
th { background: #fafaf8; text-align: left; padding: 10px 12px; font-size: 11px; color: #888; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
td { padding: 10px 12px; border-top: 1px solid #f0f0f0; font-size: 14px; vertical-align: middle; }
tr.off td { background: #fbfbfb; opacity: 0.6; }
.cat-row td { background: #1C1A18; color: #D4821A; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.06em; }
.thumb { width: 46px; height: 36px; border-radius: 6px; object-fit: cover; background: #eee; }
.nm { font-weight: 600; color: #1C1A18; }
.nm small { display: block; font-weight: 400; color: #999; font-size: 12px; }
.price-in { width: 92px; padding: 7px 8px; border: 1px solid #ddd; border-radius: 7px; font-size: 14px; font-weight: 700; text-align: right; }
.price-in:focus { outline: none; border-color: #C0392B; }
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
.fg input[type=text], .fg input[type=number], .fg select, .fg textarea { width: 100%; padding: 10px 13px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; font-family: inherit; }
.fg input:focus, .fg select:focus, .fg textarea:focus { outline: none; border-color: #C0392B; }
.fg textarea { min-height: 70px; resize: vertical; }
.row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.row3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; }
.chk { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; font-size: 14px; }
.chk input { width: auto; }
.prev { width: 130px; height: 90px; border-radius: 8px; object-fit: cover; border: 1px solid #eee; margin-top: 8px; display: block; }
.lang { display: inline-block; font-size: 10px; font-weight: 700; padding: 1px 6px; border-radius: 4px; margin-left: 5px; }
.lang.en { background: #E0E7FF; color: #3730A3; }
.lang.ja { background: #FCE7F3; color: #9D174D; }
@media (max-width: 700px) {
  .row2, .row3 { grid-template-columns: 1fr; }
  .hide-sm { display: none; }
  td, th { padding: 8px 6px; }
}
</style>
</head>
<body>

<div class="topbar">
  <h1>Nepal<span>Dining</span> — Menu Manager</h1>
  <div class="topbar-right">
    <a href="menu.php" class="on">Menu</a>
    <a href="index.php">Blog</a>
    <a href="messages.php">Messages<?= $unreadMsgs ? '<span class="pill">' . $unreadMsgs . '</span>' : '' ?></a>
    <a href="https://nepaldining.online/menu/" target="_blank">View site ↗</a>
    <a href="index.php?logout=1">Logout</a>
  </div>
</div>

<div class="container">

<?php if ($notice): ?><div class="notice"><?= h($notice) ?></div><?php endif; ?>
<?php if ($error): ?><div class="err"><?= h($error) ?></div><?php endif; ?>

<?php if ($page === 'list'): ?>

  <div class="stats">
    <div class="stat"><div class="num"><?= count($items) ?></div><div class="label">Items on menu</div></div>
    <div class="stat"><div class="num"><?= count($menu['categories']) ?></div><div class="label">Categories</div></div>
    <div class="stat"><div class="num"><?= $soldOut ?></div><div class="label">Hidden / sold out</div></div>
    <div class="stat"><div class="num">¥<?= number_format($menu['options']['largeExtra']) ?></div><div class="label">Large portion extra</div></div>
  </div>

  <div class="hint">
    <b>Rate change karna ho to:</b> niche wale box me naya price type kijiye aur <b>Save all changes</b> dabaiye.
    Ek hi list Menu page aur Order (takeaway) page — dono pe chalti hai, do jagah badalne ki zarurat nahi.<br>
    <b>Aaj koi cheez khatam ho gayi?</b> Uska green switch band kar dijiye — item website se chhup jayega, delete karne ki zarurat nahi. Kal wapas on kar dena.
  </div>

  <form method="post">
    <input type="hidden" name="action" value="save_prices">
    <div class="head">
      <h2>Menu items</h2>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <a class="btn btn-secondary" href="menu.php?page=options">Options &amp; categories</a>
        <a class="btn btn-primary" href="menu.php?page=edit&amp;new=1">+ Add item</a>
      </div>
    </div>

    <table>
      <tr>
        <th style="width:52px"></th>
        <th>Item</th>
        <th style="width:110px">Price ¥</th>
        <th style="width:70px" class="hide-sm">Show</th>
        <th style="width:150px"></th>
      </tr>
      <?php
      $lastCat = null;
      foreach ($items as $it):
        $avail = ($it['available'] ?? true) !== false;
        if ($it['cat'] !== $lastCat):
          $lastCat = $it['cat'];
          $ja = '';
          foreach ($menu['categories'] as $c) if ($c['key'] === $lastCat) $ja = $c['ja'];
      ?>
        <tr class="cat-row"><td colspan="5"><?= h($lastCat) ?><?= $ja && $ja !== $lastCat ? ' / ' . h($ja) : '' ?></td></tr>
      <?php endif; ?>
        <tr class="<?= $avail ? '' : 'off' ?>">
          <td><?php if (!empty($it['img'])): ?><img class="thumb" src="<?= h($it['img']) ?>" alt=""><?php else: ?><div class="thumb"></div><?php endif; ?></td>
          <td>
            <div class="nm"><?= h($it['name']) ?><?= $avail ? '' : ' <span class="lang ja">SOLD OUT</span>' ?>
              <small><?= h($it['nameJa']) ?><?= $it['spice'] > 0 ? ' · ' . str_repeat('🌶', $it['spice']) : '' ?></small>
            </div>
          </td>
          <td><input class="price-in" type="number" min="0" step="10" name="price[<?= h($it['id']) ?>]" value="<?= (int) $it['price'] ?>"></td>
          <td class="hide-sm">
            <label class="sw"><input type="checkbox" name="available[<?= h($it['id']) ?>]" value="1" <?= $avail ? 'checked' : '' ?>><span></span></label>
          </td>
          <td>
            <div class="acts">
              <a class="btn btn-secondary btn-sm" href="menu.php?page=edit&amp;id=<?= urlencode($it['id']) ?>">Edit</a>
              <button class="btn btn-secondary btn-sm" type="submit" form="mv-up-<?= h($it['id']) ?>" title="Move up">↑</button>
              <button class="btn btn-secondary btn-sm" type="submit" form="mv-dn-<?= h($it['id']) ?>" title="Move down">↓</button>
            </div>
          </td>
        </tr>
      <?php endforeach; ?>
      <?php if (!$items): ?>
        <tr><td colspan="5" style="text-align:center;padding:40px;color:#999">No items yet. Click "+ Add item".</td></tr>
      <?php endif; ?>
    </table>

    <div class="sticky-save">
      <p>Price ya Show/Sold-out badla ho to save karna na bhulein.</p>
      <button class="btn btn-primary" type="submit">Save all changes</button>
    </div>
  </form>

  <?php // Move buttons live in their own forms so they can't submit the price grid. ?>
  <?php foreach ($items as $it): ?>
    <form id="mv-up-<?= h($it['id']) ?>" method="post" style="display:none">
      <input type="hidden" name="action" value="move"><input type="hidden" name="dir" value="up"><input type="hidden" name="id" value="<?= h($it['id']) ?>">
    </form>
    <form id="mv-dn-<?= h($it['id']) ?>" method="post" style="display:none">
      <input type="hidden" name="action" value="move"><input type="hidden" name="dir" value="down"><input type="hidden" name="id" value="<?= h($it['id']) ?>">
    </form>
  <?php endforeach; ?>

  <?php if (file_exists(MENU_BAK)): ?>
    <div class="card" style="margin-top:18px">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap">
        <div style="font-size:13px;color:#777">
          Galti ho gayi? Pichhli version wapas la sakte hain — <?= h(date('d M Y, H:i', filemtime(MENU_BAK))) ?> ki copy rakhi hai.
        </div>
        <form method="post" onsubmit="return confirm('Undo the last save and go back to the previous menu?')">
          <input type="hidden" name="action" value="restore">
          <button class="btn btn-secondary" type="submit">Undo last save</button>
        </form>
      </div>
    </div>
  <?php endif; ?>

<?php elseif ($page === 'options'): ?>

  <div class="head"><h2>Options &amp; categories</h2><a class="btn btn-secondary" href="menu.php">← Back to items</a></div>

  <form method="post">
    <input type="hidden" name="action" value="save_options">

    <div class="card">
      <h3 style="font-size:15px;margin-bottom:12px">Extra charges</h3>
      <div class="fg" style="max-width:280px">
        <label>Large portion — extra ¥</label>
        <input type="number" min="0" step="10" name="largeExtra" value="<?= (int) $menu['options']['largeExtra'] ?>">
      </div>

      <h3 style="font-size:15px;margin:20px 0 12px">Naan / Rice choice (curry ke saath)</h3>
      <table>
        <tr><th>Name (English)</th><th>日本語</th><th style="width:130px">Extra ¥</th></tr>
        <?php foreach ($menu['options']['naanRice'] as $k => $o): ?>
        <tr>
          <td><input type="text" name="naan_en[<?= $k ?>]" value="<?= h($o['en']) ?>" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:7px"></td>
          <td><input type="text" name="naan_ja[<?= $k ?>]" value="<?= h($o['ja']) ?>" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:7px"></td>
          <td><input type="number" min="0" step="10" name="naan_extra[<?= $k ?>]" value="<?= (int) $o['extra'] ?>" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:7px"></td>
        </tr>
        <?php endforeach; ?>
        <?php $nk = count($menu['options']['naanRice']); ?>
        <tr>
          <td><input type="text" name="naan_en[<?= $nk ?>]" placeholder="+ new option" style="width:100%;padding:8px;border:1px dashed #ccc;border-radius:7px"></td>
          <td><input type="text" name="naan_ja[<?= $nk ?>]" style="width:100%;padding:8px;border:1px dashed #ccc;border-radius:7px"></td>
          <td><input type="number" min="0" step="10" name="naan_extra[<?= $nk ?>]" value="0" style="width:100%;padding:8px;border:1px dashed #ccc;border-radius:7px"></td>
        </tr>
      </table>
      <p style="font-size:12px;color:#999;margin-top:8px">Naam khali chhod dein to wo option hat jayega.</p>
    </div>

    <div class="card">
      <h3 style="font-size:15px;margin-bottom:6px">Categories</h3>
      <p style="font-size:12px;color:#999;margin-bottom:12px">Website pe filter buttons isi order me dikhte hain. English naam wahi rakhein jo items me use hua hai.</p>
      <table>
        <tr><th>Category (English)</th><th>日本語</th></tr>
        <?php foreach ($menu['categories'] as $k => $c): ?>
        <tr>
          <td><input type="text" name="cat_key[<?= $k ?>]" value="<?= h($c['key']) ?>" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:7px"></td>
          <td><input type="text" name="cat_ja[<?= $k ?>]" value="<?= h($c['ja']) ?>" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:7px"></td>
        </tr>
        <?php endforeach; ?>
        <?php $ck = count($menu['categories']); ?>
        <tr>
          <td><input type="text" name="cat_key[<?= $ck ?>]" placeholder="+ new category" style="width:100%;padding:8px;border:1px dashed #ccc;border-radius:7px"></td>
          <td><input type="text" name="cat_ja[<?= $ck ?>]" style="width:100%;padding:8px;border:1px dashed #ccc;border-radius:7px"></td>
        </tr>
      </table>
    </div>

    <button class="btn btn-primary" type="submit">Save options</button>
  </form>

<?php else: /* ---- edit / add ---- */ ?>

  <?php $e = $editItem; ?>
  <div class="head">
    <h2><?= $e ? 'Edit item' : 'Add new item' ?></h2>
    <a class="btn btn-secondary" href="menu.php">← Back to items</a>
  </div>

  <form method="post" enctype="multipart/form-data">
    <input type="hidden" name="action" value="save_item">
    <input type="hidden" name="edit_id" value="<?= h($e['id'] ?? '') ?>">
    <input type="hidden" name="existing_img" value="<?= h($e['img'] ?? '') ?>">

    <div class="card">
      <div class="row2">
        <div class="fg">
          <label>Name <span class="lang en">EN</span></label>
          <input type="text" name="name" required value="<?= h($e['name'] ?? '') ?>" placeholder="Butter Chicken Curry">
        </div>
        <div class="fg">
          <label>Name <span class="lang ja">日本語</span></label>
          <input type="text" name="nameJa" value="<?= h($e['nameJa'] ?? '') ?>" placeholder="バターチキンカレー">
        </div>
      </div>

      <div class="row3">
        <div class="fg">
          <label>Price ¥</label>
          <input type="number" min="0" step="10" name="price" value="<?= (int) ($e['price'] ?? 0) ?>">
        </div>
        <div class="fg">
          <label>Category</label>
          <input type="text" name="cat" list="catlist" value="<?= h($e['cat'] ?? ($catKeys[0] ?? 'Curry')) ?>">
          <datalist id="catlist">
            <?php foreach ($catKeys as $c): ?><option value="<?= h($c) ?>"><?php endforeach; ?>
          </datalist>
        </div>
        <div class="fg">
          <label>Spice level</label>
          <select name="spice">
            <?php
            $sp = ['Not spicy', '🌶 Mild', '🌶🌶 Medium', '🌶🌶🌶 Hot', '🌶🌶🌶🌶 Very hot', '🌶🌶🌶🌶🌶 Extra hot'];
            foreach ($sp as $i => $lbl): ?>
              <option value="<?= $i ?>" <?= (int) ($e['spice'] ?? 0) === $i ? 'selected' : '' ?>><?= $lbl ?></option>
            <?php endforeach; ?>
          </select>
        </div>
      </div>

      <div class="row2">
        <div class="fg">
          <label>Description <span class="lang en">EN</span></label>
          <textarea name="desc"><?= h($e['desc'] ?? '') ?></textarea>
        </div>
        <div class="fg">
          <label>Description <span class="lang ja">日本語</span></label>
          <textarea name="descJa"><?= h($e['descJa'] ?? '') ?></textarea>
        </div>
      </div>

      <div class="row2">
        <div class="fg">
          <label>Badge <span class="lang en">EN</span> <span style="font-weight:400;color:#999">— Popular, Best Seller, New…</span></label>
          <input type="text" name="tag" value="<?= h($e['tag'] ?? '') ?>">
        </div>
        <div class="fg">
          <label>Badge <span class="lang ja">日本語</span></label>
          <input type="text" name="tagJa" value="<?= h($e['tagJa'] ?? '') ?>">
        </div>
      </div>

      <div class="fg">
        <label>Photo</label>
        <input type="file" name="img" accept="image/*">
        <?php if (!empty($e['img'])): ?>
          <img class="prev" src="<?= h($e['img']) ?>" alt="">
          <p style="font-size:12px;color:#999;margin-top:6px">Nayi photo choose karenge to purani replace ho jayegi. Nahi to jaisi hai waisi rahegi.</p>
        <?php endif; ?>
      </div>

      <label class="chk"><input type="checkbox" name="hasNaanRice" value="1" <?= !empty($e['hasNaanRice']) ? 'checked' : '' ?>> Customer naan / rice choose kar sakta hai</label>
      <label class="chk"><input type="checkbox" name="hasLargePortion" value="1" <?= !empty($e['hasLargePortion']) ? 'checked' : '' ?>> Large portion available (+¥<?= (int) $menu['options']['largeExtra'] ?>)</label>
      <label class="chk"><input type="checkbox" name="available" value="1" <?= ($e === null || ($e['available'] ?? true) !== false) ? 'checked' : '' ?>> Website pe dikhaye (band karne se sold out ho jayega)</label>
    </div>

    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <button class="btn btn-primary" type="submit">Save item</button>
      <a class="btn btn-secondary" href="menu.php">Cancel</a>
      <?php if ($e): ?>
        <button class="btn btn-danger" type="submit" form="del-form" onclick="return confirm('Delete <?= h(addslashes($e['name'])) ?> permanently? Sold-out ke liye Show switch band karna better hai.')">Delete</button>
      <?php endif; ?>
    </div>
  </form>

  <?php if ($e): ?>
  <form id="del-form" method="post" style="display:none">
    <input type="hidden" name="action" value="delete_item">
    <input type="hidden" name="id" value="<?= h($e['id']) ?>">
  </form>
  <?php endif; ?>

<?php endif; ?>

</div>
</body>
</html>
