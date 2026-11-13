import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/shared/Icon";
import { formatLong, type Insight } from "@/lib/insights";

export default function InsightCard({ item, tone = "gray" }: { item: Insight; tone?: "gray" | "white" }) {
  return (
    <Link
      href={`/insights/${item.slug}`}
      className={`group block h-full rounded-[28px] p-3.5 outline-none transition focus-visible:ring-2 focus-visible:ring-[#2A8077] ${tone === "gray" ? "bg-[#F7F7F7]" : "bg-white"}`}
    >
      <div className="relative aspect-[1.3] overflow-hidden rounded-[20px] bg-[#E5E7EB]">
        <Image src={item.image} alt="" fill sizes="(min-width:1024px) 320px, 85vw" className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="px-1 pb-3 pt-4">
        <div className="flex items-center justify-between text-[13px] text-[#6B7280]">
          <span className="flex items-center gap-2"><Icon name="calendar" size={16} />{formatLong(item.date)}</span>
          <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#6BC5A0]" />{item.readTime} min read</span>
        </div>
        <h3 className="mt-3 text-lg font-medium text-[#0F1A2B]">{item.title}</h3>
        <p className="mt-2 text-sm leading-snug text-[#6B7280]">{item.summary}</p>
      </div>
    </Link>
  );
}
