import { motion } from "motion/react";

interface MenubarProps {
  currentLang: "en" | "hi";
  activeSection: string;
  theme: "dark" | "light";
}

export const Menubar: React.FC<MenubarProps> = ({
  currentLang,
  activeSection,
  theme,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const navLinks = [
    { id: "overview", label: currentLang === "en" ? "Overview" : "परिचय" },
    { id: "map", label: currentLang === "en" ? "Live Map" : "ग्राम मानचित्र" },
    { id: "heritage", label: currentLang === "en" ? "Centennial" : "100 वर्ष" },
    {
      id: "agriculture",
      label: currentLang === "en" ? "Kinnow & Fields" : "कृषि व बागान",
    },
    { id: "culture", label: currentLang === "en" ? "Culture" : "संस्कृति" },
    {
      id: "directory",
      label: currentLang === "en" ? "Directory" : "नागरिक सेवाएँ",
    },
    { id: "gallery", label: currentLang === "en" ? "Gallery" : "चित्र वीथिका" },
    { id: "faq", label: currentLang === "en" ? "FAQ" : "प्रश्न" },
    {
      id: "social",
      label: currentLang === "en" ? "Social Network" : "सोशल नेटवर्क",
    },
    {
      id: "visitor",
      label: currentLang === "en" ? "Visit & Roots" : "यात्रा व संवाद",
    },
  ];

  return (
    <>
      {/* Desktop Navigation Links with animated active pill */}
      <nav
        className={`hidden xl:flex items-center justify-center gap-1 p-1 rounded-xl border backdrop-blur-md ${
          theme === "dark"
            ? "bg-white/5 border-white/10"
            : "bg-slate-100/90 border-slate-200 shadow-xs"
        }`}
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all rounded-lg cursor-pointer ${
                isActive
                  ? "text-white"
                  : theme === "dark"
                    ? "text-slate-300 hover:text-white"
                    : "text-slate-700 hover:text-slate-950"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeNavPill"
                  className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
};
