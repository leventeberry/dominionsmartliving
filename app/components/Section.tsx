import type { HomeSection } from "@/features/home/types";

export type SectionProps = Pick<
  HomeSection,
  "id" | "title" | "bg" | "fg" | "text" | "ctaLabel" | "ctaHref"
> & {
  scrollMarginTop?: number;
};

export function Section({
  id,
  title,
  bg,
  fg,
  text,
  ctaLabel,
  ctaHref,
  scrollMarginTop = 96,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${bg} ${fg} min-h-screen flex flex-col items-center justify-center gap-6 px-6 py-16 transition-colors duration-300`}
      style={{ scrollMarginTop }}
    >
      <h2 className="text-4xl font-bold text-center">{title}</h2>
      <p className="text-lg max-w-lg text-center">{text}</p>
      {ctaLabel && ctaHref ? (
        <a
          href={ctaHref}
          className="inline-flex items-center rounded-lg bg-gray-900 px-6 py-3 text-base font-semibold text-white shadow hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          {ctaLabel}
        </a>
      ) : null}
    </section>
  );
}
