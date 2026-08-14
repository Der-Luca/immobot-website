"use client";

import { useEffect, useState } from "react";

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

export default function CookieSettingsContent() {
  const [accepted, setAccepted] = useState(false);
  const [updatedAt, setUpdatedAt] = useState(null);

  useEffect(() => {
    const current = readConsent();
    setAccepted(current?.accepted === true);
    setUpdatedAt(current?.updatedAt || null);

    function refresh(event) {
      const next = event?.detail || readConsent();
      setAccepted(next?.accepted === true);
      setUpdatedAt(next?.updatedAt || null);
    }

    window.addEventListener("cookie-consent-updated", refresh);
    return () => window.removeEventListener("cookie-consent-updated", refresh);
  }, []);

  useEffect(() => {
    function syncSharedCookie() {
      const current = readConsent();
      setAccepted(current?.accepted === true);
      setUpdatedAt(current?.updatedAt || null);
    }

    window.addEventListener("focus", syncSharedCookie);
    const interval = window.setInterval(syncSharedCookie, 1500);

    return () => {
      window.removeEventListener("focus", syncSharedCookie);
      window.clearInterval(interval);
    };
  }, []);

  function update(nextAccepted) {
    const next = writeConsent(nextAccepted);
    setAccepted(next.accepted);
    setUpdatedAt(next.updatedAt);
  }

  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-bold text-neutral-950">Karten- und Komfortdienste</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600">
            Wenn du zustimmst, duerfen wir externe Dienste wie MapTiler fuer Kartenfunktionen laden.
            Ohne Zustimmung bleiben diese Dienste deaktiviert.
          </p>
          {updatedAt && (
            <p className="mt-2 text-xs text-neutral-500">
              Letzte Aenderung: {new Date(updatedAt).toLocaleString("de-DE")}
            </p>
          )}
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => update(false)}
            className={`rounded-xl border px-5 py-3 text-sm font-bold transition ${
              accepted
                ? "border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50"
                : "border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50"
            }`}
          >
            {accepted ? "Zustimmung ablehnen" : "Abgelehnt"}
          </button>
          <button
            type="button"
            onClick={() => update(true)}
            className={`rounded-xl px-5 py-3 text-sm font-bold transition ${
              accepted
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {accepted ? "Zustimmung behalten" : "Zustimmen"}
          </button>
        </div>
      </div>
    </div>
  );
}
