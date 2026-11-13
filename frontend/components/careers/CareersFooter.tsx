import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";

const explore = [["About Us", "/about"], ["Meet the Team", "/team"], ["Insights", "/insights"], ["Careers", "/careers"]];
const experience = [["Services", "/services"], ["Products", "/products"], ["Industries", "/industries"]];
const social = [["footer-x", "X"], ["footer-linkedin", "LinkedIn"], ["footer-instagram", "Instagram"], ["footer-youtube", "YouTube"]];

const colTitle = "text-lg text-white";
const link = "text-[13px] text-white/90 transition hover:text-[#6BC5A0]";

export default function CareersFooter() {
  return (
    <footer className="bg-white px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative overflow-hidden rounded-[28px] bg-[#031D21] px-6 pb-48 pt-14 sm:px-12 sm:pb-56">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(ellipse_at_bottom,rgba(63,160,140,0.55),transparent_70%)]" />
        <Image src="/images/logo-light.svg" alt="" aria-hidden width={900} height={190} className="pointer-events-none absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 opacity-[0.07]" />

        <div className="relative grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1.3fr]">
          <div>
            <Image src="/images/logo-light.svg" alt="AutoMatrix" width={160} height={34} />
            <p className="mt-5 max-w-xs text-xs leading-relaxed text-white/90">
              Automatrix Services Ltd. is a next-generation IT and digital services company committed to helping businesses achieve transformative growth and operational excellence.
            </p>
            <div className="mt-8 flex gap-4">
              {social.map(([icon, label]) => (
                <a key={icon} href="#" aria-label={label} className="opacity-50 transition hover:opacity-100"><Icon name={icon} size={20} /></a>
              ))}
            </div>
          </div>

          <div>
            <h3 className={colTitle}>Explore</h3>
            <ul className="mt-5 space-y-4">{explore.map(([l, h]) => <li key={l}><Link href={h} className={link}>{l}</Link></li>)}</ul>
          </div>
          <div>
            <h3 className={colTitle}>Experience</h3>
            <ul className="mt-5 space-y-4">{experience.map(([l, h]) => <li key={l}><Link href={h} className={link}>{l}</Link></li>)}</ul>
          </div>
          <div>
            <h3 className={colTitle}>Contact</h3>
            <ul className="mt-5 space-y-4 text-[13px] text-white/90">
              <li className="flex items-center gap-3"><Icon name="footer-phone" size={16} />+880 964 611 1333</li>
              <li className="flex items-center gap-3"><Icon name="footer-mail" size={16} />info@automatrixservices.com</li>
              <li className="flex items-start gap-3"><Icon name="footer-pin" size={16} className="mt-0.5" />Grand Delvista, South Block L8, Gulshan-2, Dhaka-1212</li>
            </ul>
          </div>
        </div>

        <div className="relative mt-10 flex flex-wrap items-center justify-between gap-2 border-t border-dashed border-white/25 pt-5 text-xs text-white/40">
          <p>2026 Automatrix Services Ltd. All rights reserved.</p>
          <Link href="/terms" className="hover:text-white/70">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
