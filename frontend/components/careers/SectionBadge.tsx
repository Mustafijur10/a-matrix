export default function SectionBadge({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3.5 py-1 text-xs ${
        dark ? "border-[#2FB89A]/60 text-[#4FD8B5]" : "border-[#7FD6C2] bg-white text-[#0E9F84]"
      }`}
    >
      {children}
    </span>
  );
}
