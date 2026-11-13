import Image from "next/image";
import Pill from "./Pill";

const items = [
  { title: "Data Science & Consultancy", desc: "Data-driven consulting and advanced analytics that help you optimize operations…", img: "data-science" },
  { title: "Resource Augmentation", desc: "Flexible access to skilled professionals across AI, RPA, cybersecurity, and cloud…", img: "resource-augmentation" },
  { title: "Web & Software Development", desc: "Scalable web, mobile, and enterprise applications, plus legacy system modernization…", img: "web-software" },
  { title: "CRM & AI Automation", desc: "CRM platforms integrated with AI-powered chatbots, virtual assistants, and…", img: "crm-ai" },
  { title: "Warehouse & Supply Chain Technology", desc: "Scalable web, mobile, and enterprise applications, plus legacy system modernization…", img: "warehouse" },
  { title: "Back Office Management", desc: "Digitized, technology-enabled workflows that reduce manual effort…", img: "back-office" },
  { title: "Cloud & IT Services", desc: "Migration, application modernization, containerization, and DevOps implementation…", img: "cloud-it" },
  { title: "Systems Integration", desc: "Middleware and modernization solutions that connect legacy and modern platforms…", img: "systems-integration" },
];

export default function Solutions() {
  return (
    <section className="relative bg-white px-5 pb-20 pt-14 sm:pt-[72px]">
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(ellipse_50%_100%_at_50%_100%,rgba(63,165,149,0.25),transparent)]"
      />
      <div className="relative mx-auto max-w-[1200px]">
        <div className="text-center">
          <Pill>What we build</Pill>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.02em] text-ink sm:text-[40px] sm:leading-[48px]">
            Six Ways We Take Work Off Your Plate
          </h2>
          <p className="mx-auto mt-3 max-w-[480px] text-[15px] leading-[22px] text-ink/55">
            Every engagement starts with one question: what&apos;s manual today
            that shouldn&apos;t be tomorrow. From there we design, build and
            support the system that fixes it.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {items.map((it, i) => (
            <li
              key={it.title}
              className={`rounded-[32px] bg-surface p-3 ${
                i < 6 ? "lg:col-span-2" : "lg:col-span-3"
              }`}
            >
              <div className="relative h-[190px] overflow-hidden rounded-3xl bg-white sm:h-[230px]">
                <Image
                  src={`/images/solutions/${it.img}.png`}
                  alt=""
                  fill
                  sizes="(min-width:1024px) 400px, 100vw"
                  className="object-contain"
                />
              </div>
              <div className="px-1.5 pb-3 pt-5">
                <h3 className="text-base font-medium text-ink">{it.title}</h3>
                <p className="mt-2.5 text-sm leading-[22px] text-ink/75">
                  {it.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
