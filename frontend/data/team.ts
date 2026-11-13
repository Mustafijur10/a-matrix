export type Member = {
  name: string;
  role: string;
  dept: string;
  photo: string;
  linkedin?: string;
};

const m = (name: string, role: string, dept: string, slug: string, linkedin = "#"): Member => ({
  name, role, dept, linkedin, photo: `/images/team/${slug}.jpg`,
});

export const members: Member[] = [
  m("Md. Hamidur Rahman", "Senior Manager", "Sales", "hamidur-rahman"),
  m("Benoy Kumar Roy", "Senior Manager", "Sales", "benoy-kumar-roy"),
  m("Moriom Khatun Hira", "Assistant Manager", "Human Resources", "moriom-khatun-hira"),
  m("Md Minhazul Taher", "Manager", "Technology & Service Delivery", "minhazul-taher"),
  m("Rashedul Islam", "Product Manager", "Sales", "rashedul-islam"),
  m("Md Arshad Shamim", "Specialist, Partner & Vendor Management", "Sales", "arshad-shamim"),
  m("Md. Mahadi Hassan", "Software Engineer", "Technology & Service Delivery", "mahadi-hassan"),
  m("Shawon Mir", "Information Security Manager", "Technology & Service Delivery", "shawon-mir"),
  m("Affan Habib", "Senior Software Engineer", "Technology & Service Delivery", "affan-habib"),
  m("Md. Imon", "Assistant Manager", "Finance & Accounts", "md-imon"),
];

// Leadership Spotlight: the design shows the same first 8 people. Replace with the real leaders.
export const spotlight: Member[] = members.slice(0, 8);
