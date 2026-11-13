import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/shared/Icon";

const explore = [["About Us", "/about"], ["Meet the Team", "/team"], ["Insights", "/insights"], ["Careers", "/careers"]];
const experience = [["Services", "/services"], ["Products", "/products"], ["Industries", "/industries"]];
const social = [["footer-x", "X"], ["footer-linkedin", "LinkedIn"], ["footer-instagram", "Instagram"], ["footer-youtube", "YouTube"]];

const colTitle = "text-xl text-white lg:text-2xl";
const link = "text-base text-white transition hover:text-[#6BC5A0]";

export default function SiteFooter({ tone = "white" }: { tone?: "white" | "gray" }) {
  return (
    <footer className={tone === "gray" ? "bg-[#F5F5F5]" : "bg-white"}>
      {/* 1440px page wrapper */}
      <div className="mx-auto max-w-[1440px] px-4 pb-4">
        <div className="relative overflow-hidden rounded-[32px] bg-[#081C1C] px-6 pb-44 pt-14 sm:px-12 lg:rounded-[48px] lg:px-24 lg:pb-52 lg:pt-20">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(ellipse_at_bottom,rgba(63,160,140,0.6),transparent_70%)]" />
          <Image src="/images/logo-light.svg" alt="" aria-hidden width={900} height={190} className="pointer-events-none absolute -bottom-6 left-1/2 w-[70%] -translate-x-1/2 opacity-[0.08]" />

          <div className="relative grid gap-12 sm:grid-cols-2 lg:grid-cols-[475fr_224fr_224fr_293fr] lg:gap-0">
            <div className="sm:col-span-2 lg:col-span-1">
              <Image src="/images/logo-light.svg" alt="AutoMatrix" width={205} height={44} />
              <p className="mt-8 max-w-[340px] text-sm leading-5 text-white">
                Automatrix Services Ltd. is a next-generation IT and digital services company committed to helping businesses achieve transformative growth and operational excellence.
              </p>
              <div className="mt-12 flex gap-5">
                {social.map(([icon, label]) => (
                  <a key={icon} href="#" aria-label={label} className="opacity-60 transition hover:opacity-100"><Icon name={icon} size={24} /></a>
                ))}
              </div>
            </div>

            <div>
              <h3 className={colTitle}>Explore</h3>
              <ul className="mt-8 space-y-6">{explore.map(([l, h]) => <li key={l}><Link href={h} className={link}>{l}</Link></li>)}</ul>
            </div>
            <div>
              <h3 className={colTitle}>Experience</h3>
              <ul className="mt-8 space-y-6">{experience.map(([l, h]) => <li key={l}><Link href={h} className={link}>{l}</Link></li>)}</ul>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className={colTitle}>Contact</h3>
              <ul className="mt-8 space-y-6 text-base text-white">
                <li className="flex items-center gap-4"><Icon name="footer-phone" size={20} />+880 964 611 1333</li>
                <li className="flex items-center gap-4"><Icon name="footer-mail" size={20} />info@automatrixservices.com</li>
                <li className="flex items-start gap-4"><Icon name="footer-pin" size={20} className="mt-1 shrink-0" />Grand Delvista, South Block L8, Gulshan-2, Dhaka-1212</li>
              </ul>
            </div>
          </div>

          <div className="relative mt-14 flex flex-wrap items-center justify-between gap-2 border-t border-dashed border-white/25 pt-6 text-sm text-white/40">
            <p>2026 Automatrix Services Ltd. All rights reserved.</p>
            <Link href="/terms" className="hover:text-white/70">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
