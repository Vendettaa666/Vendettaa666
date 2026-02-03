import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fungsi untuk scroll ke section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbar = document.querySelector(".navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 64; // fallback 64px
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`navbar py-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-zinc-900/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="logo">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Portofolio
          </h1>
        </div>

        <ul
          className={`menu hidden md:flex flex-row items-center gap-6 text-white`}
        >
          <li>
            <a
              href="#hero"
              className="text-base font-medium hover:text-violet-400 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-base font-medium hover:text-violet-400 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-base font-medium hover:text-violet-400 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
              }}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#proyek"
              className="text-base font-medium hover:text-violet-400 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("proyek");
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#kontak"
              className="text-base font-medium hover:text-violet-400 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("kontak");
              }}
            >
              Contact me
            </a>
          </li>
          <a
              href="#"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-bold hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all active:scale-95"
            >
              Download CV
            </a>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setActive(!active)}
        >
          <i className={`ri-${active ? "close" : "menu"}-line ri-2x`}></i>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 bg-zinc-900/95 backdrop-blur-md transition-all duration-300 ${
          active
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center py-6 gap-4 text-white">
          <li>
            <a
              href="#hero"
              className="text-lg font-medium hover:text-violet-400 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
                setActive(false);
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-lg font-medium hover:text-violet-400 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
                setActive(false);
              }}
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-lg font-medium hover:text-violet-400 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
                setActive(false);
              }}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#proyek"
              className="text-lg font-medium hover:text-violet-400 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("proyek");
                setActive(false);
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#kontak"
              className="text-lg font-medium hover:text-violet-400 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("kontak");
                setActive(false);
              }}
            >
              Contact me
            </a>
          </li>
           <li className={`mt-4 transform transition-all duration-500 delay-300 ${active ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <a href="#" className="px-8 py-3 rounded-full bg-violet-600 font-bold text-lg">
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
