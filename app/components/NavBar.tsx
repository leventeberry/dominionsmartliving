"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import type { HomeSection } from "@/features/home/types";
import { getActiveSection } from "@/lib/getActiveSection";
import { PhoneIcon } from "lucide-react";

import { Logo } from "./Logo";

type NavBarProps = {
  sections: HomeSection[];
};

export function NavBar({ sections }: NavBarProps) {
  const [activeSection, setActiveSection] = useState(
    () => sections[0]?.id ?? "",
  );

  useEffect(() => {
    if (sections.length === 0) return;

    const onScroll = () => {
      setActiveSection(getActiveSection(sections));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  if (sections.length === 0) {
    return null;
  }

  const activeBg = sections.find((s) => s.id === activeSection)?.bg;

  return (

    <nav
      className={`fixed top-0 left-0 z-10 w-full px-8 py-8 shadow flex items-center justify-between ${activeBg} transition-colors duration-300`}
    >
      <div className="flex items-center gap-2">
        <Logo height={40} width={40} className="w-10 h-10" alt="Logo" src="/logo.png" />
        <span className="text-2xl font-bold text-gray-900">Dominion Smart Living</span>
      </div>
      
      <ul className="flex flex-wrap items-center justify-center gap-6">
        {sections.map((section) => {
          const label = section.navLabel ?? section.title;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`rounded px-4 py-2 font-semibold transition ${
                  activeSection === section.id
                    ? "bg-white bg-opacity-40 underline"
                    : "hover:bg-white hover:bg-opacity-10"
                }`}
                aria-current={activeSection === section.id ? "page" : undefined}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center gap-4">
        <a href="tel:+1234567890" className="text-gray-900 hover:text-gray-700 flex items-center gap-2"><PhoneIcon className="w-4 h-4" /> <span>+1 (234) 567-8900</span></a>
        <Button variant="default" size="lg" type="button" className="hover:bg-gray-800">Get a Quote</Button>
      </div>
    </nav>
  );
}
