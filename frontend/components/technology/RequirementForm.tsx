"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "mt-2 h-[54px] w-full rounded-xl bg-surface px-4 text-[13px] text-ink outline-none placeholder:text-ink/40 focus:ring-2 focus:ring-brand-500/50";

export default function RequirementForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      // TODO: confirm the real endpoint and payload with your backend (same as ContactForm)
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[28px] bg-white p-5 shadow-[0_20px_60px_-30px_rgba(7,32,31,0.25)] sm:p-6">
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
        <label className="block">
          <span className="text-sm text-ink">First Name</span>
          <input name="firstName" required placeholder="Enter your first name" className={field} />
        </label>
        <label className="block">
          <span className="text-sm text-ink">Last Name</span>
          <input name="lastName" placeholder="Enter your last name" className={field} />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="text-sm text-ink">Email</span>
        <input name="email" type="email" required placeholder="Enter your email" className={field} />
      </label>

      <label className="mt-5 block">
        <span className="text-sm text-ink">Phone number</span>
        <input name="phone" type="tel" placeholder="+1 (565) *******" className={field} />
      </label>

      <label className="mt-5 block">
        <span className="text-sm text-ink">What are you trying to solve?</span>
        <textarea name="message" required rows={4} placeholder="Leave a message..." className={`${field} h-auto min-h-[120px] resize-none py-4`} />
      </label>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-b from-brand-500 to-brand-600 px-6 text-[15px] text-white shadow-[0_8px_24px_-6px_rgba(63,165,149,0.55)] transition hover:brightness-110 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Request a Consult"}
        </button>
        <p role="status" className="text-sm">
          {status === "sent" && <span className="text-brand-600">Thanks, we&apos;ll reply within one business day.</span>}
          {status === "error" && <span className="text-red-600">Something went wrong. Please try again.</span>}
        </p>
      </div>
    </form>
  );
}
