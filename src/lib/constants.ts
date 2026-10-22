// Site Configuration
export const SITE_CONFIG = {
  name: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Amina Bayoudh",
  title:
    process.env.NEXT_PUBLIC_AUTHOR_TITLE ||
    "Network Infrastructure and Data Security Engineering Student",
  description:
    "IT engineering student focused on secure systems, AI-driven security, and modern web experiences.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
};

// Navigation Items
export const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Education", href: "/education" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Skills", href: "/skills" },
  { name: "Certificates", href: "/certificates" },
  { name: "Contact", href: "/contact" },
];

export const LANGUAGES = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "B2" },
  { name: "French", level: "B2" },
];
