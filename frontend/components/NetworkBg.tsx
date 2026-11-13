import Image from "next/image";

export default function NetworkBg() {
  return (
    <Image
      src="/images/network-bg.png"
      alt=""
      fill
      sizes="1440px"
      className="-z-10 object-cover opacity-70"
    />
  );
}
