"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";

type Item = { label: string; desc: string; href: string; icon: string };

const aboutMenu: Item[] = [
  { label: "Company Overview", desc: "Who we are and what we stand for", href: "/about", icon: "overview" },
  { label: "Meet the Team", desc: "The people behind AutoMatrix", href: "/team", icon: "team" },
  { label: "News & Events", desc: "Latest updates and stories", href: "/news", icon: "news" },
];

const techMenu: Item[] = [
  { label: "Products", desc: "Omnitrix CX platform", href: "/products", icon: "products" },
  { label: "Services", desc: "AI, cloud & automation", href: "/services", icon: "solutions" },
  { label: "Industries", desc: "Solutions for every sector", href: "/industries", icon: "industries" },
];

const plainLinks = [
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/#contact" },
];

type MenuKey = "about" | "tech" | null;

// Matches the page itself and any child route (e.g. /news/some-article)
const matches = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`);

function Chevron({ up = false }: { up?: boolean }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden className={`transition ${up ? "rotate-180" : ""}`}>
      <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuList({ items, pathname, onNavigate }: { items: Item[]; pathname: string; onNavigate: () => void }) {
  return (
    <ul className="flex flex-col gap-1">
      {items.map((m) => {
        const active = matches(pathname, m.href);
        return (
          <li key={m.href}>
            <Link
              href={m.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={`group flex items-center gap-4 rounded-2xl p-3 transition hover:bg-mint-100 focus-visible:bg-mint-100 focus-visible:outline-none ${active ? "bg-mint-100" : ""}`}
            >
              <span className="grid size-[50px] shrink-0 place-items-center rounded-xl bg-mint-100 group-hover:bg-[#c9eedf]">
                <Image src={`/images/menu/${m.icon}.svg`} alt="" width={26} height={26} />
              </span>
              <span className="flex-1">
                <span className="block whitespace-nowrap text-lg text-ink">{m.label}</span>
                <span className="block text-[15px] text-ink/60">{m.desc}</span>
              </span>
              <svg className={`text-brand-600 transition group-hover:opacity-100 group-focus-visible:opacity-100 ${active ? "opacity-100" : "opacity-0"}`} width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path d="m6.5 3.5 5.5 5.5-5.5 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [mobile, setMobile] = useState(false);
  const [open, setOpen] = useState<MenuKey>(null);
  const [lastPath, setLastPath] = useState(pathname);

  // Close every menu when the route changes (safe "reset state on prop change" pattern)
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(null);
    setMobile(false);
  }

  const close = () => setOpen(null);

  // Escape closes menus; a click/tap outside the header closes them (touch devices)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobile(false);
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(null);
        setMobile(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  const aboutActive = aboutMenu.some((m) => matches(pathname, m.href));
  const techActive = techMenu.some((m) => matches(pathname, m.href));
  const trigger = (active: boolean, isOpen: boolean) =>
    `flex items-center gap-1.5 transition ${isOpen || active ? "text-brand-500" : "hover:text-brand-600"}`;

  return (
    <header ref={headerRef} className="relative z-30 px-3 pt-3 sm:px-6 sm:pt-6" onMouseLeave={close}>
      <nav className="flex h-[68px] items-center justify-between rounded-[24px] bg-white pl-4 pr-3 shadow-lg sm:pl-[17px] sm:pr-[10px]" aria-label="Main">
        <Link href="/" aria-label="AutoMatrix home" className="shrink-0">
          <Image src="/images/logo.svg" alt="AutoMatrix" width={165} height={30} priority className="h-auto w-[130px] sm:w-[165px]" />
        </Link>

        <ul className="hidden items-center gap-8 text-[15px] text-neutral-900 lg:flex">
          <li onMouseEnter={() => setOpen("about")}>
            {/* click opens (never toggles shut) so hover-then-click doesn't flicker the menu */}
            <button type="button" aria-haspopup="true" aria-expanded={open === "about"} onClick={() => setOpen("about")} className={trigger(aboutActive, open === "about")}>
              About Us <Chevron up={open === "about"} />
            </button>
          </li>

          <li onMouseEnter={() => setOpen("tech")}>
            <button type="button" aria-haspopup="true" aria-expanded={open === "tech"} onClick={() => setOpen("tech")} className={trigger(techActive, open === "tech")}>
              Technology &amp; Solutions <Chevron up={open === "tech"} />
            </button>
          </li>

          {plainLinks.map((l) => (
            <li key={l.label} onMouseEnter={close}>
              <Link href={l.href} className={`transition hover:text-brand-600 ${matches(pathname, l.href) ? "text-brand-500" : ""}`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button href="/#contact" className="hidden h-12 px-6 sm:inline-flex">Schedule a Call</Button>
          <button type="button" aria-label="Toggle menu" aria-expanded={mobile} onClick={() => setMobile((v) => !v)} className="grid size-11 place-items-center rounded-xl text-neutral-900 lg:hidden">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {mobile ? (
                <path d="M5 5l12 12M17 5 5 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* About Us / Technology & Solutions mega menu (list + quote card) */}
      {(open === "about" || open === "tech") && (
        <div className="absolute inset-x-3 top-full z-40 hidden pt-2 sm:inset-x-6 lg:block">
          <div className="mx-auto grid w-[903px] max-w-full grid-cols-[1fr_397px] gap-6 rounded-3xl bg-white p-4 shadow-2xl">
            <MenuList items={open === "tech" ? techMenu : aboutMenu} pathname={pathname} onNavigate={close} />
            <figure className="flex min-h-[245px] flex-col justify-between rounded-2xl bg-gradient-to-b from-[#e3f8ef] to-[#8be6c5] p-6">
              <blockquote className="max-w-[300px] text-xl leading-7 text-ink">
                “Growth is built on strong partnerships and sharper strategy.”
              </blockquote>
              <figcaption className="flex items-center gap-4">
                <Image src="/images/people/tokee.jpg" alt="" width={64} height={64} className="size-16 rounded-xl object-cover" />
                <span>
                  <span className="block text-2xl font-medium text-ink">Tokee Mesbah Uddin</span>
                  <span className="block text-xs text-ink/60">Head of Sales, AutoMatrix Services Limited</span>
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobile && (
        <div className="absolute inset-x-3 top-[88px] max-h-[75vh] overflow-y-auto rounded-3xl bg-white p-4 shadow-xl sm:inset-x-6 sm:top-[104px] lg:hidden">
          {[
            { title: "About Us", items: aboutMenu },
            { title: "Technology & Solutions", items: techMenu },
          ].map((g) => (
            <div key={g.title}>
              <p className="px-3 pb-1 pt-3 text-xs uppercase tracking-wide text-ink/50">{g.title}</p>
              <ul>
                {g.items.map((m) => (
                  <li key={m.href}>
                    <Link
                      href={m.href}
                      onClick={() => setMobile(false)}
                      aria-current={matches(pathname, m.href) ? "page" : undefined}
                      className={`block rounded-xl px-3 py-2.5 hover:bg-neutral-100 ${matches(pathname, m.href) ? "text-brand-500" : "text-neutral-900"}`}
                    >
                      {m.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <ul className="mt-1 border-t border-neutral-100 pt-1">
            {plainLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} onClick={() => setMobile(false)} className="block rounded-xl px-3 py-3 text-neutral-900 hover:bg-neutral-100">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href="/#contact" className="mt-3 w-full sm:hidden">Schedule a Call</Button>
        </div>
      )}
    </header>
  );
}
