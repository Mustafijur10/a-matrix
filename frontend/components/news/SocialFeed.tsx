import Image from "next/image";
import Link from "next/link";
import Pill from "../Pill";

// Platform icons: export from Figma -> public/images/social/
const channels = [
  {
    name: "Facebook",
    icon: "/images/social/facebook-color.svg",
    tint: "rgba(120,200,255,0.38)",
    href: "#",
    cta: "Connect Facebook",
  },
  {
    name: "LinkedIn",
    icon: "/images/social/linkedin-color.svg",
    tint: "rgba(110,170,225,0.32)",
    href: "#",
    cta: "Connect LinkedIn",
  },
  {
    name: "X",
    icon: "/images/social/x-dark.svg",
    tint: "rgba(0,0,0,0.13)",
    href: "#",
    cta: "Connect X",
  },
];

const post = {
  time: "2d ago",
  text: "Omnitrix brings omnichannel engagement, CRM, ticketing, and an AI chatbot into one connected platform.",
};

export default function SocialFeed() {
  return (
    <section className="bg-white px-5 py-16 sm:py-[88px]">
      <div className="mx-auto max-w-[1200px] text-center">
        <Pill>Social</Pill>
        <h2 className="mt-4 text-[32px] font-medium leading-[1.12] tracking-[-0.02em] text-ink sm:text-[40px]">
          Follow Our Conversation
        </h2>
        <p className="mt-3 text-[15px] text-ink/60">
          Fresh posts from our social channels, updated automatically.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-[1200px] gap-4 md:grid-cols-3 md:gap-6">
        {channels.map((c) => (
          <article
            key={c.name}
            className="relative isolate flex flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white p-6"
          >
            {/* diagonal tinted stripes */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10 [mask-image:linear-gradient(135deg,black,transparent_45%)]"
              style={{
                backgroundImage: `repeating-linear-gradient(135deg, ${c.tint} 0 30px, transparent 30px 60px)`,
              }}
            />
            <header className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-[15px] font-medium text-ink">
                <Image src={c.icon} alt="" width={22} height={22} />
                {c.name}
              </span>
              <time className="text-xs text-ink/55">{post.time}</time>
            </header>

            <p className="mt-5 text-[14px] leading-[21px] text-ink/75">{post.text}</p>

            <Link
              href={c.href}
              className="mt-6 inline-flex h-11 w-fit items-center rounded-xl border border-brand-500/40 px-5 text-sm text-brand-600 transition hover:bg-brand-500/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
            >
              {c.cta}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
