"use client";

import { useRef } from "react";
import Icon from "@/components/shared/Icon";
import InsightCard from "./InsightCard";
import type { Insight } from "@/lib/insights";

export default function InsightsCarousel({ items }: { items: Insight[] }) {
  const track = useRef<HTMLDivElement>(null);

  const go = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (el && card) el.scrollBy({ left: dir * (card.offsetWidth + 20), behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={track}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth [scrollbar-width:none] md:[mask-image:linear-gradient(to_right,transparent,black_14%,black_86%,transparent)] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((it) => (
          <div key={it.slug} className="w-[85%] shrink-0 snap-center sm:w-[calc((100%-2.5rem)/3)]">
            <InsightCard item={it} />
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center gap-3">
        <button aria-label="Previous" onClick={() => go(-1)} className="grid h-10 w-10 place-items-center rounded-full border border-[#8ED8C0] transition hover:bg-[#E3F5EE]"><Icon name="arrow-left" size={18} /></button>
        <button aria-label="Next" onClick={() => go(1)} className="grid h-10 w-10 place-items-center rounded-full border border-[#8ED8C0] transition hover:bg-[#E3F5EE]"><Icon name="arrow-right" size={18} /></button>
      </div>
    </div>
  );
}
