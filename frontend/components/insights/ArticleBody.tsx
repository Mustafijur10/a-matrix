import Image from "next/image";
import Icon from "@/components/shared/Icon";
import type { Block } from "@/lib/insights";

export default function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((b, i) => {
        switch (b.t) {
          case "h":
            return <h2 key={i} className="pt-6 text-xl font-medium text-[#0F1A2B] first:pt-0 sm:text-2xl">{b.text}</h2>;
          case "p":
            return <p key={i} className="text-[15px] leading-relaxed text-[#6B7280]">{b.text}</p>;
          case "img":
            return (
              <div key={i} className="relative my-4 aspect-[2.2] overflow-hidden rounded-3xl bg-[#E5E7EB]">
                <Image src={b.src} alt={b.alt} fill sizes="(min-width:1024px) 620px, 100vw" className="object-cover" />
              </div>
            );
          case "tip":
            return (
              <aside key={i} className="my-4 rounded-lg border-l-4 border-[#F59E0B] bg-[#FFF3E6] p-5">
                <p className="flex items-center gap-3 text-[15px] font-medium text-[#0F1A2B]"><Icon name="lightbulb" size={18} />{b.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">{b.text}</p>
              </aside>
            );
          case "quote":
            return (
              <blockquote key={i} className="my-4 rounded-lg border-l-4 border-[#0B7A55] bg-[#DEF1E8] p-5">
                <p className="text-[15px] italic text-[#0F1A2B]">“{b.text}”</p>
                <footer className="mt-2 text-xs text-[#6B7280]">— {b.by}</footer>
              </blockquote>
            );
        }
      })}
    </div>
  );
}
