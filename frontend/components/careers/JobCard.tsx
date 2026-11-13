import Link from "next/link";
import Icon from "@/components/shared/Icon";
import type { Job } from "@/lib/jobs";

export default function JobCard({ job }: { job: Job }) {
  return (
    <Link
      href={`/careers/${job.slug}`}
      className="group relative block overflow-hidden rounded-[20px] bg-white p-5 shadow-[0_2px_12px_rgba(15,26,43,0.04)] outline-none transition focus-visible:ring-2 focus-visible:ring-[#2A8077]"
    >
      <span className="pointer-events-none absolute -top-2 right-16 h-24 w-32 rounded-full bg-[#EEF1F3]" aria-hidden />

      <div className="relative flex items-start justify-between gap-4">
        <div className="min-w-0">
          <span className="inline-block rounded-md bg-[#E3F5EE] px-2 py-0.5 text-[11px] text-[#0E7F62]">{job.department}</span>
          <h3 className="mt-2 text-xl font-medium text-[#0F1A2B] sm:text-2xl">{job.title}</h3>
          <p className="mt-2 max-w-[260px] text-sm leading-snug text-[#6B7280]">{job.summary}</p>
        </div>
        <div className="shrink-0 rounded-lg border border-[#ECECEC] bg-white px-3 py-2 text-center">
          <p className="text-xs text-[#6B7280]">Experience</p>
          <p className="mt-0.5 text-sm font-medium text-[#0F1A2B]">{job.experience}</p>
        </div>
      </div>

      <div className="relative mt-5 flex items-center justify-between gap-3 border-y border-[#ECECEC] py-3 text-xs text-[#374151]">
        <p>Job Type: <span className="text-sm font-medium text-[#0F1A2B]">{job.jobType}</span></p>
        <p className="text-right">Location: <span className="text-sm font-medium text-[#0F1A2B]">{job.location}</span></p>
      </div>

      <div className="relative mt-4 flex items-center justify-between gap-3">
        <p className="flex items-center gap-1.5 text-xs text-[#6B7280]">
          <Icon name="clock" size={14} />
          <span className="text-sm font-medium text-[#0F1A2B]">{job.workTime}</span> {job.workDays}
        </p>
        <span className="rounded-lg border border-[#E5E7EB] px-5 py-2.5 text-sm text-[#0F1A2B] transition group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-[#2B8478] group-hover:to-[#1B5F59] group-hover:text-white">
          View Details
        </span>
      </div>
    </Link>
  );
}
