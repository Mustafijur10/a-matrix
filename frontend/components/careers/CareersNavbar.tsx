"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Edit routes here to match your site
const links = [
  { label: "About Us", href: "/about", dropdown: true },
  { label: "Technology & Solutions", href: "/technology", dropdown: true },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers", active: true },
  { label: "Contact Us", href: "/contact" },
];

const btn = "rounded-xl bg-gradient-to-br from-[#2B8478] to-[#1B5F59] px-5 py-3 text-sm text-white shadow-[inset_0_1px_8px_rgba(255,255,255,0.25)] transition hover:opacity-90";

export default function CareersNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative rounded-2xl bg-white px-4 py-3 sm:px-6">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" aria-label="AutoMatrix home">
          <Image src="/images/logo.svg" alt="AutoMatrix" width={132} height={28} priority />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className={`flex items-center gap-2 text-[13px] ${l.active ? "text-[#4FC3A1]" : "text-[#0F1A2B] hover:text-[#2A8077]"}`}>
              {l.label}
              {l.dropdown && <span aria-hidden className="mb-1 h-1.5 w-1.5 rotate-45 border-b border-r border-current" />}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className={`${btn} hidden md:block`}>Schedule a Call</Link>

        <button aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center md:hidden">
          <span className="flex flex-col gap-1.5">
            <span className="h-0.5 w-5 bg-[#0F1A2B]" /><span className="h-0.5 w-5 bg-[#0F1A2B]" /><span className="h-0.5 w-5 bg-[#0F1A2B]" />
          </span>
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="mt-4 flex flex-col gap-4 border-t border-[#EEE] pt-4 md:hidden">
          {links.map((l) => (
            <Link key={l.label} href={l.href} onClick={() => setOpen(false)} className={`text-sm ${l.active ? "text-[#4FC3A1]" : "text-[#0F1A2B]"}`}>{l.label}</Link>
          ))}
          <Link href="/contact" className={`${btn} text-center`}>Schedule a Call</Link>
        </nav>
      )}
    </header>
  );
}
