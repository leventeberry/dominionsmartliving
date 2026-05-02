import { NavBar } from "@/components/NavBar";
import { Section } from "@/components/Section";
import { homeSections } from "@/features/home/config";

export default function HomePage() {
  return (
    <div>
      <NavBar sections={homeSections} />
      <main className="pt-24">
        {homeSections.map((section) => (
          <Section
            key={section.id}
            id={section.id}
            title={section.title}
            bg={section.bg}
            fg={section.fg}
            text={section.text}
            ctaLabel={section.ctaLabel}
            ctaHref={section.ctaHref}
          />
        ))}
      </main>
    </div>
  );
}
