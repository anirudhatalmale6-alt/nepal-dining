<?php
/**
 * Contact form receiver.
 *
 * Every enquiry is written to disk BEFORE any mail is attempted, so a message
 * can never be lost to a mail problem. The email is a best-effort notification
 * on top of that; the admin panel is the source of truth.
 */

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

define('MESSAGES_FILE', __DIR__ . '/../blog-data/messages.json');
define('NOTIFY_EMAIL', 'krishshivalaya@yahoo.com');

$raw = file_get_contents('php://input');
$in  = json_decode($raw, true);
if (!is_array($in)) $in = $_POST;

$clean = function ($v, $max = 2000) {
    return mb_substr(trim(strip_tags((string)($v ?? ''))), 0, $max);
};

$name    = $clean($in['name'] ?? '', 120);
$email   = $clean($in['email'] ?? '', 160);
$phone   = $clean($in['phone'] ?? '', 60);
$subject = $clean($in['subject'] ?? '', 160);
$message = $clean($in['message'] ?? '', 5000);

if ($name === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Name and message are required']);
    exit;
}
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid email address']);
    exit;
}

// Honeypot: real users never fill this, bots usually do.
if (!empty($in['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

$entry = [
    'id'      => bin2hex(random_bytes(8)),
    'name'    => $name,
    'email'   => $email,
    'phone'   => $phone,
    'subject' => $subject !== '' ? $subject : 'General enquiry',
    'message' => $message,
    'date'    => date('c'),
    'ip'      => $_SERVER['REMOTE_ADDR'] ?? '',
    'read'    => false,
];

// --- Persist first, under a lock so concurrent submits can't clobber each other.
$dir = dirname(MESSAGES_FILE);
if (!is_dir($dir)) mkdir($dir, 0755, true);

$saved = false;
$fp = fopen(MESSAGES_FILE, 'c+');
if ($fp !== false) {
    if (flock($fp, LOCK_EX)) {
        $existing = stream_get_contents($fp);
        $list = json_decode($existing ?: '[]', true);
        if (!is_array($list)) $list = [];
        array_unshift($list, $entry);
        ftruncate($fp, 0);
        rewind($fp);
        fwrite($fp, json_encode($list, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
        fflush($fp);
        flock($fp, LOCK_UN);
        $saved = true;
    }
    fclose($fp);
}

if (!$saved) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Could not save message']);
    exit;
}

// --- Best-effort notification. The domain has no MX/SPF, so this may be
// filtered; failure here must never fail the request.
$mailed = false;
$body = "New message from the Nepal Dining website\n\n"
      . "Name:    {$name}\n"
      . "Email:   " . ($email !== '' ? $email : '-') . "\n"
      . "Phone:   " . ($phone !== '' ? $phone : '-') . "\n"
      . "Subject: {$entry['subject']}\n"
      . "Date:    " . date('Y-m-d H:i') . "\n\n"
      . "Message:\n{$message}\n\n"
      . "-- \nRead all messages: https://www.nepaldining.online/admin/?view=messages\n";

$headers = "From: Nepal Dining Website <noreply@nepaldining.online>\r\n";
if ($email !== '') $headers .= "Reply-To: {$email}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (function_exists('mail')) {
    $mailed = @mail(NOTIFY_EMAIL, 'Website enquiry: ' . $entry['subject'], $body, $headers);
}

echo json_encode(['ok' => true, 'saved' => true, 'mailed' => $mailed]);
