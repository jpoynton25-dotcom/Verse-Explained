"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

export const EmailSignupCta = () => {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [feedback, setFeedback] = useState("We respect your inbox. Unsubscribe anytime.");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState("submitting");
    setFeedback("Submitting...");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "").trim();

    try {
      const response = await fetch("/api/opt-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          page: window.location.pathname
        })
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "Could not save your email right now.");
      }

      setSubmitState("success");
      setFeedback("Thanks. You are on the list.");
      form.reset();
    } catch (error) {
      setSubmitState("error");
      setFeedback(error instanceof Error ? error.message : "Could not save your email right now.");
    }
  };

  return (
    <section className="rounded-soft border border-line bg-white p-6 shadow-card sm:p-8">
      <h2 className="text-2xl font-semibold tracking-tight">Get Bible verses explained simply - sent to your inbox</h2>
      <p className="mt-3 max-w-prose text-text/80">
        Short, clear verse meanings, daily encouragement, and practical guidance for real life.
      </p>
      <ul className="mt-4 grid gap-2 text-sm text-text/80 sm:grid-cols-3">
        <li className="rounded-xl border border-line bg-canvas px-3 py-2">Daily Bible verse explained simply</li>
        <li className="rounded-xl border border-line bg-canvas px-3 py-2">Clear meaning in plain English</li>
        <li className="rounded-xl border border-line bg-canvas px-3 py-2">Encouragement for real life situations</li>
      </ul>
      <form className="mt-5 flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          suppressHydrationWarning
          required
          placeholder="👉 Enter your email"
          className="w-full rounded-xl border border-line bg-canvas px-4 py-3 text-sm outline-none ring-accent transition focus:ring-2"
        />
        <button
          type="submit"
          disabled={submitState === "submitting"}
          className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white disabled:opacity-70"
        >
          {submitState === "submitting" ? "Submitting..." : "👉 Get Free Verses"}
        </button>
      </form>
      <p className="mt-3 text-xs text-text/65" role="status" aria-live="polite">
        {feedback}
      </p>
    </section>
  );
};
