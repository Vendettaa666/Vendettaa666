import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 60; 
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
      setActive(false);
    }
  };

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "proyek" },
    { name: "Contact", id: "kontak" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled 
          ? "py-3 bg-zinc-950/80 backdrop-blur-lg border-b border-white/10 shadow-xl" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="group cursor-pointer" onClick={() => scrollToSection("hero")}>
          <h1 className="text-xl md:text-2xl font-black tracking-tighter text-white">
            PORTFOLIO<span className="text-violet-500 group-hover:animate-pulse">.</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="relative text-sm font-medium text-zinc-300 hover:text-white transition-colors group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
          ))}
          <li>
            <a
              href="#"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-bold hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all active:scale-95"
            >
              Download CV
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white focus:outline-none"
          onClick={() => setActive(!active)}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transition-all ${active ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all ${active ? "opacity-0" : ""}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all ${active ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-[60px] bg-zinc-950/95 backdrop-blur-xl md:hidden transition-all duration-500 ease-in-out ${
          active ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-8 text-white">
          {navLinks.map((link) => (
            <li key={link.id} className={`transform transition-all duration-500 ${active ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="text-2xl font-bold hover:text-violet-400"
              >
                {link.name}
              </button>
            </li>
          ))}
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