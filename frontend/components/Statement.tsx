import NetworkBg from "./NetworkBg";

export default function Statement() {
  return (
    <section className="relative isolate bg-navy-900 px-5 py-14 sm:py-[72px]">
      <NetworkBg />
      <p className="mx-auto max-w-[780px] text-center text-xl font-normal leading-8 text-white sm:text-[28px] sm:leading-[36px]">
        A Next-Generation IT &amp; Digital Services Company. Helping Enterprises
        Across Market Modernize Core Systems,{" "}
        <span className="text-mint">
          Streamline Workflows, And Make Data-Driven Decisions , Through CRM, AI
          Automation, Omni-Channel CX, And Warehouse Management Solutions.
        </span>
      </p>
    </section>
  );
}
