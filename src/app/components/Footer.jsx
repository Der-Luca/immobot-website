"use client";
import Link from "next/link";
import { useState } from "react";
import { Loader2, Mail, X } from "lucide-react";

const CANCEL_ENDPOINT =
  "https://europe-west1-immobot-dc818.cloudfunctions.net/requestSubscriptionCancel";

const SUCCESS_MESSAGE =
  "Falls zu dieser E-Mail-Adresse ein aktives Immobot-Abo existiert, erhältst du gleich eine E-Mail mit einem Bestätigungslink.";

const RATE_LIMIT_MESSAGE = "Bitte versuche es später erneut.";
const ERROR_MESSAGE =
  "Die Anfrage konnte gerade nicht gesendet werden. Bitte versuche es später erneut.";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Footer() {
  const [cancelOpen, setCancelOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const closeCancelModal = () => {
    if (isSubmitting) return;
    setCancelOpen(false);
    setEmail("");
    setMessage("");
    setEmailError("");
  };

  const handleCancelSubmit = async (event) => {
    event.preventDefault();

    const trimmedEmail = email.trim();
    setMessage("");

    if (!isValidEmail(trimmedEmail)) {
      setEmailError("Bitte gib eine gültige E-Mail-Adresse ein.");
      return;
    }

    setEmailError("");
    setIsSubmitting(true);

    try {
      const response = await fetch(CANCEL_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: trimmedEmail }),
      });

      if (response.ok) {
        setMessage(SUCCESS_MESSAGE);
        setEmail("");
      } else if (response.status === 429) {
        setMessage(RATE_LIMIT_MESSAGE);
      } else {
        setMessage(ERROR_MESSAGE);
      }
    } catch {
      setMessage(ERROR_MESSAGE);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Branding */}
        <div>
          <Link href="/" className="flex items-center gap-2 text-blue-700 font-semibold text-lg">
              <img src="/logo.png" alt="Immobotlogo" className="w-1/2" />
          </Link>
        </div>

        {/* Produkt */}
        <div>
          <h4 className="font-semibold mb-3">Produkt</h4>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li><Link href="/funktionen" className="hover:text-black">Funktionen</Link></li>
            <li><Link href="/preise" className="hover:text-black">Preise</Link></li>
            <li><Link href="/ueber-uns" className="hover:text-black">Über uns</Link></li>
          </ul>
        </div>

        {/* Unternehmen */}
        <div>
          <h4 className="font-semibold mb-3">Unternehmen</h4>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li><Link href="/impressum" className="hover:text-black">Kontakt</Link></li>
          </ul>
        </div>

        {/* Support / Newsletter */}
        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm text-neutral-700 mb-6">
            <li><Link href="/#faq" className="hover:text-black">FAQ</Link></li>
          </ul>
          <button
            type="button"
            onClick={() => setCancelOpen(true)}
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-500 hover:bg-neutral-50 hover:text-black"
          >
            <Mail size={16} aria-hidden="true" />
            Abo kündigen
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between px-4 py-4 gap-3 text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} immobot.pro. Alle Rechte vorbehalten.</p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/impressum" className="hover:text-black">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-black">Datenschutzhinweis</Link>
            <Link href="/nutzungsbedingungen" className="hover:text-black">AGB</Link>
            <Link href="/widerruf" className="hover:text-black">Widerruf</Link>
            <Link href="/cookies" className="hover:text-black">Cookie-Einstellungen</Link>
          </div>

          {/* Social-Media-Links vorerst ausgeblendet.
          <div className="flex items-center gap-4">
            <Link href="https://facebook.com" aria-label="Facebook" className="hover:text-black"><Facebook size={18} /></Link>
            <Link href="https://instagram.com" aria-label="Instagram" className="hover:text-black"><Instagram size={18} /></Link>
            <Link href="https://x.com" aria-label="X / Twitter" className="hover:text-black"><X size={18} /></Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-black"><Linkedin size={18} /></Link>
            <Link href="https://youtube.com" aria-label="YouTube" className="hover:text-black"><Youtube size={18} /></Link>
          </div>
          */}
        </div>
      </div>

      {cancelOpen && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/40 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cancel-subscription-title"
        >
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h3 id="cancel-subscription-title" className="text-lg font-semibold text-neutral-950">
                  Abo kündigen
                </h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  Gib die E-Mail-Adresse ein, mit der du bei Immobot registriert bist.
                </p>
              </div>
              <button
                type="button"
                onClick={closeCancelModal}
                className="rounded-full p-2 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
                aria-label="Dialog schließen"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleCancelSubmit} className="space-y-4">
              <div>
                <label htmlFor="cancel-email" className="text-sm font-medium text-neutral-800">
                  E-Mail-Adresse
                </label>
                <input
                  id="cancel-email"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (emailError) setEmailError("");
                  }}
                  placeholder="name@example.com"
                  className="mt-2 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  autoComplete="email"
                  disabled={isSubmitting}
                />
                {emailError && (
                  <p className="mt-2 text-sm text-red-600" role="alert">
                    {emailError}
                  </p>
                )}
              </div>

              {message && (
                <p className="rounded-lg bg-neutral-100 px-3 py-3 text-sm leading-6 text-neutral-700" role="status">
                  {message}
                </p>
              )}

              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={closeCancelModal}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-950"
                  disabled={isSubmitting}
                >
                  Schließen
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
                  disabled={isSubmitting}
                >
                  {isSubmitting && <Loader2 size={16} className="animate-spin" aria-hidden="true" />}
                  Anfrage senden
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </footer>
  );
}
