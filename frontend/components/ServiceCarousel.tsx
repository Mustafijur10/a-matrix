"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const services = [
  {
    title: "AI Automation",
    desc: "Workflows integrated with AI-powered agents and virtual assistants.",
    image: "/images/services/ai-automation.png",
  },
  {
    title: "Web & Software Development",
    desc: "Scalable web, mobile, and enterprise applications, plus legacy system modernization.",
    image: "/images/services/web-software.png",
  },
  {
    title: "Systems Integration",
    desc: "Middleware and modernization solutions that connect legacy and modern platforms.",
    image: "/images/services/systems-integration.png",
  },
  {
    title: "Outsourced Operations",
    desc: "Dedicated teams that run your back-office and support processes.",
    image: "/images/services/outsourced-operations.png",
  },
  {
    title: "Data & Analytics",
    desc: "Dashboards and pipelines that turn raw data into decisions.",
    image: "/images/services/data-analytics.png",
  },
];

const AUTOPLAY_MS = 5000;

export default function ServiceCarousel() {
  const [active, setActive] = useState(1);
  const [paused, setPaused] = useState(false);
  const n = services.length;

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((i) => (i + 1) % n), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, n]);

  // shortest signed distance from the active card, wrapping around
  const offsetOf = (i: number) => {
    let d = (i - active + n) % n;
    if (d > n / 2) d -= n;
    return d;
  };

  return (
    <div
      className="relative mx-auto mt-10 w-full max-w-[1100px] sm:mt-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="relative h-[300px] [perspective:1200px] sm:h-[310px] lg:h-[330px]"
        aria-roledescription="carousel"
      >
        {services.map((s, i) => {
          const off = offsetOf(i);
          const abs = Math.abs(off);
          const visible = abs <= 1;
          const isActive = off === 0;
          return (
            <article
              key={s.title}
              aria-hidden={!isActive}
              className={`absolute left-1/2 top-0 w-[270px] origin-center rounded-[28px] bg-white p-2 shadow-[0_0_60px_-10px_rgba(63,165,149,0.45)] transition-all duration-700 ease-out sm:w-[318px] ${
                isActive ? "z-20" : "z-10 blur-[3px]"
              }`}
              style={{
                opacity: visible ? (isActive ? 1 : 0.55) : 0,
                pointerEvents: isActive ? "auto" : "none",
                transform: `translateX(calc(-50% + ${off * 118}%)) translateY(${
                  isActive ? 0 : 28
                }px) rotateY(${-off * 28}deg) rotateZ(${off * 7}deg) scale(${
                  isActive ? 1 : 0.9
                })`,
              }}
            >
              <div className="relative h-[150px] overflow-hidden rounded-[22px] bg-neutral-100 sm:h-[180px]">
                <Image
                  src={s.image}
                  alt=""
                  fill
                  sizes="318px"
                  className="object-cover"
                />
              </div>
              <div className="px-2 pb-3 pt-3">
                <h3 className="text-base font-medium text-neutral-900">
                  {s.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-[13px] leading-[17px] text-neutral-600">
                  {s.desc}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2.5">
        {services.map((s, i) => (
          <button
            key={s.title}
            type="button"
            aria-label={`Show ${s.title}`}
            aria-current={i === active}
            onClick={() => setActive(i)}
            className={`h-3.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 ${
              i === active
                ? "w-11 bg-brand-500 ring-2 ring-brand-400/60"
                : "w-3.5 bg-brand-500/70 hover:bg-brand-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
