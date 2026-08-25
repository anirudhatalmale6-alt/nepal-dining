/**
 * Alt text for the decorative food-photo grids on the homepage and About page.
 *
 * Those grids all carried the same alt="Nepal Dining" on every tile, which
 * tells a screen reader (and Google Images) nothing about four different
 * dishes. The filenames already name the dish, so the alt is derived from the
 * URL rather than hand-maintained in two places — add a photo and it labels
 * itself.
 */
export function altFromImageUrl(url: string, lang: 'en' | 'ja' = 'en'): string {
  const file = url.split('/').pop() || '';
  const slug = file.replace(/\.(jpe?g|png|webp|avif)$/i, '');
  const dish = slug
    .split('-')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  if (!dish) return 'Nepal Dining, Nakafurano';
  return lang === 'ja'
    ? `${dish} - ネパールダイニング 中富良野`
    : `${dish} at Nepal Dining, Nakafurano`;
}
