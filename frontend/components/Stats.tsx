import NetworkBg from "./NetworkBg";

const stats = [
  { value: "24+", label: "Years of Experience" },
  { value: "7+", label: "Industries Served" },
  { value: "20+", label: "Clients" },
  { value: "11+", label: "Digital services launched" },
];

export default function Stats() {
  return (
    <section className="relative isolate bg-navy-900 px-5 py-12 sm:py-16">
      <NetworkBg />
      <dl className="mx-auto grid max-w-[1200px] grid-cols-2 gap-y-10 text-center text-white lg:grid-cols-4 lg:gap-y-0">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`px-4 ${i > 0 ? "lg:border-l lg:border-white/20" : ""}`}
          >
            <dd className="text-4xl font-medium sm:text-[40px]">{s.value}</dd>
            <dt className="mt-2 text-sm text-white/70 sm:text-base">
              {s.label}
            </dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
