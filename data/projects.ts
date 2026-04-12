/* ─── data/projects.ts ───────────────────────────────── */

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  type: string;
  year: string;
  isOpenSource?: boolean;
  stack: string[];
  stats?: { value: string; label: string }[];
  /* case study sections — filled per project */
  context?: string;
  problem?: string;
  approach?: string;
  challenges?: { label: string; text: string }[];
  outcome?: string;
  reflection?: string;
};

export const projects: Project[] = [
  {
    slug: "breadboard-ui",
    name: "Breadboard UI",
    tagline:
      "A monorepo design system built to let multiple teams ship consistent UI without stepping on each other — or reinventing the same button twice.",
    type: "Design System",
    year: "2025 – present",
    isOpenSource: true,
    stack: ["React", "TypeScript", "Tailwind CSS", "Turborepo", "pnpm", "Storybook"],
    stats: [
      { value: "150+", label: "components" },
      { value: "3",    label: "teams using it" },
      { value: "15+",  label: "developers" },
      { value: "1",    label: "source of truth" },
    ],
    context:
      "Di Telkom, saya mulai mengamati sesuatu yang mengganjal: banyak produk digital dari satu perusahaan yang sama, tapi terasa seperti dibuat oleh tim yang berbeda-beda. Standar itu berhenti di layer desain, tidak pernah sampai ke layer kode.",
    problem:
      "Ketika bergabung di Hyperscal, platform harus dibangun cepat, beberapa tim harus bergerak paralel, dan konsistensi tidak boleh jadi korban kecepatan.",
    approach:
      "Saya tidak langsung mulai coding. Pertanyaan pertama adalah soal scope. Batasan bukan constraint — batasan adalah yang menjaga komponen tetap predictable.",
    challenges: [
      {
        label: "challenge 01",
        text: "Berpikir maju dan mundur sekaligus. Setiap perubahan harus dicek: breaking change untuk yang sudah pakai? Dan apakah membuka atau menutup pintu untuk kebutuhan yang akan datang?",
      },
      {
        label: "challenge 02",
        text: "Menjaga scope tiap komponen tetap jelas. Komponen yang mencoba melakukan terlalu banyak hal akhirnya tidak melakukan satupun dengan baik.",
      },
      {
        label: "challenge 03",
        text: "Adoption tanpa friction. Dokumentasi dan API yang intuitif bukan nice-to-have — mereka adalah bagian dari produknya itu sendiri.",
      },
    ],
    outcome:
      "Tim lain cukup fokus ke integrasi dan business logic. Konsistensi desain dan kode terjaga bukan karena aturan, tapi karena sistemnya memang didesain untuk itu.",
    reflection:
      "Saya akan lebih cepat mendokumentasikan keputusan di balik setiap komponen — bukan hanya cara pakainya. Documentation bukan afterthought. Dia adalah bagian dari desain.",
  },
  {
    slug: "coverage-area-selector",
    name: "CoverageAreaSelector",
    tagline:
      "Intent-based hierarchical checkbox tree with include/exclude logic and is_all support. Built for Jagasatwa.",
    type: "Component",
    year: "2025",
    stack: ["React", "HeroUI", "TypeScript"],
  },
  {
    slug: "word-clock",
    name: "Word Clock",
    tagline:
      "QLOCKTWO-inspired 16×13 word clock. Per-minute grid highlighting, built in a weekend.",
    type: "Side Project",
    year: "2025",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "jastip-catalog",
    name: "Jastip catalog",
    tagline:
      "Full-stack catalog for a fashion reseller — CMS, image uploads, and order management.",
    type: "Freelance",
    year: "2024",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Cloudinary"],
  },
];