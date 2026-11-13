"use client";

import { useState } from "react";
import { buttonStyles } from "./Button";

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

type Status = "idle" | "sending" | "success" | "error";
type Errors = Partial<Record<string, string[]>>;

/**
 * variant="compact" → homepage contact section (unchanged look)
 * variant="page"    → /contact page card (Figma: tall inputs, full-width button)
 */
type Variant = "compact" | "page";

const styles = {
  compact: {
    form: "rounded-[28px] bg-white p-5 shadow-[0_20px_60px_-30px_rgba(11,27,46,0.25)] sm:p-4",
    label: "mb-2 block text-sm font-medium text-ink",
    input: "h-11 px-4 text-sm",
    textarea: "py-3.5",
    rows: 4,
    gap: "gap-5",
    footer: "mt-6 flex flex-wrap items-center gap-4",
    button: "",
  },
  page: {
    form: "rounded-[28px] bg-white p-4 shadow-[0_24px_80px_-32px_rgba(15,23,42,0.2)] sm:p-6",
    label: "mb-2 block text-base font-medium text-text-primary",
    input: "h-14 px-5 text-[15px] sm:h-16",
    textarea: "min-h-[200px] py-5 sm:min-h-[240px]",
    rows: 8,
    gap: "gap-5 sm:gap-6",
    footer: "mt-8 flex flex-col gap-4 sm:mt-10",
    button: "w-full",
  },
} satisfies Record<Variant, Record<string, string | number>>;

const field =
  "w-full rounded-xl bg-gray text-text-primary placeholder:text-text-tertiary/70 outline-none ring-1 ring-transparent transition focus:bg-white focus:ring-brand-500";

function Field({
  label,
  name,
  errors,
  labelClass,
  children,
}: {
  label: string;
  name: string;
  errors: Errors;
  labelClass: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      {children}
      {errors[name]?.[0] && (
        <p className="mt-1.5 text-xs text-red-600" role="alert">
          {errors[name]![0]}
        </p>
      )}
    </div>
  );
}

export default function ContactForm({
  variant = "compact",
}: {
  variant?: Variant;
}) {
  const s = styles[variant];
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setErrors({});
    setMessage("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });

      if (res.status === 422) {
        const data = await res.json();
        setErrors(data.errors ?? {});
        setStatus("error");
        return;
      }
      if (!res.ok) throw new Error("Request failed");

      form.reset();
      setStatus("success");
      setMessage("Thanks! We'll get back to you within one business day.");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again or email us directly.");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className={s.form}>
      <div className={`grid ${s.gap}`}>
        <div className={`grid gap-5 sm:grid-cols-2 ${variant === "page" ? "sm:gap-4" : "sm:gap-3"}`}>
          <Field label="First Name" name="first_name" errors={errors} labelClass={s.label}>
            <input id="first_name" name="first_name" required autoComplete="given-name" placeholder="Enter your first name" className={`${field} ${s.input}`} />
          </Field>
          <Field label="Last Name" name="last_name" errors={errors} labelClass={s.label}>
            <input id="last_name" name="last_name" required autoComplete="family-name" placeholder="Enter your last name" className={`${field} ${s.input}`} />
          </Field>
        </div>

        <Field label="Email" name="email" errors={errors} labelClass={s.label}>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="Enter your email" className={`${field} ${s.input}`} />
        </Field>

        <Field label="Phone number" name="phone" errors={errors} labelClass={s.label}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+880 1XXX XXXXXX" className={`${field} ${s.input}`} />
        </Field>

        <Field label="Service you're interested in" name="service" errors={errors} labelClass={s.label}>
          <div className="relative">
            <select
              id="service"
              name="service"
              required
              defaultValue=""
              className={`${field} ${s.input} appearance-none pr-12 invalid:text-text-tertiary/70`}
            >
              <option value="" disabled>
                Select your Service
              </option>
              {services.map((x) => (
                <option key={x} value={x}>
                  {x}
                </option>
              ))}
            </select>
            <svg className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-text-primary" width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </Field>

        <Field label="What are you trying to solve?" name="message" errors={errors} labelClass={s.label}>
          <textarea id="message" name="message" required rows={s.rows} placeholder="Leave a message..." className={`${field} resize-none px-5 text-[15px] ${s.textarea}`} />
        </Field>
      </div>

      <div className={s.footer}>
        <button
          type="submit"
          disabled={status === "sending"}
          className={buttonStyles({ variant: "primary", size: "md", className: s.button })}
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        {message && (
          <p
            role="status"
            className={`text-sm ${variant === "page" ? "text-center" : ""} ${status === "success" ? "text-brand-600" : "text-red-600"}`}
          >
            {message}
          </p>
        )}
      </div>
    </form>
  );
}
