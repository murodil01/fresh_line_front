import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.jpg";
import { Phone, Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleLoginClick = () => {
    navigate("/login");
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md border-b border-gray-200" : ""
      }`}
    >
      <div className="w-[90%] mx-auto flex items-center justify-between py-4">
        <img src={logo} alt="Logo" className="w-32 md:w-40 ml-[-10px]" />

        <div className="hidden md:flex items-center gap-6">
          <a
            href="tel:+998951563636"
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm transition"
          >
            <Phone className="w-4 h-4" />
            +998 95 156 36 36
          </a>
          <button
            onClick={handleLoginClick}
            className="bg-[#46A358] hover:bg-[#4b8657] text-white px-4 py-2 rounded-lg text-sm transition"
          >
            Tizimga kirish
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-gray-600"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <a
            href="tel:+998951563636"
            className="flex items-center border-none gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 w-full px-4 py-2 rounded-xl text-sm mb-2"
          >
            <Phone className="w-4 h-4" />
            +998 95 156 36 36
          </a>
          <button
            onClick={handleLoginClick}
            className="w-full bg-[#46A358] hover:bg-[#4b8657] text-white px-4 py-2 rounded-lg text-sm"
          >
            Tizimga kirish
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
