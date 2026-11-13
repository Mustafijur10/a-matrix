import Link from "next/link";
import Icon from "@/components/shared/Icon";
import type { Job } from "@/lib/jobs";

export default function JobSummaryCard({ job, applyHref }: { job: Job; applyHref: string }) {
  const rows = [
    { icon: "job-type", label: "Job Type", value: "Full-time", extra: "" },
    { icon: "clock-white", label: "Work Time", value: job.workTime, extra: job.workDays },
    { icon: "vacancy", label: "Vacancy", value: String(job.vacancy), extra: "" },
    { icon: "location", label: "Location", value: job.location, extra: "" },
  ];
  return (
    <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#2E8A7C] via-[#6FC6A8] to-[#2A7F74] p-7 text-white">
      {/* optional: export the hex-network texture from Figma */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/careers/summary-texture.svg')] bg-cover opacity-60" aria-hidden />
      <div className="relative">
        <h2 className="text-3xl font-medium sm:text-4xl">{job.title}</h2>
        <p className="mt-3 border-b border-white/25 pb-5 text-sm leading-snug text-white/90">{job.summary}</p>

        <dl className="mt-5 space-y-5">
          {rows.map(({ icon, label, value, extra }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/20"><Icon name={icon} size={22} /></span>
              <div>
                <dt className="text-xs text-white/85">{label}</dt>
                <dd className="text-base font-medium">{value} {extra && <span className="ml-1 text-sm font-normal text-white/85">{extra}</span>}</dd>
              </div>
            </div>
          ))}
        </dl>

        <Link href={applyHref} className="mt-7 block rounded-lg bg-white py-3 text-center text-sm text-[#0F1A2B] transition hover:bg-white/90">
          Apply Now
        </Link>
      </div>
    </div>
  );
}
