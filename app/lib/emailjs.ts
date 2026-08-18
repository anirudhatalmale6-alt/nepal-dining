/**
 * Single source of truth for EmailJS credentials.
 *
 * There are two EmailJS accounts in play:
 *
 *  - ORIGINAL: working, but on the free 200-emails/month plan and close to it.
 *  - NEW:      IDs are all valid (verified against api.emailjs.com), but its
 *              linked Yahoo mailbox fails SMTP auth — the API returns
 *              412 "Yahoo: Invalid login: 535 5.7.0 (#AUTH005)". Yahoo needs an
 *              App Password, not the normal account password. Until that is
 *              fixed nothing sent through this account can leave EmailJS.
 *
 * To migrate once the Yahoo connection is repaired: change ACTIVE to NEW_ACCOUNT.
 * That moves the reservation form and the contact form together, in one edit.
 */

export type EmailJSAccount = {
  publicKey: string;
  service: string;
  /** Reservation: notice to the restaurant. */
  tplReservationAdmin: string;
  /** Reservation: autoreply to the guest. */
  tplReservationGuest: string;
  /** Contact: notice to the restaurant. */
  tplContactAdmin: string;
  /** Contact: autoreply to the sender. Empty = don't send one. */
  tplContactGuest: string;
};

const ORIGINAL_ACCOUNT: EmailJSAccount = {
  publicKey: 'aC1Maewluzfg6lM3L',
  service: 'service_n95apsv',
  tplReservationAdmin: 'template_recg9pp',
  tplReservationGuest: 'template_15ng35d',
  // No dedicated contact template on this account — the reservation template is
  // reused, which is why contact enquiries arrive looking like a booking.
  tplContactAdmin: 'template_recg9pp',
  tplContactGuest: '',
};

const NEW_ACCOUNT: EmailJSAccount = {
  publicKey: 'iLVnm32unrGhkKNfB',
  service: 'service_yxku3ql',
  // Reservation templates not yet created on this account. Falls back to the
  // contact ones so a premature switch still delivers something readable.
  tplReservationAdmin: 'template_1f8bpr7',
  tplReservationGuest: 'template_958xdsn',
  tplContactAdmin: 'template_1f8bpr7',
  tplContactGuest: 'template_958xdsn',
};

export const ACTIVE: EmailJSAccount = ORIGINAL_ACCOUNT;

// Referenced so the pending account doesn't get dropped as dead code.
export const PENDING = NEW_ACCOUNT;
