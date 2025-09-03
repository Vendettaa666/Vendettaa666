import { useState, useEffect } from "react";
const Navbar = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      }
      else {
        setActive(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="navbar py-7 flex justify-between items-center">
      <div className="logo">
        <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">Portofolio</h1>
      </div>
      <ul className={`menu flex flex-row items-center gap-4 sm:gap-6 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all duration-300 whitespace-nowrap ${active ? "top-0 opacity-100 z-50" : "-top-20 opacity-0"
        }`}>
        <li>
          <a href="" className="sm:text-lg text-base font-medium">
            Home
          </a>
        </li>
        <li>
          <a href="" className="sm:text-lg text-base font-medium">
            About me
          </a>
        </li>
        <li>
          <a href="" className="sm:text-lg text-base font-medium">
            Skills
          </a>
        </li>
        <li>
          <a href="" className="sm:text-lg text-base font-medium">
            Contact me
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar