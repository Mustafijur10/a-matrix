import Icon from "./Icon";
import { benefitChips, benefitGroups } from "@/lib/jobs";

const chipIcons: Record<string, string> = {
  "Health Insurance": "chip-health",
  "Paid Leave": "chip-leave",
  "Employee Recognition": "chip-award",
  Gratuity: "chip-gratuity",
  "Mobile Allowance": "chip-mobile",
  "Provident Fund": "chip-fund",
};

export default function Benefits() {
  return (
    <div>
      <h2 className="text-2xl font-medium text-[#0F1A2B]">Why You&apos;ll Love Working With Us</h2>
      <p className="mt-3 text-[15px] text-[#374151]">When you join our permanent team, we take care of you, your family, and your future.</p>

      <div className="mt-6 space-y-6">
        {benefitGroups.map((g) => (
          <div key={g.title}>
            <h3 className="text-base font-medium text-[#0F1A2B]">{g.title}</h3>
            <ul className="mt-3 space-y-3">
              {g.items.map(([name, desc]) => (
                <li key={name} className="flex items-start gap-3 text-[15px] text-[#374151]">
                  <Icon name="check-circle" size={18} className="mt-0.5 shrink-0" />
                  <span><strong className="font-medium text-[#0F1A2B]">{name}:</strong> {desc}</span>
                </li>
              ))}
            </ul>

            {/* Highlight chips sit after the growth group, as in the Figma */}
            {g.title === "Your Growth & Recognition" && (
              <div className="mt-5 flex flex-wrap gap-2.5">
                {benefitChips.map((c) => {
                  return (
                    <span key={c} className="flex items-center gap-2 rounded-lg bg-[#F3F3F3] px-3.5 py-2.5 text-sm text-[#0F1A2B]">
                      <Icon name={chipIcons[c]} size={16} />{c}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
