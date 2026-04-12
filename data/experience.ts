/* ─── data/experience.ts ─────────────────────────────── */

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  narrative: string[];   /* paragraphs */
  highlights: string[];  /* bullet points */
  stack: string[];
};

export const experiences: Experience[] = [
  {
    company: "Hyperscal Indonesia",
    role: "Middle Frontend Developer · FE Utils Lead",
    period: "Jul 2025 – present",
    location: "Jakarta, ID",
    isCurrent: true,
    narrative: [
      "Saya di-hire karena background design system saya — dan itulah yang saya kerjakan dari hari pertama. Hyperscal sedang membangun platform business service support untuk industri telco, dengan beberapa tim yang harus bergerak paralel dalam waktu yang ketat.",
      "Tugas saya: bangun fondasi komponen yang cukup kuat untuk dipakai banyak tim, cukup fleksibel untuk berkembang, dan cukup mudah untuk tidak membutuhkan onboarding yang panjang. Hasilnya adalah Breadboard UI — monorepo design system yang sekarang jadi satu-satunya source of truth UI untuk seluruh platform.",
    ],
    highlights: [
      "Built 150+ components across atoms, molecules, and organisms — adopted by 3 teams from day one",
      "Defined component API standards and design token architecture across the entire platform",
      "Set up monorepo tooling: Turborepo, pnpm workspaces, Storybook — zero duplication across packages",
      "Reduced UI-related blockers between teams by giving everyone a shared, documented foundation",
    ],
    stack: ["React", "TypeScript", "Tailwind", "Turborepo", "Storybook", "pnpm", "Atomic Design", "Design Tokens"],
  },
  {
    company: "Telkom Indonesia",
    role: "Frontend Developer · Agree, Digitalpass teams",
    period: "2021 – 2025",
    location: "Jakarta, ID",
    narrative: [
      "Tiga tahun lebih bekerja di ekosistem digital Telkom adalah tempat saya belajar apa artinya bekerja di skala enterprise — codebase yang besar, banyak stakeholder, dan banyak tim yang mengerjakan produk berbeda di bawah satu atap perusahaan.",
      "Di sini saya pertama kali mengamati sebuah masalah yang akan terus mengikuti saya: produk-produk Telkom punya brand identity masing-masing, tapi tidak ada benang merah di layer kode yang membuat semuanya terasa seperti satu ekosistem.",
    ],
    highlights: [
      "Delivered features across Agree (agribusiness platform), Digitalpass (digital identity), and Big Data team",
      "Worked in large-scale React codebases with multiple teams contributing simultaneously",
      "Initiated component reusability efforts on the Agree team — first step toward systematic thinking",
      "Observed firsthand how inconsistent UI systems create friction — for users and developers alike",
    ],
    stack: ["React", "JavaScript", "TypeScript", "Next.js", "REST API", "Git"],
  },
];