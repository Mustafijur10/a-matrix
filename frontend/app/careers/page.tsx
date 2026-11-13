import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import WhyJoin from "@/components/careers/WhyJoin";
import Vacancies from "@/components/careers/Vacancies";
import ResumeCta from "@/components/careers/ResumeCta";
import { getJobs } from "@/lib/jobs";
import CareersFooter from "@/components/careers/CareersFooter";

export const metadata: Metadata = {
  title: "Careers | AutoMatrix",
  description: "A collaborative, result-driven team working at the intersection of technology, innovation, and real-world impact.",
};

export default async function CareersPage() {
  const jobs = await getJobs();
  return (
    <main className="mx-auto w-full max-w-[1440px] overflow-x-clip">
      <PageHero
              pill="Contact Us"
              title={
                <>
                  The Next Chapter of
                  <br className="hidden sm:block" /> your Career Starts Here
                </>
              }
              description="A collaborative, result-driven team working at the intersection of technology, innovation, and real-world impact."
              bgSrc="/images/contact/hero-bg.png"
            />
      <WhyJoin />
      <Vacancies jobs={jobs} />
      <ResumeCta />
    </main>
  );
}
