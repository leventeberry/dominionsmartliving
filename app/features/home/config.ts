import type { HomeSection } from "./types";

export const homeSections: HomeSection[] = [
  {
    id: "hero",
    navLabel: "Home",
    title: "Smart home automation, professionally installed",
    bg: "bg-gradient-to-r from-indigo-200 to-pink-100",
    fg: "text-gray-900",
    text: "We design and install reliable lighting, climate, security, and entertainment systems tailored to your home—so everything just works.",
    ctaLabel: "Get a free consult",
    ctaHref: "#contact",
  },
  {
    id: "services",
    navLabel: "Services",
    title: "What we install",
    bg: "bg-gradient-to-r from-blue-100 to-green-100",
    fg: "text-gray-800",
    text: "Whole-home Wi‑Fi, smart lighting, motorized shades, smart locks, cameras, thermostats, voice assistants, home theaters, and unified control—planned for your space and lifestyle.",
  },
  {
    id: "why-us",
    navLabel: "Why us",
    title: "Built for homeowners who want results, not DIY headaches",
    bg: "bg-gradient-to-r from-yellow-100 to-orange-100",
    fg: "text-gray-700",
    text: "Clean wiring, documented setups, training for your family, and ongoing support. You get a finished system that feels intentional—never a pile of apps and gadgets.",
  },
  {
    id: "contact",
    navLabel: "Contact",
    title: "Ready to talk?",
    bg: "bg-gradient-to-r from-slate-200 to-indigo-100",
    fg: "text-gray-900",
    text: "Tell us about your home and what you want to automate. We’ll follow up with next steps and a ballpark scope.",
    ctaLabel: "Email us to get started",
    ctaHref: "mailto:hello@dominionsmartliving.com",
  },
];
