/**
 * Single source of truth for EmailJS credentials.
 *
 * WHY THERE ARE TWO ACCOUNTS
 * The EmailJS free plan allows only 2 templates per account — not a low email
 * quota, which is what it first looked like. The original account's 2 template
 * slots are both taken by the reservation flow (admin notice + guest
 * autoreply), so a third template for the contact form was impossible there.
 *
 * The fix is a split, not a migration: reservation keeps the original account,
 * contact gets a second account's 2 slots. Both stay on the free plan.
 *
 * A short-lived middle account (service_yxku3ql) was abandoned: its IDs were
 * all valid but its linked Yahoo mailbox refused SMTP auth, so every send came
 * back 412 "Yahoo: Invalid login: 535 5.7.0 (#AUTH005)". Yahoo does not accept
 * normal account passwords from third-party apps. The replacement below is on
 * Gmail and verified sending (200 on both templates).
 */

export type EmailJSAccount = {
  publicKey: string;
  service: string;
  /** Notice to the restaurant. */
  tplAdmin: string;
  /** Autoreply to the sender. Empty = don't send one. */
  tplGuest: string;
};

/**
 * Original account — reservation only. Live and delivering, templates carried
 * over from the previous website. Do not repoint or renumber these.
 */
export const RESERVATION: EmailJSAccount = {
  publicKey: 'aC1Maewluzfg6lM3L',
  service: 'service_n95apsv',
  tplAdmin: 'template_recg9pp',
  tplGuest: 'template_15ng35d',
};

/**
 * Where a contact-form notice must land.
 *
 * WHY THIS EXISTS: `template_d5o12zs` (contact admin) has its "To Email" field
 * set to `{{email}}`, so it addresses the notice to whoever filled in the form
 * — the restaurant never received an enquiry. Proved 2026-08-20 by POSTing each
 * template with the `email` param omitted: the two guest templates and the
 * contact admin one returned 422 "The recipients address is empty" (so their To
 * is `{{email}}`), while the reservation admin template returned 200 (its To is
 * a fixed address, and it is correct — do not touch it).
 *
 * The clean fix is one field in the EmailJS dashboard, which only the owner can
 * reach. Until then the admin send below overrides `email` with this address,
 * and carries the enquirer's own address in the body instead. Setting the
 * template's To Email to a fixed address later does NOT break this — the
 * override just stops mattering.
 */
export const CONTACT_INBOX = 'nepaldining.hp@gmail.com';

/** Second account (Gmail-backed) — contact form only. */
export const CONTACT: EmailJSAccount = {
  publicKey: 'ZRs_T3w-_9WB8HFLj',
  service: 'service_c4brzfb',
  tplAdmin: 'template_d5o12zs',
  tplGuest: 'template_9x8vvxs',
};
