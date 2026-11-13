type P = { className?: string };
const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const PhoneIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
    <path d="M11 18.5h2" />
  </svg>
);
export const MailIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="m4 7.5 8 5.5 8-5.5" />
  </svg>
);
export const PinIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 21s6.5-5.6 6.5-11a6.5 6.5 0 1 0-13 0C5.5 15.4 12 21 12 21Z" />
    <circle cx="12" cy="10" r="2.3" />
  </svg>
);
export const XIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 4l16 16M20 4 4 20" />
  </svg>
);
export const LinkedinIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 10.5V16M8 7.8v.1M12 16v-5.5M12 13c0-1.5 1-2.5 2.3-2.5S16.5 11.3 16.5 13V16" />
  </svg>
);
export const InstagramIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r=".6" fill="currentColor" />
  </svg>
);
export const YoutubeIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="2.5" y="5" width="19" height="14" rx="4" />
    <path d="m10 9.5 5 2.5-5 2.5z" />
  </svg>
);
