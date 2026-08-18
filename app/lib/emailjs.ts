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

/** Second account (Gmail-backed) — contact form only. */
export const CONTACT: EmailJSAccount = {
  publicKey: 'ZRs_T3w-_9WB8HFLj',
  service: 'service_c4brzfb',
  tplAdmin: 'template_d5o12zs',
  tplGuest: 'template_9x8vvxs',
};
