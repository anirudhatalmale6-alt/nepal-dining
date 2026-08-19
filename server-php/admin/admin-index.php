<?php
require_once __DIR__ . '/config.php';

if (isset($_POST['login'])) {
    if ($_POST['username'] === ADMIN_USER && $_POST['password'] === ADMIN_PASS) {
        $_SESSION['admin_logged_in'] = true;
        header('Location: index.php');
        exit;
    } else {
        $loginError = 'Invalid credentials';
    }
}

if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: index.php');
    exit;
}

$page = $_GET['page'] ?? (isLoggedIn() ? 'dashboard' : 'login');
$posts = isLoggedIn() ? getPosts() : [];
$unreadMsgs = 0;
if (isLoggedIn() && file_exists(DATA_DIR . '/messages.json')) {
    $mm = json_decode(file_get_contents(DATA_DIR . '/messages.json'), true);
    if (is_array($mm)) $unreadMsgs = count(array_filter($mm, fn($m) => empty($m['read'])));
}
$editPost = null;
if ($page === 'editor' && isset($_GET['slug'])) {
    foreach ($posts as $p) {
        if ($p['slug'] === $_GET['slug']) {
            $editPost = $p;
            break;
        }
    }
}
$categories = CATEGORIES;
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Nepal Dining Blog Admin</title>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.8.3/tinymce.min.js"></script>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f5f5f0; color: #333; min-height: 100vh; }

.login-wrap { display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
.login-box { background: white; border-radius: 16px; padding: 40px; width: 100%; max-width: 400px; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
.login-box h1 { font-size: 22px; font-weight: 800; color: #C0392B; margin-bottom: 6px; }
.login-box p { font-size: 14px; color: #888; margin-bottom: 24px; }
.login-box .error { background: #FEE; color: #C0392B; padding: 10px 14px; border-radius: 8px; font-size: 13px; margin-bottom: 16px; }

.topbar { background: #1C1A18; color: white; padding: 0 24px; height: 56px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 100; }
.topbar h1 { font-size: 16px; font-weight: 700; }
.topbar h1 span { color: #D4821A; }
.topbar-right { display: flex; align-items: center; gap: 12px; }
.topbar a { color: rgba(255,255,255,0.7); text-decoration: none; font-size: 13px; padding: 6px 12px; border-radius: 6px; transition: all 0.2s; }
.topbar a:hover { background: rgba(255,255,255,0.1); color: white; }

.container { max-width: 1100px; margin: 0 auto; padding: 24px; }

.stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 16px; margin-bottom: 24px; }
.stat-card { background: white; border-radius: 12px; padding: 20px; text-align: center; }
.stat-card .num { font-size: 28px; font-weight: 800; color: #C0392B; }
.stat-card .label { font-size: 12px; color: #888; margin-top: 4px; }

.btn { display: inline-flex; align-items: center; gap: 6px; padding: 10px 20px; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; border: none; text-decoration: none; transition: all 0.2s; }
.btn-primary { background: #C0392B; color: white; }
.btn-primary:hover { background: #a5311f; }
.btn-secondary { background: #f0f0f0; color: #555; }
.btn-secondary:hover { background: #e0e0e0; }
.btn-danger { background: #fef2f2; color: #C0392B; }
.btn-danger:hover { background: #fde8e8; }
.btn-sm { padding: 6px 12px; font-size: 12px; }

.header-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; flex-wrap: wrap; gap: 12px; }
.header-row h2 { font-size: 20px; font-weight: 800; }

.post-table { width: 100%; background: white; border-radius: 12px; overflow: hidden; border: 1px solid #eee; }
.post-table th { background: #fafaf8; text-align: left; padding: 12px 16px; font-size: 12px; color: #888; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
.post-table td { padding: 12px 16px; border-top: 1px solid #f0f0f0; font-size: 14px; vertical-align: middle; }
.post-table tr:hover td { background: #fafaf8; }
.post-img { width: 50px; height: 38px; border-radius: 6px; object-fit: cover; }
.post-title { font-weight: 600; color: #1C1A18; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.post-cat { display: inline-block; font-size: 11px; font-weight: 600; padding: 2px 8px; border-radius: 10px; }
.post-date { font-size: 12px; color: #999; }
.post-actions { display: flex; gap: 6px; }

.form-wrap { background: white; border-radius: 12px; padding: 24px; margin-bottom: 20px; }
.form-group { margin-bottom: 20px; }
.form-group label { display: block; font-size: 13px; font-weight: 600; color: #555; margin-bottom: 6px; }
.form-group input, .form-group select, .form-group textarea {
    width: 100%; padding: 10px 14px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px;
    font-family: inherit; outline: none; transition: border 0.2s;
}
.form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: #C0392B; }
.form-group textarea { resize: vertical; min-height: 80px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.form-row-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }
.form-check { display: flex; align-items: center; gap: 8px; }
.form-check input { width: auto; }
.form-check label { margin-bottom: 0; }

.lang-tabs { display: flex; gap: 4px; margin-bottom: 12px; }
.lang-tab { padding: 8px 16px; border-radius: 8px 8px 0 0; font-size: 13px; font-weight: 600; cursor: pointer; border: 1px solid #ddd; border-bottom: none; background: #f5f5f0; color: #888; }
.lang-tab.active { background: white; color: #C0392B; border-color: #ddd; }
.lang-panel { display: none; }
.lang-panel.active { display: block; }

.img-preview { width: 120px; height: 80px; border-radius: 8px; object-fit: cover; border: 1px solid #eee; margin-top: 8px; }

.badge { display: inline-block; font-size: 10px; font-weight: 700; padding: 2px 6px; border-radius: 4px; margin-left: 4px; }
.badge-featured { background: #FEF3C7; color: #92400E; }
.badge-popular { background: #FEE2E2; color: #991B1B; }

.toast { position: fixed; top: 20px; right: 20px; background: #10B981; color: white; padding: 12px 20px; border-radius: 8px; font-size: 14px; font-weight: 600; z-index: 1000; display: none; box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
.toast.error { background: #EF4444; }
.toast.show { display: block; animation: slideIn 0.3s ease; }
@keyframes slideIn { from { transform: translateX(100px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }

@media (max-width: 768px) {
    .form-row, .form-row-3 { grid-template-columns: 1fr; }
    .post-table { display: block; overflow-x: auto; }
    .stats { grid-template-columns: repeat(2, 1fr); }
    .container { padding: 16px; }
}
</style>
</head>
<body>

<div id="toast" class="toast"></div>

<?php if (!isLoggedIn()): ?>
<div class="login-wrap">
    <div class="login-box">
        <h1>Nepal Dining Blog</h1>
        <p>Admin Panel - Sign in to manage blog posts</p>
        <?php if (isset($loginError)): ?>
            <div class="error"><?= htmlspecialchars($loginError) ?></div>
        <?php endif; ?>
        <form method="POST">
            <div class="form-group">
                <label>Username</label>
                <input type="text" name="username" required autofocus>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" name="password" required>
            </div>
            <button type="submit" name="login" class="btn btn-primary" style="width:100%;justify-content:center;padding:12px;">Sign In</button>
        </form>
    </div>
</div>

<?php elseif ($page === 'editor'): ?>

<div class="topbar">
    <h1><span>Nepal Dining</span> Blog Admin</h1>
    <div class="topbar-right">
        <a href="index.php">Dashboard</a>
        <a href="/" target="_blank">View Site</a>
        <a href="?logout=1">Logout</a>
    </div>
</div>

<div class="container">
    <div class="header-row">
        <h2><?= $editPost ? 'Edit Post' : 'New Post' ?></h2>
        <a href="index.php" class="btn btn-secondary">Back to Dashboard</a>
    </div>

    <form id="postForm" enctype="multipart/form-data">
        <input type="hidden" name="action" value="save">
        <?php if ($editPost): ?>
            <input type="hidden" name="edit_slug" value="<?= htmlspecialchars($editPost['slug']) ?>">
        <?php endif; ?>

        <div class="form-wrap">
            <h3 style="font-size:15px; font-weight:700; margin-bottom:16px;">Post Details</h3>

            <div class="form-row">
                <div class="form-group">
                    <label>Slug (URL)</label>
                    <input type="text" name="slug" value="<?= htmlspecialchars($editPost['slug'] ?? '') ?>" placeholder="auto-generated-from-title">
                </div>
                <div class="form-group">
                    <label>Date</label>
                    <input type="date" name="date" value="<?= htmlspecialchars($editPost['date'] ?? date('Y-m-d')) ?>">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label>Category</label>
                    <select name="category">
                        <?php foreach ($categories as $key => $names): ?>
                            <option value="<?= $key ?>" <?= ($editPost['category'] ?? '') === $key ? 'selected' : '' ?>><?= htmlspecialchars($names['en']) ?> / <?= htmlspecialchars($names['ja']) ?></option>
                        <?php endforeach; ?>
                    </select>
                </div>
                <div class="form-group">
                    <label>Tags (comma separated)</label>
                    <input type="text" name="tags" value="<?= htmlspecialchars(implode(', ', $editPost['tags'] ?? [])) ?>" placeholder="furano, travel, food">
                </div>
            </div>

            <div class="form-row-3">
                <div class="form-group">
                    <label>Author</label>
                    <input type="text" name="author" value="<?= htmlspecialchars($editPost['author'] ?? 'Nepal Dining Team') ?>">
                </div>
                <div class="form-group">
                    <label>Author Role (EN)</label>
                    <input type="text" name="author_role_en" value="<?= htmlspecialchars($editPost['authorRole']['en'] ?? 'Writer') ?>">
                </div>
                <div class="form-group">
                    <label>Author Role (JP)</label>
                    <input type="text" name="author_role_ja" value="<?= htmlspecialchars($editPost['authorRole']['ja'] ?? 'ライター') ?>">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label>Featured Image</label>
                    <input type="file" name="image" accept="image/*">
                    <?php if (!empty($editPost['image'])): ?>
                        <input type="hidden" name="existing_image" value="<?= htmlspecialchars($editPost['image']) ?>">
                        <img src="<?= htmlspecialchars($editPost['image']) ?>" class="img-preview" alt="Current image">
                    <?php endif; ?>
                </div>
                <div class="form-group" style="display:flex;align-items:end;gap:20px;padding-bottom:10px;">
                    <div class="form-check">
                        <input type="checkbox" name="featured" value="1" id="featured" <?= ($editPost['featured'] ?? false) ? 'checked' : '' ?>>
                        <label for="featured">Featured</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" name="popular" value="1" id="popular" <?= ($editPost['popular'] ?? false) ? 'checked' : '' ?>>
                        <label for="popular">Popular</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="form-wrap">
            <h3 style="font-size:15px; font-weight:700; margin-bottom:16px;">Title</h3>
            <div class="lang-tabs">
                <div class="lang-tab active" onclick="switchTab(this,'title')">English</div>
                <div class="lang-tab" onclick="switchTab(this,'title')">Japanese</div>
            </div>
            <div class="lang-panel active" data-group="title">
                <div class="form-group">
                    <input type="text" name="title_en" value="<?= htmlspecialchars($editPost['title']['en'] ?? '') ?>" placeholder="Post title in English" required>
                </div>
            </div>
            <div class="lang-panel" data-group="title">
                <div class="form-group">
                    <input type="text" name="title_ja" value="<?= htmlspecialchars($editPost['title']['ja'] ?? '') ?>" placeholder="Post title in Japanese (optional)">
                </div>
            </div>
        </div>

        <div class="form-wrap">
            <h3 style="font-size:15px; font-weight:700; margin-bottom:16px;">Description / Excerpt</h3>
            <div class="lang-tabs">
                <div class="lang-tab active" onclick="switchTab(this,'desc')">English</div>
                <div class="lang-tab" onclick="switchTab(this,'desc')">Japanese</div>
            </div>
            <div class="lang-panel active" data-group="desc">
                <div class="form-group">
                    <textarea name="desc_en" rows="3" placeholder="Short description in English"><?= htmlspecialchars($editPost['description']['en'] ?? '') ?></textarea>
                </div>
            </div>
            <div class="lang-panel" data-group="desc">
                <div class="form-group">
                    <textarea name="desc_ja" rows="3" placeholder="Short description in Japanese (optional)"><?= htmlspecialchars($editPost['description']['ja'] ?? '') ?></textarea>
                </div>
            </div>
        </div>

        <div class="form-wrap">
            <h3 style="font-size:15px; font-weight:700; margin-bottom:16px;">Content</h3>
            <div class="lang-tabs">
                <div class="lang-tab active" onclick="switchTab(this,'content')">English</div>
                <div class="lang-tab" onclick="switchTab(this,'content')">Japanese</div>
            </div>
            <div class="lang-panel active" data-group="content">
                <div class="form-group">
                    <textarea id="content_en" name="content_en"><?= htmlspecialchars($editPost['content']['en'] ?? '') ?></textarea>
                </div>
            </div>
            <div class="lang-panel" data-group="content">
                <div class="form-group">
                    <textarea id="content_ja" name="content_ja"><?= htmlspecialchars($editPost['content']['ja'] ?? '') ?></textarea>
                </div>
            </div>
        </div>

        <div style="display:flex;gap:12px;justify-content:flex-end;padding:20px 0;">
            <a href="index.php" class="btn btn-secondary">Cancel</a>
            <button type="submit" class="btn btn-primary" id="saveBtn">Save Post</button>
        </div>
    </form>
</div>

<script>
function switchTab(el, group) {
    const tabs = el.parentElement.querySelectorAll('.lang-tab');
    tabs.forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    const idx = Array.from(tabs).indexOf(el);
    const panels = el.closest('.form-wrap').querySelectorAll('.lang-panel[data-group="'+group+'"]');
    panels.forEach((p,i) => p.classList.toggle('active', i === idx));
}

tinymce.init({
    selector: '#content_en, #content_ja',
    height: 400,
    menubar: false,
    plugins: 'lists link image table code fullscreen',
    toolbar: 'blocks | bold italic underline | bullist numlist | link image table | code fullscreen',
    block_formats: 'Paragraph=p; Heading 2=h2; Heading 3=h3',
    images_upload_url: 'api.php?action=upload_image',
    images_upload_handler: function(blobInfo) {
        return new Promise(function(resolve, reject) {
            var fd = new FormData();
            fd.append('action', 'upload_image');
            fd.append('file', blobInfo.blob(), blobInfo.filename());
            fetch('api.php', { method: 'POST', body: fd })
            .then(r => r.json())
            .then(data => {
                if (data.location) resolve(data.location);
                else reject('Upload failed');
            })
            .catch(() => reject('Upload failed'));
        });
    },
    content_style: 'body { font-family: Georgia, serif; font-size: 16px; line-height: 1.7; max-width: 700px; margin: 0 auto; } h2 { font-size: 22px; margin: 24px 0 12px; } h3 { font-size: 18px; margin: 20px 0 10px; } p { margin: 0 0 14px; } img { max-width: 100%; height: auto; border-radius: 8px; }',
});

document.getElementById('postForm').addEventListener('submit', function(e) {
    e.preventDefault();
    tinymce.triggerSave();
    var fd = new FormData(this);
    var btn = document.getElementById('saveBtn');
    btn.textContent = 'Saving...';
    btn.disabled = true;
    fetch('api.php', { method: 'POST', body: fd })
    .then(r => r.json())
    .then(data => {
        btn.textContent = 'Save Post';
        btn.disabled = false;
        if (data.success) {
            showToast('Post saved successfully!');
            setTimeout(() => window.location.href = 'index.php', 1000);
        } else {
            showToast(data.error || 'Failed to save', true);
        }
    })
    .catch(() => {
        btn.textContent = 'Save Post';
        btn.disabled = false;
        showToast('Network error', true);
    });
});

function showToast(msg, isError) {
    var t = document.getElementById('toast');
    t.textContent = msg;
    t.className = 'toast show' + (isError ? ' error' : '');
    setTimeout(() => t.className = 'toast', 3000);
}
</script>

<?php else: ?>

<div class="topbar">
    <h1><span>Nepal Dining</span> Blog Admin</h1>
    <div class="topbar-right">
        <a href="menu.php">Menu</a>
        <a href="team.php">Team</a>
        <a href="messages.php">Messages<?= $unreadMsgs ? " ($unreadMsgs)" : "" ?></a>
        <a href="/" target="_blank">View Site</a>
        <a href="/blog/" target="_blank">View Blog</a>
        <a href="?logout=1">Logout</a>
    </div>
</div>

<div class="container">
    <div class="stats">
        <div class="stat-card">
            <div class="num"><?= count($posts) ?></div>
            <div class="label">Total Posts</div>
        </div>
        <div class="stat-card">
            <div class="num"><?= count(array_filter($posts, fn($p) => $p['featured'])) ?></div>
            <div class="label">Featured</div>
        </div>
        <div class="stat-card">
            <div class="num"><?= count(array_filter($posts, fn($p) => $p['popular'])) ?></div>
            <div class="label">Popular</div>
        </div>
        <div class="stat-card">
            <div class="num"><?= count(array_unique(array_column($posts, 'category'))) ?></div>
            <div class="label">Categories</div>
        </div>
    </div>

    <div class="header-row">
        <h2>All Posts</h2>
        <a href="?page=editor" class="btn btn-primary">+ New Post</a>
    </div>

    <?php if (empty($posts)): ?>
        <div class="form-wrap" style="text-align:center;padding:60px 20px;">
            <p style="font-size:40px;margin-bottom:12px;">📝</p>
            <p style="font-size:16px;font-weight:700;color:#555;margin-bottom:8px;">No blog posts yet</p>
            <p style="font-size:13px;color:#999;margin-bottom:20px;">Create your first blog post to get started</p>
            <a href="?page=editor" class="btn btn-primary">Create First Post</a>
        </div>
    <?php else: ?>
        <table class="post-table">
            <thead>
                <tr>
                    <th></th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($posts as $post):
                    $catColors = [
                        'furano-travel-guide' => '#2563EB', 'furano-attractions' => '#7C3AED',
                        'food-culture' => '#D97706', 'nepal-dining-news' => '#DC2626',
                        'seasonal-events' => '#16A34A', 'hokkaido-travel-tips' => '#0891B2',
                    ];
                    $catColor = $catColors[$post['category']] ?? '#888';
                    $catName = $categories[$post['category']]['en'] ?? $post['category'];
                ?>
                <tr>
                    <td>
                        <?php if (!empty($post['image'])): ?>
                            <img src="<?= htmlspecialchars($post['image']) ?>" class="post-img" alt="">
                        <?php else: ?>
                            <div class="post-img" style="background:#f0f0f0;display:flex;align-items:center;justify-content:center;font-size:16px;">📷</div>
                        <?php endif; ?>
                    </td>
                    <td>
                        <div class="post-title"><?= htmlspecialchars($post['title']['en']) ?></div>
                        <div style="font-size:11px;color:#aaa;margin-top:2px;">/blog/<?= htmlspecialchars($post['slug']) ?>/</div>
                    </td>
                    <td><span class="post-cat" style="background:<?= $catColor ?>15;color:<?= $catColor ?>"><?= htmlspecialchars($catName) ?></span></td>
                    <td class="post-date"><?= htmlspecialchars($post['date']) ?></td>
                    <td>
                        <?php if ($post['featured']): ?><span class="badge badge-featured">Featured</span><?php endif; ?>
                        <?php if ($post['popular']): ?><span class="badge badge-popular">Popular</span><?php endif; ?>
                    </td>
                    <td>
                        <div class="post-actions">
                            <a href="/blog/<?= htmlspecialchars($post['slug']) ?>/" target="_blank" class="btn btn-secondary btn-sm">View</a>
                            <a href="?page=editor&slug=<?= urlencode($post['slug']) ?>" class="btn btn-secondary btn-sm">Edit</a>
                            <button onclick="deletePost('<?= htmlspecialchars($post['slug']) ?>')" class="btn btn-danger btn-sm">Delete</button>
                        </div>
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    <?php endif; ?>
</div>

<script>
function deletePost(slug) {
    if (!confirm('Are you sure you want to delete this post?')) return;
    var fd = new FormData();
    fd.append('action', 'delete');
    fd.append('slug', slug);
    fetch('api.php', { method: 'POST', body: fd })
    .then(r => r.json())
    .then(data => {
        if (data.success) location.reload();
        else alert(data.error || 'Delete failed');
    });
}

function showToast(msg, isError) {
    var t = document.getElementById('toast');
    t.textContent = msg;
    t.className = 'toast show' + (isError ? ' error' : '');
    setTimeout(() => t.className = 'toast', 3000);
}
</script>

<?php endif; ?>

</body>
</html>
