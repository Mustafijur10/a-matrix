import Link from "next/link";
import type { Insight } from "@/lib/insights";

export default function AtAGlance({ glance }: { glance: NonNullable<Insight["glance"]> }) {
  return (
    <div className="relative overflow-hidden rounded-[28px] bg-[#DEF1E8] p-6">
      {/* optional: export the dotted texture from Figma */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/insights/glance-texture.svg')] bg-cover opacity-70" aria-hidden />
      <div className="relative">
        <h2 className="text-xl font-medium text-[#0F1A2B]">At A Glance</h2>
        <h3 className="mt-5 text-[15px] font-medium text-[#0F1A2B]">Industry</h3>
        <p className="mt-1 text-[13px] text-[#6B7280]">{glance.industry}</p>
        <h3 className="mt-5 text-[15px] font-medium text-[#0F1A2B]">Services involved</h3>
        <p className="mt-1 text-[13px] text-[#6B7280]">{glance.services}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {glance.chips.map((c) => <span key={c} className="rounded-full bg-[#B8E6D3] px-3.5 py-1.5 text-xs text-[#0B6B4F]">{c}</span>)}
        </div>
        <Link href="/contact" className="mt-6 block rounded-xl bg-gradient-to-br from-[#2B8478] to-[#1B5F59] py-3.5 text-center text-sm text-white transition hover:opacity-90">
          Discuss a similar project
        </Link>
      </div>
    </div>
  );
}
