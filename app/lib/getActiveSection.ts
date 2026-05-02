export function getActiveSection<T extends { id: string }>(
  sections: readonly T[],
): string {
  for (const section of sections) {
    const element = document.getElementById(section.id);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= 80 && rect.bottom > 80) {
        return section.id;
      }
    }
  }
  return sections[0]?.id ?? "";
}
