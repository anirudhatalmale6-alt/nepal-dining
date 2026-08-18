<?php
require_once __DIR__ . '/config.php';
requireLogin();

define('MESSAGES_FILE', DATA_DIR . '/messages.json');

function getMessages() {
    if (!file_exists(MESSAGES_FILE)) return [];
    $d = json_decode(file_get_contents(MESSAGES_FILE), true);
    return is_array($d) ? $d : [];
}

function saveMessages($list) {
    file_put_contents(MESSAGES_FILE, json_encode($list, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES), LOCK_EX);
}

// Mark read / delete
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action'], $_POST['id'])) {
    $list = getMessages();
    foreach ($list as $i => $m) {
        if (($m['id'] ?? '') === $_POST['id']) {
            if ($_POST['action'] === 'delete')    array_splice($list, $i, 1);
            if ($_POST['action'] === 'toggleRead') $list[$i]['read'] = empty($m['read']);
            break;
        }
    }
    saveMessages($list);
    header('Location: messages.php');
    exit;
}

$messages = getMessages();
$unread = count(array_filter($messages, fn($m) => empty($m['read'])));
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Messages — Nepal Dining Admin</title>
<style>
* { margin:0; padding:0; box-sizing:border-box; }
body { font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; background:#F5F1EA; color:#1C1A18; }
.topbar { background:#1C1A18; color:white; padding:0 24px; height:56px; display:flex; align-items:center; justify-content:space-between; position:sticky; top:0; z-index:100; }
.topbar h1 { font-size:16px; font-weight:700; }
.topbar h1 span { color:#D4821A; }
.topbar-right { display:flex; align-items:center; gap:12px; }
.topbar a { color:rgba(255,255,255,0.7); text-decoration:none; font-size:13px; padding:6px 12px; border-radius:6px; transition:all .2s; }
.topbar a:hover { background:rgba(255,255,255,0.1); color:white; }
.container { max-width:1000px; margin:0 auto; padding:24px; }
.stats { display:grid; grid-template-columns:repeat(auto-fit,minmax(150px,1fr)); gap:16px; margin-bottom:24px; }
.stat-card { background:white; border-radius:12px; padding:20px; box-shadow:0 2px 8px rgba(28,26,24,.06); }
.stat-card .num { font-size:28px; font-weight:800; color:#D4821A; line-height:1; }
.stat-card .label { font-size:12px; color:#8B7A68; text-transform:uppercase; letter-spacing:.05em; margin-top:6px; }
.msg { background:white; border-radius:12px; padding:20px; margin-bottom:14px; box-shadow:0 2px 8px rgba(28,26,24,.06); border-left:4px solid transparent; }
.msg.unread { border-left-color:#D4821A; background:#FFFDF8; }
.msg-head { display:flex; justify-content:space-between; align-items:flex-start; gap:16px; flex-wrap:wrap; margin-bottom:10px; }
.msg-who { font-size:16px; font-weight:700; }
.msg-sub { display:inline-block; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:.04em; background:#F0E6D8; color:#8B6914; padding:3px 10px; border-radius:20px; margin-top:6px; }
.msg-date { font-size:12px; color:#8B7A68; white-space:nowrap; }
.msg-contact { font-size:13px; color:#6B5E4E; margin-bottom:12px; }
.msg-contact a { color:#D4821A; text-decoration:none; font-weight:600; }
.msg-body { font-size:15px; line-height:1.7; color:#1C1A18; white-space:pre-wrap; word-break:break-word; background:#FAF7F2; padding:14px 16px; border-radius:8px; }
.msg-actions { display:flex; gap:8px; margin-top:14px; flex-wrap:wrap; }
.btn { font-size:13px; font-weight:600; padding:8px 16px; border-radius:8px; border:none; cursor:pointer; text-decoration:none; display:inline-block; }
.btn-reply { background:linear-gradient(135deg,#D4821A,#F0A830); color:white; }
.btn-wa { background:#25D366; color:white; }
.btn-read { background:#EDE7DE; color:#6B5E4E; }
.btn-del { background:#FDECEA; color:#C0392B; }
.badge { background:#D4821A; color:white; font-size:11px; font-weight:700; padding:2px 8px; border-radius:20px; margin-left:6px; }
.empty { background:white; border-radius:12px; padding:60px 24px; text-align:center; color:#8B7A68; }
.empty .ico { font-size:48px; margin-bottom:12px; }
.note { background:#FFF8E8; border:1px solid #F0D9A8; border-radius:10px; padding:14px 16px; font-size:13px; color:#8B6914; line-height:1.6; margin-bottom:20px; }
@media (max-width:600px){ .stats{grid-template-columns:repeat(2,1fr);} .container{padding:16px;} }
</style>
</head>
<body>

<div class="topbar">
    <h1><span>Nepal Dining</span> Messages</h1>
    <div class="topbar-right">
        <a href="index.php">Blog Posts</a>
        <a href="/" target="_blank">View Site</a>
        <a href="index.php?logout=1">Logout</a>
    </div>
</div>

<div class="container">
    <div class="stats">
        <div class="stat-card"><div class="num"><?= count($messages) ?></div><div class="label">Total Messages</div></div>
        <div class="stat-card"><div class="num"><?= $unread ?></div><div class="label">Unread</div></div>
    </div>

    <div class="note">
        Every message sent through the Contact page is saved here — even if the notification email does not reach your inbox. This page is the reliable copy.
    </div>

    <?php if (!$messages): ?>
        <div class="empty">
            <div class="ico">📭</div>
            <p>No messages yet.</p>
        </div>
    <?php else: foreach ($messages as $m):
        $name = htmlspecialchars($m['name'] ?? '', ENT_QUOTES, 'UTF-8');
        $mail = htmlspecialchars($m['email'] ?? '', ENT_QUOTES, 'UTF-8');
        $ph   = htmlspecialchars($m['phone'] ?? '', ENT_QUOTES, 'UTF-8');
        $sub  = htmlspecialchars($m['subject'] ?? '', ENT_QUOTES, 'UTF-8');
        $body = htmlspecialchars($m['message'] ?? '', ENT_QUOTES, 'UTF-8');
        $id   = htmlspecialchars($m['id'] ?? '', ENT_QUOTES, 'UTF-8');
        $when = !empty($m['date']) ? date('d M Y, H:i', strtotime($m['date'])) : '';
        $waPhone = preg_replace('/[^0-9]/', '', $m['phone'] ?? '');
        if ($waPhone !== '' && strpos($waPhone, '0') === 0) $waPhone = '81' . substr($waPhone, 1);
    ?>
        <div class="msg <?= empty($m['read']) ? 'unread' : '' ?>">
            <div class="msg-head">
                <div>
                    <div class="msg-who"><?= $name ?><?= empty($m['read']) ? '<span class="badge">NEW</span>' : '' ?></div>
                    <div class="msg-sub"><?= $sub ?></div>
                </div>
                <div class="msg-date"><?= $when ?></div>
            </div>
            <div class="msg-contact">
                <?php if ($mail): ?>✉ <a href="mailto:<?= $mail ?>"><?= $mail ?></a><?php endif; ?>
                <?php if ($mail && $ph): ?> &nbsp;·&nbsp; <?php endif; ?>
                <?php if ($ph): ?>📞 <a href="tel:<?= $ph ?>"><?= $ph ?></a><?php endif; ?>
            </div>
            <div class="msg-body"><?= $body ?></div>
            <div class="msg-actions">
                <?php if ($mail): ?>
                    <a class="btn btn-reply" href="mailto:<?= $mail ?>?subject=Re: <?= rawurlencode($m['subject'] ?? '') ?>">Reply by Email</a>
                <?php endif; ?>
                <?php if ($waPhone): ?>
                    <a class="btn btn-wa" href="https://wa.me/<?= $waPhone ?>" target="_blank">WhatsApp</a>
                <?php endif; ?>
                <form method="post" style="display:inline">
                    <input type="hidden" name="id" value="<?= $id ?>">
                    <input type="hidden" name="action" value="toggleRead">
                    <button class="btn btn-read" type="submit"><?= empty($m['read']) ? 'Mark as read' : 'Mark unread' ?></button>
                </form>
                <form method="post" style="display:inline" onsubmit="return confirm('Delete this message?')">
                    <input type="hidden" name="id" value="<?= $id ?>">
                    <input type="hidden" name="action" value="delete">
                    <button class="btn btn-del" type="submit">Delete</button>
                </form>
            </div>
        </div>
    <?php endforeach; endif; ?>
</div>

</body>
</html>
