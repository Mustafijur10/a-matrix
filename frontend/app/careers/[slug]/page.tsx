import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/shared/PageHero";
import Footer from "@/components/Footer";
import Benefits from "@/components/careers/Benefits";
import JobSummaryCard from "@/components/careers/JobSummaryCard";
import CopyShare from "@/components/shared/CopyShare";
import JobCard from "@/components/careers/JobCard";
import { getJobBySlug, getJobs } from "@/lib/jobs";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getJobs()).map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const job = await getJobBySlug((await params).slug);
  return { title: job ? `${job.title} | Careers | AutoMatrix` : "Job not found" };
}

export default async function JobDetailsPage({ params }: Params) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);
  if (!job) notFound();

  const more = (await getJobs()).filter((j) => j.slug !== slug).slice(0, 2);

  return (
    <main>
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Careers", href: "/careers" }, { label: "Career Details" }]}
        title="Job Details"
        subtitle="A fast-paced, future-focused team working at the intersection of technology, innovation, and real-world impact."
      />

      <section className="bg-white px-5 py-14 sm:py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1.45fr_1fr]">
          <article className="space-y-12">
            <div>
              <h2 className="text-2xl font-medium text-[#0F1A2B]">About the role</h2>
              <div className="mt-4 space-y-5 text-[15px] leading-relaxed text-[#374151]">
                {job.about.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <Benefits />
          </article>

          <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
            <JobSummaryCard job={job} applyHref={`/careers/${job.slug}/apply`} />
            <CopyShare title={job.title} />
          </aside>
        </div>
      </section>

      {more.length > 0 && (
        <section className="bg-[#F3F3F3] px-5 py-16 sm:py-20">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex flex-col items-center text-center">
              <span className="rounded-full border border-[#7FD6C2] bg-white px-3.5 py-1 text-xs text-[#0E9F84]">Openings</span>
              <h2 className="mt-4 text-3xl font-medium text-[#0F1A2B] sm:text-5xl">Explore More Jobs</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {more.map((j) => <JobCard key={j.slug} job={j} />)}
            </div>
          </div>
        </section>
      )}
      <Footer />
    </main>
  );
}
