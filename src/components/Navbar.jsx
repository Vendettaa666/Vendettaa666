import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Daftar Menu (Mudah diedit)
  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "proyek", label: "Projects" },
    { id: "kontak", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Handle Navbar Background
      setIsScrolled(window.scrollY > 50);

      // 2. Handle Active Section (Scroll Spy)
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100; // Offset sedikit ke bawah

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi Scroll yang lebih mulus
  const handleClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false); // Tutup menu mobile saat diklik
    
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Sesuaikan dengan tinggi navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-900/80 backdrop-blur-lg shadow-lg border-b border-white/10"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center h-16 md:h-20">
        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer" onClick={(e) => handleClick(e, 'hero')}>
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            Portofolio
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleClick(e, link.id)}
                className={`relative text-sm font-medium transition-colors duration-300 hover:text-violet-400 ${
                  activeSection === link.id ? "text-violet-400" : "text-gray-300"
                }`}
              >
                {link.label}
                {/* Garis bawah animasi saat aktif */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-violet-400 transition-all duration-300 ${
                    activeSection === link.id ? "w-full" : "w-0"
                  }`}
                ></span>
              </a>
            </li>
          ))}
          
          {/* CTA Button Desktop */}
          <li>
            <a
              href="#"
              className="px-6 py-2.5 rounded-full bg-violet-600 hover:bg-violet-700 text-white text-sm font-bold transition-all hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] active:scale-95"
            >
              Download CV
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Button (Custom SVG Animation) */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-zinc-900/95 backdrop-blur-xl border-b border-white/10 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.id} className="w-full text-center">
              <a
                href={`#${link.id}`}
                onClick={(e) => handleClick(e, link.id)}
                className={`block py-2 text-lg font-medium transition-colors ${
                  activeSection === link.id ? "text-violet-400" : "text-gray-300"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="#"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold shadow-lg"
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;