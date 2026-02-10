import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "./LanguageSwitch";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const { t } = useTranslation();

  const navLinks = [
    { id: "hero", label: t("nav.home") },
    { id: "about", label: t("nav.about") },
    { id: "skills", label: t("nav.skills") },
    { id: "proyek", label: t("nav.projects") },
    { id: "kontak", label: t("nav.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollPosition = window.scrollY + 100;

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]); // Dipantau agar update saat bahasa ganti

  // Fungsi klik menu (Smooth Scroll)
  const handleClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Sesuaikan tinggi navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-zinc-900/90 backdrop-blur-md border-b border-white/10 shadow-lg"
        : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center h-16 md:h-20">
        <div
          className="flex-shrink-0 cursor-pointer z-50"
          onClick={(e) => handleClick(e, "hero")}
        >
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            Portofolio
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleClick(e, link.id)}
                  className={`relative text-sm font-medium transition-colors duration-300 hover:text-violet-400 ${activeSection === link.id
                    ? "text-violet-400"
                    : "text-gray-300"
                    }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-violet-400 transition-all duration-300 ${activeSection === link.id ? "w-full" : "w-0"
                      }`}
                  ></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="h-6 w-px bg-white/10 mx-2"></div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="px-5 py-2.5 rounded-full bg-violet-600 hover:bg-violet-700 text-white text-sm font-bold transition-all hover:shadow-[0_0_15px_rgba(124,58,237,0.4)] active:scale-95"
            >
              {t("nav.cv")}
            </a><LanguageSwitch />

          </div>
        </div>

        <button
          className="md:hidden text-gray-300 focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-zinc-900/95 backdrop-blur-xl border-b border-white/10 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-screen opacity-100 py-8" : "max-h-0 opacity-0 py-0"
          }`}
      >
        <ul className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.id} className="w-full text-center">
              <a
                href={`#${link.id}`}
                onClick={(e) => handleClick(e, link.id)}
                className={`block py-2 text-lg font-medium transition-colors ${activeSection === link.id
                  ? "text-violet-400"
                  : "text-gray-300"
                  }`}
              >
                {link.label}
              </a>
            </li>
          ))}

          <div className="flex flex-col items-center gap-4 mt-6 w-full">
            <div className="scale-110">
              <LanguageSwitch />
            </div>
            <a
              href="#"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold shadow-lg w-3/4 text-center"
            >
              {t("nav.cv")}
            </a>

          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;