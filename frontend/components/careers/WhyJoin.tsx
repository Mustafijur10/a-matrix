import Image from "next/image";
import SectionBadge from "./SectionBadge";

// Export each icon from Figma as SVG into /public/images/careers/icons/
const points = [
  ["fast-paced.svg", "Fast-paced, future-focused environment"],
  ["impact.svg", "Real-world impact across industries"],
  ["grow.svg", "Learn, grow, and push boundaries"],
  ["team.svg", "A vibrant team of learned professionals"],
  ["expertise.svg", "Deep expertise across multiple domains"],
  ["learning.svg", "Continuous learning and striving for excellence"],
];

export default function WhyJoin() {
  return (
    <section className="bg-white px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <SectionBadge>Why join us</SectionBadge>
          <h2 className="mt-4 text-3xl font-medium text-[#0F1A2B] sm:text-5xl">Why Join AutoMatrix</h2>
          <p className="mt-4 text-sm leading-relaxed text-[#6B7280]">
            At AutoMatrix, you&apos;ll be stepping into a fast-paced, future-focused environment that moves in line with global trends and best practices.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_1.15fr]">
          {/* Export the whole shaped photo collage from Figma as one image */}
          <Image
            src="/images/careers/why-join-collage.png"
            alt="AutoMatrix team collaborating in the office"
            width={780}
            height={590}
            className="h-auto w-full"
          />
          <ul className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
            {points.map(([icon, label]) => (
              <li key={label} className="flex items-center gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-[#F0F8F5]">
                  <Image src={`/images/careers/icons/${icon}`} alt="" width={32} height={32} />
                </span>
                <span className="text-[15px] leading-snug text-[#0F1A2B]">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
