"use client";

import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "immobot_cookie_consent_v1";
const VERSION = 1;
const COOKIE_NAME = "immobot_cookie_consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180;

function readConsent() {
  const cookieConsent = readConsentCookie();
  if (cookieConsent) return cookieConsent;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed?.version !== VERSION) return null;
    writeConsentCookie(parsed.accepted === true);
    return parsed;
  } catch {
    // localStorage kann in restriktiven Browser-Kontexten blockiert sein.
  }

  return null;
}

function writeConsentCookie(accepted) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  const domain = window.location.hostname.endsWith("immobot.pro")
    ? "; Domain=.immobot.pro"
    : "";
  document.cookie = `${COOKIE_NAME}=${accepted ? "accepted" : "declined"}; Max-Age=${COOKIE_MAX_AGE}; Path=/${domain}; SameSite=Lax${secure}`;
}

function readConsentCookie() {
  const value = document.cookie
    .split("; ")
    .find((part) => part.startsWith(`${COOKIE_NAME}=`))
    ?.split("=")[1];

  if (value === "accepted") {
    return {
      accepted: true,
      acceptedAt: null,
      updatedAt: null,
      version: VERSION,
    };
  }

  if (value === "declined") {
    return {
      accepted: false,
      acceptedAt: null,
      revokedAt: null,
      updatedAt: null,
      version: VERSION,
    };
  }

  return null;
}

function writeConsent(accepted) {
  const now = new Date().toISOString();
  const previous = readConsent();
  const next = {
    accepted,
    acceptedAt: accepted ? previous?.acceptedAt || now : null,
    revokedAt: accepted ? null : now,
    updatedAt: now,
    version: VERSION,
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // localStorage kann in restriktiven Browser-Kontexten blockiert sein.
  }

  writeConsentCookie(accepted);
  window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: next }));
  return next;
}

export default function CookieConsentManager() {
  const [ready, setReady] = useState(false);
  const [consent, setConsent] = useState(null);
  const [panelOpen, setPanelOpen] = useState(false);

  useEffect(() => {
    const current = readConsent();
    setConsent(current);
    setPanelOpen(!current);
    setReady(true);

    function refresh(event) {
      setConsent(event?.detail || readConsent());
      setPanelOpen(false);
    }

    window.addEventListener("cookie-consent-updated", refresh);
    return () => window.removeEventListener("cookie-consent-updated", refresh);
  }, []);

  useEffect(() => {
    function syncSharedCookie() {
      const next = readConsent();
      setConsent((current) => {
        if ((current?.accepted === true) === (next?.accepted === true) && Boolean(current) === Boolean(next)) {
          return current;
        }

        setPanelOpen(!next);
        return next;
      });
    }

    window.addEventListener("focus", syncSharedCookie);
    const interval = window.setInterval(syncSharedCookie, 1500);

    return () => {
      window.removeEventListener("focus", syncSharedCookie);
      window.clearInterval(interval);
    };
  }, []);

  if (!ready) return null;

  return (
    <>
      {panelOpen && (
        <div className="fixed inset-x-0 bottom-0 z-[10000] border-t border-neutral-200 bg-white px-4 py-4 shadow-2xl">
          <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-base font-bold text-neutral-950">Cookie-Einstellungen</h2>
              <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                Wir setzen technisch notwendige Cookies. Karten- und Komfortdienste von Drittanbietern
                laden wir nur nach deiner Zustimmung.
              </p>
              {consent && (
                <p className="mt-2 text-sm font-semibold text-neutral-900">
                  Aktuell: {consent.accepted ? "zugestimmt" : "abgelehnt"}
                </p>
              )}
              <a
                href="/datenschutz"
                className="mt-2 inline-flex text-sm font-semibold text-blue-600 underline underline-offset-2 hover:text-blue-700"
              >
                Datenschutzerklärung
              </a>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <button
                type="button"
                onClick={() => writeConsent(false)}
                className={`rounded-xl px-5 py-3 text-sm font-bold transition ${
                  consent?.accepted
                    ? "border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50"
                    : "border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50"
                }`}
              >
                {consent?.accepted ? "Zustimmung ablehnen" : "Ablehnen"}
              </button>
              <button
                type="button"
                onClick={() => writeConsent(true)}
                className={`rounded-xl px-5 py-3 text-sm font-bold shadow-sm transition ${
                  consent?.accepted
                    ? "bg-blue-600 text-white shadow-blue-600/20 hover:bg-blue-700"
                    : "bg-blue-600 text-white shadow-blue-600/20 hover:bg-blue-700"
                }`}
              >
                {consent?.accepted ? "Zustimmung behalten" : "Zustimmen"}
              </button>
            </div>
          </div>
        </div>
      )}

      {consent && !panelOpen && (
        <button
          type="button"
          onClick={() => setPanelOpen(true)}
          className="fixed bottom-4 left-4 z-[9999] flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-lg transition hover:scale-105 hover:bg-neutral-50"
          aria-label="Cookie-Einstellungen bearbeiten"
          title="Cookie-Einstellungen"
        >
          <Cookie size={22} aria-hidden="true" />
        </button>
      )}
    </>
  );
}
