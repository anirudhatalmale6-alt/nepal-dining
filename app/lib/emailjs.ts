/**
 * Single source of truth for EmailJS credentials.
 *
 * WHY THERE ARE TWO ACCOUNTS
 * The EmailJS free plan allows only 2 templates per account — not a low email
 * quota, which is what it first looked like. The monthly send allowance is
 * nowhere near being used. The original account's 2 template slots are both
 * taken by the reservation flow (admin notice + guest autoreply), so a third
 * template for the contact form is impossible there without a subscription.
 *
 * The fix is a split, not a migration: reservation keeps the original account,
 * contact gets the second account's 2 slots. Both stay on the free plan.
 *
 * RESERVATION must not be touched. It is live, delivering, and uses templates
 * carried over from the old website — same template IDs, same variable names.
 *
 * CONTACT is pending: the second account's IDs all verify, but its linked
 * mailbox was refusing SMTP auth (412 "Yahoo: Invalid login: 535 5.7.0
 * (#AUTH005)"). Yahoo rejects normal passwords from third-party apps. Krishna
 * is reconnecting it to Gmail. Until a send through that service actually
 * returns 200, CONTACT stays pointed at the original account so enquiries keep
 * arriving — degraded formatting beats silent loss.
 */

export type EmailJSAccount = {
  publicKey: string;
  service: string;
  /** Notice to the restaurant. */
  tplAdmin: string;
  /** Autoreply to the sender. Empty = don't send one. */
  tplGuest: string;
};

/** Original account. Live and delivering — do not repoint. */
const ACCOUNT_RESERVATION: EmailJSAccount = {
  publicKey: 'aC1Maewluzfg6lM3L',
  service: 'service_n95apsv',
  tplAdmin: 'template_recg9pp',
  tplGuest: 'template_15ng35d',
};

/** Second account, dedicated to the contact form. Blocked on its mail connection. */
const ACCOUNT_CONTACT: EmailJSAccount = {
  publicKey: 'iLVnm32unrGhkKNfB',
  service: 'service_yxku3ql',
  tplAdmin: 'template_1f8bpr7',
  tplGuest: 'template_958xdsn',
};

/**
 * Flip to true once a real send through ACCOUNT_CONTACT returns 200 rather
 * than 412. That single change moves the contact form across; nothing else
 * needs editing, and the reservation form is unaffected either way.
 */
const CONTACT_ACCOUNT_CAN_SEND = false;

export const RESERVATION: EmailJSAccount = ACCOUNT_RESERVATION;

export const CONTACT: EmailJSAccount = CONTACT_ACCOUNT_CAN_SEND
  ? ACCOUNT_CONTACT
  // Falling back to the reservation account means contact enquiries arrive
  // formatted as a booking (unused fields show as "-"), because that account
  // has no spare template slot for a proper contact layout. Ugly, but delivered.
  : { ...ACCOUNT_RESERVATION, tplGuest: '' };
