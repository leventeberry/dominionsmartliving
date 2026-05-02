export type HomeSection = {
  id: string;
  title: string;
  /** Shorter label for the sticky nav; defaults to `title`. */
  navLabel?: string;
  bg: string;
  fg: string;
  text: string;
  /** Optional primary CTA for conversion-focused sections. */
  ctaLabel?: string;
  ctaHref?: string;
};
