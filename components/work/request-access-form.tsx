"use client";

import { useState } from "react";

const ACCESS_EMAIL = "moontakimhassan.2000@gmail.com";

type RequestAccessFormProps = {
  projectTitle: string;
};

export function RequestAccessForm({ projectTitle }: RequestAccessFormProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`Gotham access request — ${projectTitle}`);
    const body = encodeURIComponent(
      `Email: ${email}\n\nMessage:\n${message || "(none)"}\n\nProject: ${projectTitle}`,
    );

    window.location.href = `mailto:${ACCESS_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-[clamp(2rem,5vh,3rem)] max-w-md space-y-[clamp(1rem,2.5vh,1.5rem)]"
    >
      <div>
        <label
          htmlFor="access-email"
          className="font-metadata text-[10px] uppercase tracking-[0.25em] text-text-secondary md:text-xs"
        >
          Email
        </label>
        <input
          id="access-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mt-2 w-full border border-border-subtle bg-canvas px-3 py-3 font-body text-base text-text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        />
      </div>

      <div>
        <label
          htmlFor="access-message"
          className="font-metadata text-[10px] uppercase tracking-[0.25em] text-text-secondary md:text-xs"
        >
          Message (optional)
        </label>
        <textarea
          id="access-message"
          name="message"
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="mt-2 w-full resize-y border border-border-subtle bg-canvas px-3 py-3 font-body text-base text-text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        />
      </div>

      <button
        type="submit"
        className="inline-flex min-h-11 items-center px-4 font-body text-sm text-text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 md:text-base"
      >
        Request access →
      </button>
    </form>
  );
}
