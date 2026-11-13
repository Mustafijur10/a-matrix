import Image from "next/image";
import ContactForm from "./ContactForm";
import Pill from "./Pill";

export default function ContactFormSection() {
  return (
    <section
      id="get-in-touch"
      className="relative isolate overflow-hidden bg-white px-4 pb-16 pt-16 sm:px-5 sm:pb-20 sm:pt-24"
    >
      {/* Decorative triangles + speckle, exported from Figma as ONE background */}
      <Image
        src="/images/contact/form-bg.png"
        alt=""
        fill
        sizes="1440px"
        className="-z-10 object-cover object-top"
      />

      <div className="mx-auto flex max-w-[990px] flex-col items-center">
        <Pill>Get in touch</Pill>
        <h2 className="mt-5 max-w-[520px] text-center text-[36px] font-bold leading-[1.1] tracking-[-0.03em] text-text-primary sm:text-h1">
          What Can We Build Together?
        </h2>
        <p className="mt-4 max-w-[520px] text-center text-[15px] leading-[22px] text-text-tertiary">
          Tell us about your project and our team will suggest the right
          solution.
        </p>

        <div className="mt-10 w-full">
          <ContactForm variant="page" />
        </div>
      </div>
    </section>
  );
}
