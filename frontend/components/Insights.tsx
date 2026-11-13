"use client";

import Image from "next/image";
import { useRef } from "react";
import NetworkBg from "./NetworkBg";
import Pill from "./Pill";

const posts = [
  { title: "Omnichannel CX: One Workspace", desc: "Unify social, messaging, email, and web for faster, consistent CX.", date: "November 5, 2026", read: "3 min read", img: "omnichannel-cx" },
  { title: "Cloud Migration & DevOps", desc: "Migrate legacy workloads, containerize apps, and build CI/CD pipelines.", date: "November 8, 2026", read: "5 min read", img: "cloud-devops" },
  { title: "AI Chatbots for Banking", desc: "Automate inquiries, complaints, and status tracking in Bangla + English.", date: "November 9, 2026", read: "9 min read", img: "ai-chatbots" },
  { title: "Telecom Contact Centers", desc: "Support millions of subscribers with robust contact center technology.", date: "November 11, 2026", read: "6 min read", img: "telecom" },
];

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d={dir === "left" ? "M14 9H4m0 0 4-4M4 9l4 4" : "M4 9h10m0 0-4-4m4 4-4 4"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Insights() {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) =>
    track.current?.scrollBy({ left: dir * 302, behavior: "smooth" });

  return (
    <section className="relative isolate overflow-hidden bg-navy-900 py-14 sm:py-[72px]">
      <NetworkBg />
      <div className="mx-auto flex max-w-[1200px] items-end justify-between gap-6 px-5">
        <div>
          <Pill tone="dark">Insights</Pill>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.02em] text-white sm:text-[40px] sm:leading-[48px]">
            Digital Transformation, In Practice
          </h2>
          <p className="mt-3 max-w-[400px] text-[15px] leading-[22px] text-white/75">
            Explore case studies and articles on CRM, AI automation, omnichannel
            CX, cloud, data, and enterprise modernization.
          </p>
        </div>
        <div className="flex gap-3">
          {(["left", "right"] as const).map((d) => (
            <button
              key={d}
              type="button"
              aria-label={d === "left" ? "Previous" : "Next"}
              onClick={() => scroll(d === "left" ? -1 : 1)}
              className="grid size-10 place-items-center rounded-full bg-navy-700 text-white/80 ring-1 ring-white/10 transition hover:bg-brand-600 hover:text-white"
            >
              <Arrow dir={d} />
            </button>
          ))}
        </div>
      </div>

      <div
        ref={track}
        className="mt-8 flex snap-x gap-4 overflow-x-auto pb-2 pl-5 [scrollbar-width:none] min-[1240px]:pl-[calc((100%-1200px)/2+20px)] [&::-webkit-scrollbar]:hidden"
      >
        {posts.map((p) => (
          <article
            key={p.title}
            className="w-[272px] shrink-0 snap-start rounded-[32px] bg-navy-700 p-3 sm:w-[286px]"
          >
            <div className="relative h-[190px] overflow-hidden rounded-3xl bg-navy-900">
              <Image
                src={`/images/insights/${p.img}.jpg`}
                alt=""
                fill
                sizes="286px"
                className="object-cover"
              />
            </div>
            <div className="px-2 pb-5 pt-4">
              <div className="flex items-center justify-between text-[13px] text-white/50">
                <span className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <rect x="2" y="3" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.1" />
                    <path d="M2 6.5h12M5.5 1.8v2.4M10.5 1.8v2.4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
                  </svg>
                  {p.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-brand-400" />
                  {p.read}
                </span>
              </div>
              <h3 className="mt-3 text-base font-medium text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-[22px] text-white/45">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
