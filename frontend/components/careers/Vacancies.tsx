"use client";

import { useMemo, useState } from "react";
import SectionBadge from "@/components/shared/SectionBadge";
import JobCard from "./JobCard";
import { departments, type Job } from "@/lib/jobs";

export default function Vacancies({ jobs }: { jobs: Job[] }) {
  const [active, setActive] = useState<string>("All");

  const tabs = useMemo(
    () => [
      { label: "All", count: jobs.length },
      ...departments.map((d) => ({ label: d, count: jobs.filter((j) => j.department === d).length })),
    ],
    [jobs]
  );
  const visible = active === "All" ? jobs : jobs.filter((j) => j.department === active);

  return (
    <section className="relative overflow-hidden bg-[#F3F3F3] px-5 py-16 sm:py-24">
      {/* Export the faint "A" brand mark from Figma as SVG/PNG */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/careers/vacancies-bg.svg')] bg-cover bg-center opacity-80" aria-hidden />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center text-center">
          <SectionBadge>Job</SectionBadge>
          <h2 className="mt-4 text-3xl font-medium text-[#0F1A2B] sm:text-5xl">Current Vacancies</h2>
        </div>

        <div role="tablist" aria-label="Filter by department" className="mt-8 flex flex-wrap justify-center gap-2">
          {tabs.map((t) => {
            const on = active === t.label;
            return (
              <button
                key={t.label}
                role="tab"
                aria-selected={on}
                onClick={() => setActive(t.label)}
                className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-sm transition ${
                  on ? "bg-[#0B7A55] text-white" : "bg-white/70 text-[#0F1A2B] hover:bg-white"
                }`}
              >
                {t.label}
                <span className={`grid h-5 min-w-5 place-items-center rounded-full px-1 text-[11px] ${on ? "bg-white/25" : "bg-[#E3F5EE] text-[#0E7F62]"}`}>
                  {t.count}
                </span>
              </button>
            );
          })}
        </div>

        {visible.length ? (
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {visible.map((j) => <JobCard key={j.slug} job={j} />)}
          </div>
        ) : (
          <p className="mt-10 text-center text-sm text-[#6B7280]">No openings in this team right now. Send us your resume below.</p>
        )}
      </div>
    </section>
  );
}
