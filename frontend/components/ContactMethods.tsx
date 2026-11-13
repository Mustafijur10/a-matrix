import type { ReactNode } from "react";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Grand+Delvista+Gulshan-2+Dhaka";

type Method = {
  title: string;
  desc: string;
  action: string;
  href: string;
  external?: boolean;
  icon: ReactNode;
};

const methods: Method[] = [
  {
    title: "Email",
    desc: "Send us your questions or project requirements and we'll reply by email.",
    action: "info@automatrixservices.com",
    href: "mailto:info@automatrixservices.com",
    icon: (
      <>
        <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
        <path d="m4 8 8 5.5L20 8" />
      </>
    ),
  },
  {
    title: "Call Us",
    desc: "Speak with our team about your requirements.",
    action: "+880 964 611 1333",
    href: "tel:+8809646111333",
    icon: (
      <path d="M21 16.9v2.6a1.9 1.9 0 0 1-2.1 1.9 18.8 18.8 0 0 1-8.2-2.9 18.5 18.5 0 0 1-5.7-5.7A18.8 18.8 0 0 1 2.1 4.6 1.9 1.9 0 0 1 4 2.5h2.6a1.9 1.9 0 0 1 1.9 1.6c.1.9.4 1.8.7 2.6a1.9 1.9 0 0 1-.4 2L7.7 9.8a15.2 15.2 0 0 0 5.7 5.7l1.1-1.1a1.9 1.9 0 0 1 2-.4c.8.3 1.7.6 2.6.7a1.9 1.9 0 0 1 1.9 1.9Z" />
    ),
  },
  {
    title: "Visit Us",
    desc: "Grand Delvista, South Block L8, Gulshan-2, Dhaka-1212",
    action: "See On Google Map",
    href: MAPS_URL,
    external: true,
    icon: (
      <>
        <path d="M12 21s6.5-5.6 6.5-11a6.5 6.5 0 1 0-13 0C5.5 15.4 12 21 12 21Z" />
        <circle cx="12" cy="10" r="2.3" />
      </>
    ),
  },
];

export default function ContactMethods() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {methods.map((m) => (
        <li
          key={m.title}
          className="flex flex-col rounded-[20px] bg-white p-6 shadow-[0_10px_40px_-24px_rgba(15,23,42,0.18)]"
        >
          <span className="grid size-14 place-items-center rounded-full bg-gray text-text-primary">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              {m.icon}
            </svg>
          </span>

          <h3 className="mt-5 text-h6 text-text-primary">{m.title}</h3>
          <p className="mt-2 max-w-[300px] text-sm leading-[19px] text-text-secondary">
            {m.desc}
          </p>

          <a
            href={m.href}
            {...(m.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="mt-8 block break-words pt-1 text-lg font-medium leading-6 text-text-primary transition hover:text-brand-600 sm:mt-auto sm:text-[19px] xl:text-xl"
          >
            {m.action}
          </a>
        </li>
      ))}
    </ul>
  );
}
