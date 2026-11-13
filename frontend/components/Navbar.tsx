"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "./Button";

const links = [
  { label: "About Us", href: "/about", dropdown: true },
  { label: "Technology & Solutions", href: "/solutions", dropdown: true },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

function Chevron() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M2.5 4.5 6 8l3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <header className="relative z-30 px-3 pt-3 sm:px-6 sm:pt-6">
      <nav className="flex h-[68px] items-center justify-between rounded-[24px] bg-white pl-4 pr-3 shadow-lg sm:pl-[17px] sm:pr-[10px]">
        <Link href="/" aria-label="AutoMatrix home" className="shrink-0">
          <Image
            src="/images/logo.svg"
            alt="AutoMatrix"
            width={165}
            height={30}
            priority
            className="h-auto w-[130px] sm:w-[165px]"
          />
        </Link>

        <ul className="hidden items-center gap-8 text-[15px] text-neutral-900 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`flex items-center gap-1.5 transition hover:text-brand-500 ${
                  isActive(l.href) ? "text-brand-500" : ""
                }`}
              >
                {l.label}
                {l.dropdown && <Chevron />}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button href="/contact" className="hidden h-12 px-6 sm:inline-flex">
            Schedule a Call
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-xl text-neutral-900 lg:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {open ? (
                <path d="M5 5l12 12M17 5 5 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="absolute inset-x-3 top-[88px] rounded-3xl bg-white p-4 shadow-xl sm:inset-x-6 sm:top-[104px] lg:hidden">
          <ul className="flex flex-col text-neutral-900">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className={`flex items-center justify-between rounded-xl px-3 py-3 hover:bg-neutral-100 ${
                    isActive(l.href) ? "text-brand-500" : ""
                  }`}
                >
                  {l.label}
                  {l.dropdown && <Chevron />}
                </Link>
              </li>
            ))}
          </ul>
          <Button href="/contact" className="mt-3 w-full sm:hidden">
            Schedule a Call
          </Button>
        </div>
      )}
    </header>
  );
}
