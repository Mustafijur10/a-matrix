import Image from "next/image";
import Link from "next/link";
import NetworkBg from "../NetworkBg";
import Pill from "../Pill";

// Replace with API/CMS data (e.g. Laravel `/api/news`) later.
const news = Array.from({ length: 6 }, (_, i) => ({
  slug: `omnitrix-launch-${i + 1}`,
  img: `/images/news/news-${i + 1}.jpg`,
  date: "November 8, 2026",
  isNew: true,
  title: "AutoMatrix launches Omnitrix, a unified customer experience platform",
  excerpt:
    "Omnichannel engagement, CRM, ticketing, AI chatbot, and contact center…",
}));

export default function LatestNews() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 px-5 py-14 sm:py-[72px]">
      <NetworkBg />

      <div className="mx-auto max-w-[12000px] text-center">
        <Pill tone="dark">Insight and Case Study</Pill>
        <h2 className="mt-4 text-[32px] font-medium leading-[1.12] tracking-[-0.02em] text-white sm:text-[40px]">
          Latest From AutoMatrix
        </h2>
        <p className="mt-3 text-[14px] text-white/75">
          Company announcements, product updates, and articles from our team.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-[1200px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((n) => (
          <Link
            key={n.slug}
            href={`/news/${n.slug}`}
            className="group block rounded-[32px] bg-navy-700 p-3 ring-1 ring-white/5 transition hover:ring-brand-500/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
          >
            <div className="relative aspect-[1.32] overflow-hidden rounded-3xl bg-navy-900">
              <Image
                src={n.img}
                alt=""
                fill
                sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="px-2 pb-4 pt-4">
              <div className="flex items-center justify-between text-[12px] text-white/70">
                <span className="flex items-center gap-2">
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <rect x="2" y="3" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.1" />
                    <path d="M2 6.5h12M5.5 1.8v2.4M10.5 1.8v2.4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
                  </svg>
                  <time>{n.date}</time>
                </span>
                {n.isNew && (
                  <span className="rounded-full bg-[#0b57ff] px-2.5 py-0.5 text-[10px] font-medium text-white">
                    New
                  </span>
                )}
              </div>
              <h3 className="mt-3 text-[15px] font-medium leading-5 text-white">{n.title}</h3>
              <p className="mt-2 line-clamp-2 text-[13px] leading-5 text-white/55">{n.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
