import Image from "next/image";

// Every icon is an SVG you export from Figma into /public/images/careers/icons/<name>.svg
export default function Icon({ name, size = 20, className = "" }: { name: string; size?: number; className?: string }) {
  return <Image src={`/images/careers/icons/${name}.svg`} alt="" aria-hidden width={size} height={size} className={className} />;
}
