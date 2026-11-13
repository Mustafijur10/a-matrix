// Temporary mock data. Replace getJobs/getJobBySlug with fetch() calls to your backend.
export type Job = {
  slug: string;
  title: string;
  department: "Engineering" | "Business" | "Human Resources";
  experience: string;
  summary: string;
  jobType: string;
  location: string;
  workTime: string;
  workDays: string;
  vacancy: number;
  about: string[];
};

const about = [
  "The Cashless AI dashboard is where merchants start their day: yesterday's takings, today's settlements, the terminals that are online, the bills we've consolidated for them. It has to be fast, calm and correct — on a laptop in an office and on a phone behind a counter.",
  "You'll own that surface. You'll work directly with our product designer and the payments backend team, and you'll have real say over the architecture, the component library and what we stop doing. This is a senior role in a team of six engineers, reporting to our Head of Engineering.",
];

const base = {
  experience: "1.5-2 yrs",
  summary: "Tell us about your project and our team will suggest the right solution.",
  jobType: "Full Time",
  location: "Gulshan-2, Dhaka-1212",
  workTime: "9AM-5PM",
  workDays: "Saturday to Tuesday",
  vacancy: 2,
  about,
};

export const jobs: Job[] = [
  { ...base, slug: "software-engineer-frontend", title: "Software Engineer", department: "Engineering" },
  { ...base, slug: "business-analyst", title: "Business Analyst", department: "Business" },
  { ...base, slug: "business-development-executive", title: "Business Development Executive", department: "Business" },
  { ...base, slug: "hr-executive", title: "HR Executive", department: "Human Resources" },
];

export const departments = ["Engineering", "Business", "Human Resources"] as const;

export async function getJobs() { return jobs; }
export async function getJobBySlug(slug: string) { return jobs.find((j) => j.slug === slug) ?? null; }

export const benefitGroups = [
  { title: "Your Financial Security", items: [
    ["Provident Fund", "Build long-term savings for a secure future."],
    ["Gratuity", "Your commitment and years of service, rewarded."],
    ["Two Festival Bonuses a Year", "Celebrate every festive season with extra support."],
    ["Mobile Allowance", "Stay connected for work, on us."],
  ]},
  { title: "Your Health & Family", items: [
    ["Health Insurance", "Because your wellbeing comes first."],
    ["Maternity & Paternity Leave", "Support for growing families."],
    ["Paid Leave", "Paid leave to rest and recharge."],
  ]},
  { title: "Your Growth & Recognition", items: [
    ["Career Growth", "Clear promotion paths and room to grow."],
    ["Employee Recognition", "Top performers are celebrated with awards."],
  ]},
  { title: "Your Work-Life Balance", items: [
    ["Flexible Hours", "Balance work and life your way."],
    ["Friendly Work Environment", "A supportive, respectful workplace where you can do your best work."],
    ["Team Events", "Celebrations and outings that bring us closer together."],
  ]},
] as const;

export const benefitChips = ["Health Insurance", "Paid Leave", "Employee Recognition", "Gratuity", "Mobile Allowance", "Provident Fund"];
