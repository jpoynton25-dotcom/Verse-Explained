export const EmailSignupCta = () => {
  return (
    <section className="rounded-soft border border-line bg-white p-6 shadow-card sm:p-8">
      <h2 className="text-2xl font-semibold tracking-tight">Get simple Bible verse explanations in your inbox</h2>
      <p className="mt-3 max-w-prose text-text/80">
        Join the Verse Explained email list for clear verse meanings, daily scripture, and practical encouragement.
      </p>
      <ul className="mt-4 grid gap-2 text-sm text-text/80 sm:grid-cols-3">
        <li className="rounded-xl border border-line bg-canvas px-3 py-2">Weekly verse meaning breakdowns</li>
        <li className="rounded-xl border border-line bg-canvas px-3 py-2">Daily scripture with simple context</li>
        <li className="rounded-xl border border-line bg-canvas px-3 py-2">Practical encouragement for real life</li>
      </ul>
      <form className="mt-5 flex flex-col gap-3 sm:flex-row">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          suppressHydrationWarning
          required
          placeholder="Enter your email"
          className="w-full rounded-xl border border-line bg-canvas px-4 py-3 text-sm outline-none ring-accent transition focus:ring-2"
        />
        <button
          type="button"
          disabled
          className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white/90 opacity-70"
        >
          Coming soon
        </button>
      </form>
      <p className="mt-3 text-xs text-text/65">Email signup is coming soon.</p>
    </section>
  );
};
