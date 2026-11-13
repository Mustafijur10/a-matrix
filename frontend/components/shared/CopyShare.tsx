"use client";

import { useState } from "react";
import Icon from "./Icon";

export default function CopyShare({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const url = () => window.location.href;
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url());
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };
  const share = () =>
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url())}`, "_blank", "noopener");
  const btn = "grid h-9 w-9 place-items-center rounded-full bg-[#F4F4F4] transition hover:bg-[#E3F5EE]";

  return (
    <div className="rounded-2xl border border-[#EEE] bg-white p-5">
      <p className="text-lg text-[#0F1A2B]">Copy &amp; Share</p>
      <div className="mt-3 flex items-center gap-2">
        <button aria-label="Share on LinkedIn" className={btn} onClick={share}><Icon name="linkedin" size={16} /></button>
        <button aria-label="Share on YouTube" className={btn}><Icon name="youtube" size={16} /></button>
        <button aria-label="Share on GitHub" className={btn}><Icon name="github" size={16} /></button>
        <button aria-label={`Copy link to ${title}`} onClick={copy} className="grid h-9 w-9 place-items-center rounded-full bg-[#6BC5A0] transition hover:bg-[#58b58f]">
          <Icon name={copied ? "check-white" : "copy-white"} size={16} />
        </button>
      </div>
      <p className="sr-only" aria-live="polite">{copied ? "Link copied" : ""}</p>
    </div>
  );
}
