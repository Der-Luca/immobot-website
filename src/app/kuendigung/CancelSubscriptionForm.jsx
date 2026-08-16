"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

const CANCEL_ENDPOINT =
  "https://europe-west1-immobot-dc818.cloudfunctions.net/requestSubscriptionCancel";

const RATE_LIMIT_MESSAGE = "Bitte versuche es später erneut.";
const ERROR_MESSAGE =
  "Die Kündigung konnte gerade nicht übermittelt werden. Bitte versuche es später erneut.";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function CancelSubscriptionForm() {
  const [email, setEmail] = useState("");
  const [terminationType, setTerminationType] = useState("ordinary");
  const [extraordinaryReason, setExtraordinaryReason] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [reasonError, setReasonError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmedEmail = email.trim();
    setMessage("");

    if (!isValidEmail(trimmedEmail)) {
      setEmailError("Bitte gib eine gültige E-Mail-Adresse ein.");
      return;
    }

    if (terminationType === "extraordinary" && !extraordinaryReason.trim()) {
      setReasonError("Bitte gib den Grund für die außerordentliche Kündigung an.");
      return;
    }

    setEmailError("");
    setReasonError("");
    setIsSubmitting(true);

    try {
      const response = await fetch(CANCEL_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: trimmedEmail,
          terminationType,
          terminationDate: terminationType === "ordinary" ? "next" : "immediate",
          extraordinaryReason:
            terminationType === "extraordinary" ? extraordinaryReason.trim() : undefined,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setMessage(
          "Deine Kündigung wurde elektronisch übermittelt. Du erhältst unverzüglich eine Bestätigung per E-Mail."
        );
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
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label htmlFor="cancel-email" className="text-sm font-medium text-neutral-900">
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
          className="mt-2 w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          autoComplete="email"
          disabled={isSubmitting || isSubmitted}
          required
        />
        {emailError && (
          <p className="mt-2 text-sm text-red-600" role="alert">
            {emailError}
          </p>
        )}
      </div>

      <fieldset className="space-y-3">
        <legend className="text-sm font-medium text-neutral-900">Kündigungswunsch</legend>
        <label className="flex items-start gap-3 rounded-lg border border-neutral-300 p-4 text-sm text-neutral-700">
          <input
            type="radio"
            name="terminationType"
            value="ordinary"
            checked={terminationType === "ordinary"}
            onChange={(event) => setTerminationType(event.target.value)}
            className="mt-1"
            disabled={isSubmitting || isSubmitted}
          />
          <span>
            Ordentliche Kündigung zum nächstmöglichen Zeitpunkt
            <span className="block text-neutral-500">
              Immobot-Abos sind monatlich kündbar.
            </span>
          </span>
        </label>
        <label className="flex items-start gap-3 rounded-lg border border-neutral-300 p-4 text-sm text-neutral-700">
          <input
            type="radio"
            name="terminationType"
            value="extraordinary"
            checked={terminationType === "extraordinary"}
            onChange={(event) => setTerminationType(event.target.value)}
            className="mt-1"
            disabled={isSubmitting || isSubmitted}
          />
          <span>Außerordentliche Kündigung mit sofortiger Wirkung</span>
        </label>
      </fieldset>

      {terminationType === "extraordinary" && (
        <div>
          <label htmlFor="cancel-reason" className="text-sm font-medium text-neutral-900">
            Grund der außerordentlichen Kündigung
          </label>
          <textarea
            id="cancel-reason"
            value={extraordinaryReason}
            onChange={(event) => {
              setExtraordinaryReason(event.target.value);
              if (reasonError) setReasonError("");
            }}
            rows={4}
            placeholder="Bitte beschreibe kurz den wichtigen Grund."
            className="mt-2 w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            disabled={isSubmitting || isSubmitted}
            required
          />
          {reasonError && (
            <p className="mt-2 text-sm text-red-600" role="alert">
              {reasonError}
            </p>
          )}
        </div>
      )}

      <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-sm leading-6 text-neutral-700">
        <p className="font-medium text-neutral-950">Prüfe deine Angaben vor dem Absenden.</p>
        <p>Vertrag: Immobot-Abo</p>
        <p>
          Kündigung:{" "}
          {terminationType === "ordinary"
            ? "ordentlich zum nächstmöglichen Zeitpunkt"
            : "außerordentlich mit sofortiger Wirkung"}
        </p>
        {terminationType === "extraordinary" && (
          <p>Grund: {extraordinaryReason.trim() || "noch nicht angegeben"}</p>
        )}
        <p>E-Mail-Adresse: {email.trim() || "noch nicht angegeben"}</p>
      </div>

      {message && (
        <p
          className={`flex items-start gap-2 rounded-lg px-4 py-3 text-sm leading-6 ${
            isSubmitted
              ? "bg-green-50 text-green-800"
              : "bg-neutral-100 text-neutral-700"
          }`}
          role="status"
        >
          {isSubmitted && <CheckCircle2 size={18} className="mt-0.5 shrink-0" aria-hidden="true" />}
          <span>{message}</span>
        </p>
      )}

      <button
        type="submit"
        className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400 sm:w-auto"
        disabled={isSubmitting || isSubmitted}
      >
        {isSubmitting && <Loader2 size={16} className="animate-spin" aria-hidden="true" />}
        Jetzt kündigen
      </button>
    </form>
  );
}
