import Image from "next/image";
import type { Member } from "@/data/team";

export default function TeamGrid({ members }: { members: Member[] }) {
  return (
    <ul className="flex flex-wrap justify-center gap-5">
      {members.map((p) => (
        <li
          key={p.name}
          className="flex w-full flex-col rounded-[28px] border border-neutral-200 bg-white p-3 pb-5 text-center sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]"
        >
          <div className="relative aspect-[202/212] overflow-hidden rounded-2xl bg-surface">
            <Image src={p.photo} alt={p.name} fill sizes="(min-width:1024px) 285px, 50vw" className="object-cover" />
          </div>
          <h3 className="mt-4 text-lg font-medium text-ink">{p.name}</h3>
          <p className="mt-2 text-[13px] leading-[18px] text-ink/60">{p.role}</p>
          <p className="mt-2.5 text-[13px] leading-[18px] text-ink/60">{p.dept}</p>
          <a
            href={p.linkedin ?? "#"}
            aria-label={`${p.name} on LinkedIn`}
            className="mx-auto mt-5 grid size-10 place-items-center rounded-full bg-[#e6edf7] shadow-[0_6px_14px_-4px_rgba(10,102,194,0.3)] transition hover:scale-105"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
              <rect width="24" height="24" rx="4" fill="#0A66C2" />
              <path d="M7.4 10.2V17M7.4 7.3v.1M11.2 17v-6.8M11.2 13.2c0-1.8 1.1-3 2.6-3 1.5 0 2.3 1 2.3 2.8V17" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
