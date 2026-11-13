import ContactMap from "./ContactMap";
import ContactMethods from "./ContactMethods";

export default function ContactDirect() {
  return (
    <section
      id="talk-directly"
      className="relative isolate overflow-hidden bg-surface bg-[url('/images/hex-pattern.png')] bg-cover px-4 pb-20 pt-16 sm:px-5 lg:pb-[120px] lg:pt-[112px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-[32px] font-semibold leading-[1.12] tracking-[-0.03em] text-text-primary sm:text-h2">
          Prefer To Talk Directly?
        </h2>
        <p className="mt-3 text-sm leading-5 text-text-secondary">
          Reach us by email or phone, or visit our office in Gulshan-2, Dhaka.
        </p>

        <div className="mt-10 lg:mt-14">
          <ContactMethods />
        </div>

        <div className="mt-10 lg:mt-24">
          <ContactMap />
        </div>
      </div>
    </section>
  );
}
