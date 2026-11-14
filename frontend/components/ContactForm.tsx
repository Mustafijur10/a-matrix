"use client";

import { useState } from "react";

const services = [
  "Data Science & Consultancy",
  "Resource Augmentation",
  "Web & Software Development",
  "CRM & AI Automation",
  "Warehouse & Supply Chain Technology",
  "Back Office Management",
  "Cloud & IT Services",
  "Systems Integration",
];

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-xl bg-surface px-4 text-[13px] text-ink outline-none placeholder:text-ink/40 focus:ring-2 focus:ring-brand-500/50";

export default function ContactForm(_props: { variant?: "page" }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      // TODO: confirm the real endpoint and payload with your backend
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
    <form
      onSubmit={onSubmit}
      className="rounded-[28px] bg-white p-5 sm:p-6"
    >
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
        <label className="block">
          <span className="text-sm text-ink">First Name</span>
          <input name="firstName" required placeholder="Enter your first name" className={`${field} mt-2 h-[54px]`} />
        </label>
        <label className="block">
          <span className="text-sm text-ink">Last Name</span>
          <input name="lastName" placeholder="Enter your last name" className={`${field} mt-2 h-[54px]`} />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="text-sm text-ink">Email</span>
        <input name="email" type="email" required placeholder="Enter your email" className={`${field} mt-2 h-[54px]`} />
      </label>

      <label className="mt-5 block">
        <span className="text-sm text-ink">Phone number</span>
        <input name="phone" type="tel" placeholder="+1 (565) *******" className={`${field} mt-2 h-[54px]`} />
      </label>

      <label className="mt-5 block">
        <span className="text-sm text-ink">Service you&apos;re interested in</span>
        <span className="relative mt-2 block">
          <select
            name="service"
            defaultValue=""
            className={`${field} h-[54px] appearance-none pr-10 invalid:text-ink/40`}
            required
          >
            <option value="" disabled>
              Select your Service
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="m3.5 6 4.5 4.5L12.5 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </label>

      <label className="mt-5 block">
        <span className="text-sm text-ink">What are you trying to solve?</span>
        <textarea name="message" required rows={4} placeholder="Leave a message..." className={`${field} mt-2 min-h-[120px] resize-none py-4`} />
      </label>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-b from-brand-500 to-brand-600 px-6 text-[15px] text-white shadow-[0_8px_24px_-6px_rgba(63,165,149,0.55)] transition hover:brightness-110 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <p role="status" className="text-sm">
          {status === "sent" && <span className="text-brand-600">Thanks, we&apos;ll be in touch soon.</span>}
          {status === "error" && <span className="text-red-600">Something went wrong. Please try again.</span>}
        </p>
      </div>
    </form>
  );
}
