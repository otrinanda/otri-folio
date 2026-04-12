import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { GridBackground } from "@/components/ui/GridBackground";
import { CornerMark } from "@/components/ui/CornerMark";
import { Tag } from "@/components/ui/Tag";
import { Footer } from "@/components/layout/Footer";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — otri.dev`,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject  = projects[currentIndex + 1] ?? null;

  return (
    <main>
      {/* ── HERO ZONE ── */}
      <div
        className="relative overflow-hidden"
        style={{ background: "var(--mat)" }}
      >
        <GridBackground />
        <div
          className="absolute bottom-0 left-0 right-0 z-[2] pointer-events-none"
          style={{
            height: "140px",
            background: "linear-gradient(to bottom, transparent, var(--body-bg))",
          }}
        />

        <div className="relative z-[3] max-w-[1040px] mx-auto px-8">
          {/* Nav */}
          <nav
            className="flex justify-between items-center py-5 border-b"
            style={{ borderColor: "var(--border)" }}
          >
            <Link
              href="/"
              className="font-mono text-[13px] tracking-[0.05em]"
              style={{ color: "var(--text)" }}
            >
              otri<span style={{ color: "var(--text-muted)" }}>.dev</span>
            </Link>
            <Link
              href="/#projects"
              className="font-mono text-[12px] transition-colors duration-200"
              style={{ color: "var(--text-muted)" }}
            //   onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
            //   onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              ← back to projects
            </Link>
          </nav>

          {/* Hero content */}
          <div className="pt-[52px] pb-[100px]">
            {/* Meta row */}
            <div className="flex items-center gap-2.5 mb-5">
              <span className="font-mono text-[10px] tracking-[0.1em] uppercase" style={{ color: "var(--text-dim)" }}>
                {project.type}
              </span>
              <span className="w-px h-3" style={{ background: "var(--border-strong)" }} />
              <span className="font-mono text-[10px] tracking-[0.1em] uppercase" style={{ color: "var(--text-dim)" }}>
                {project.year}
              </span>
              {project.isOpenSource && (
                <>
                  <span className="w-px h-3" style={{ background: "var(--border-strong)" }} />
                  <Tag variant="os">open source</Tag>
                </>
              )}
            </div>

            <h1
              className="text-[40px] font-medium leading-[1.1] tracking-[-0.02em] mb-4"
              style={{ color: "var(--text)" }}
            >
              {project.name}
            </h1>
            <p
              className="text-[15px] leading-[1.7] max-w-[560px] mb-9"
              style={{ color: "var(--text-muted)" }}
            >
              {project.tagline}
            </p>

            {/* Stack */}
            <div className="flex flex-wrap gap-2 mb-9">
              {project.stack.map((t) => (
                <Tag key={t} variant="default">{t}</Tag>
              ))}
            </div>

            {/* Stats */}
            {project.stats && (
              <div className="flex gap-8 pt-7 border-t" style={{ borderColor: "var(--border)" }}>
                {project.stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-[20px] font-medium mb-0.5" style={{ color: "var(--text)" }}>
                      {s.value}
                    </div>
                    <div className="font-mono text-[11px]" style={{ color: "var(--text-dim)" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── ANNOTATED DOCUMENT ── */}
      <div style={{ background: "var(--body-bg)" }}>
        <div className="max-w-[1040px] mx-auto px-8 py-[60px]">

          {project.context && (
            <DocSection num="01" label="context" annotation={["Problem identified through observation, not a brief or ticket.", "Brand guidelines ≠ design system. The gap lives in the code layer."]}>
              <Prose text={project.context} />
            </DocSection>
          )}

          {project.problem && (
            <DocSection num="02" label="the problem" annotation={["Speed vs consistency is a false trade-off — if you invest early."]}>
              <Prose text={project.problem} />
              <PullQuote text="The enemy of consistency isn't bad taste. It's parallel work without a shared foundation." />
            </DocSection>
          )}

          {project.approach && (
            <DocSection num="03" label="approach" annotation={["Tokens → primitives → composite. Sequence matters.", "Two consumers per component: the user and the future maintainer."]}>
              <Prose text={project.approach} />
            </DocSection>
          )}

          {project.challenges && project.challenges.length > 0 && (
            <DocSection num="04" label="the hard part" annotation={["A design system is a living product, not a deliverable.", "DX = Developer Experience. If it's hard to use, it won't be used."]}>
              <Prose text="Yang tidak banyak orang ceritakan tentang design system: komponen tidak selesai saat pertama kali dibuat. Dia hidup, dan dia berubah seiring kebutuhan nyata muncul dari tim yang memakainya." />
              <div className="flex flex-col gap-5 mt-4">
                {project.challenges.map((c) => (
                  <div key={c.label}>
                    <div
                      className="font-mono text-[10px] tracking-[0.08em] uppercase mb-1.5 flex items-center gap-2"
                      style={{ color: "var(--text-dim)" }}
                    >
                      {c.label}
                      <span className="h-px w-10 inline-block" style={{ background: "var(--border)" }} />
                    </div>
                    <p className="text-[14px] leading-[1.75]" style={{ color: "var(--text-muted)" }}
                      dangerouslySetInnerHTML={{ __html: c.text }}
                    />
                  </div>
                ))}
              </div>
            </DocSection>
          )}

          {project.outcome && (
            <DocSection num="05" label="outcome" annotation={["Consistency as infrastructure, not as a checklist."]}>
              <Prose text={project.outcome} />
              {project.stats && (
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {project.stats.map((s) => (
                    <div
                      key={s.label}
                      className="relative border rounded-[3px] px-4 py-3.5"
                      style={{ borderColor: "var(--border)", background: "var(--card-bg)" }}
                    >
                      <div className="text-[22px] font-medium mb-0.5" style={{ color: "var(--text)" }}>
                        {s.value}
                      </div>
                      <div className="font-mono text-[11px]" style={{ color: "var(--text-dim)" }}>
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </DocSection>
          )}

          {project.reflection && (
            <DocSection num="06" label="if I could do it again" annotation={["Document the why, not just the how."]}>
              <Prose text={project.reflection} />
            </DocSection>
          )}

          {/* Next project */}
          {nextProject && (
            <div
              className="flex justify-between items-center pt-9 mt-4 border-t"
              style={{ borderColor: "var(--border)" }}
            >
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.08em] mb-1.5" style={{ color: "var(--text-dim)" }}>
                  next project
                </div>
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="text-[16px] font-medium transition-colors duration-200"
                  style={{ color: "var(--text)" }}
                >
                  {nextProject.name} →
                </Link>
              </div>
            </div>
          )}

        </div>
      </div>

      <Footer />
    </main>
  );
}

/* ── Sub-components ── */

function DocSection({
  num,
  label,
  annotation,
  children,
}: {
  num: string;
  label: string;
  annotation: string[];
  children: React.ReactNode;
}) {
  return (
    <div
      className="grid gap-x-9 py-10 first:pt-0 border-t first:border-t-0"
      style={{
        gridTemplateColumns: "160px 1fr 200px",
        borderColor: "var(--border)",
      }}
    >
      {/* Left — sticky label */}
      <div className="sticky top-6 self-start pt-1">
        <span
          className="block font-mono text-[11px] mb-1"
          style={{ color: "var(--text-muted)" }}
        >
          {num} —
        </span>
        <span
          className="font-mono text-[10px] tracking-[0.1em] uppercase"
          style={{ color: "var(--text-dim)" }}
        >
          {label}
        </span>
      </div>

      {/* Center — narrative */}
      <div>{children}</div>

      {/* Right — annotations */}
      <div className="pt-1 flex flex-col gap-2.5">
        {annotation.map((a) => (
          <div
            key={a}
            className="rounded-[3px] border px-3.5 py-3"
            style={{ borderColor: "var(--border)", background: "var(--card-bg)" }}
          >
            <span
              className="block font-mono text-[10px] mb-1.5"
              style={{ color: "var(--text-dim)" }}
            >
              //
            </span>
            <p
              className="font-mono text-[11px] leading-[1.65]"
              style={{ color: "var(--text-muted)" }}
            >
              {a}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Prose({ text }: { text: string }) {
  return (
    <p
      className="text-[15px] leading-[1.85] mb-4 last:mb-0"
      style={{ color: "var(--text-muted)" }}
    >
      {text}
    </p>
  );
}

function PullQuote({ text }: { text: string }) {
  return (
    <blockquote
      className="pl-5 py-1 my-6 border-l-2 italic"
      style={{ borderColor: "var(--border-strong)" }}
    >
      <p className="text-[16px] leading-[1.65]" style={{ color: "var(--text)" }}>
        &quot;{text}&quot;
      </p>
    </blockquote>
  );
}