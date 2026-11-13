import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import WhyJoin from "@/components/careers/WhyJoin";
import Vacancies from "@/components/careers/Vacancies";
import CtaBanner from "@/components/shared/CtaBanner";
import Footer from "@/components/Footer";
import { getJobs } from "@/lib/jobs";

export const metadata: Metadata = {
  title: "Careers | AutoMatrix",
  description: "A collaborative, result-driven team working at the intersection of technology, innovation, and real-world impact.",
};

export default async function CareersPage() {
  const jobs = await getJobs();
  return (
    <main className="mx-auto w-full max-w-[1440px] overflow-x-clip">
      <PageHero
        badge="Careers"
        title={<>The Next Chapter Of<br className="hidden sm:block" /> Your Career Starts Here</>}
        subtitle="A collaborative, result-driven team working at the intersection of technology, innovation, and real-world impact."
      />
      <WhyJoin />
      <Vacancies jobs={jobs} />
      <CtaBanner title="Not Sure Where You Fit In?" text="Drop us your resume anyway for our People & Culture Team to review." label="Submit Your Resume" href="/careers/submit-resume" />
      <Footer />
    </main>
  );
}
