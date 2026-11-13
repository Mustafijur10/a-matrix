import Image from "next/image";

/**
 * Dashboard screenshot that overlaps the bottom edge of the hero.
 * Export the browser-window mockup from Figma -> public/images/products/omnitrix-dashboard.png
 * Pair with <TechHero className="pb-24 lg:pb-[268px]"> so the overlap lines up.
 */
export default function ProductShowcase() {
  return (
    <div className="relative z-10 -mt-20 px-4 lg:-mt-[226px]">
      <div className="mx-auto max-w-[976px] rounded-[28px] bg-mint-100 p-2 shadow-[0_30px_80px_-30px_rgba(7,32,31,0.45)] sm:p-3">
        <Image
          src="/images/products/omnitrix-dashboard.png"
          alt="Omnitrix dashboard showing sales, profit and order analytics"
          width={1952}
          height={1210}
          priority
          sizes="(min-width:1024px) 952px, 100vw"
          className="h-auto w-full rounded-[20px]"
        />
      </div>
    </div>
  );
}
