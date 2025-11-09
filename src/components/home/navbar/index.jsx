import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.jpg";
import { Phone, Menu, X, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled ? "bg-white shadow-md border-b border-gray-100" : "bg-transparent"
      }`}
    >
      <div className="w-[90%] mx-auto flex items-center justify-between py-4">
        {/* LOGO */}
        <img
          src={logo}
          alt="Logo"
          className="w-28 md:w-36 cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">
          <button className="flex items-center gap-2 text-gray-700 hover:text-[#4b8657] font-medium transition">
            <Play className="w-4 h-4" />
            Videoni ko‘rish
          </button>

          <button
            aria-label="Konstitutsiya"
            onClick={() =>
              window.open(
                "/files/Toshkent_Axborot_Texnologiyalari_Universiteti_Talabalar_Ittifoqi.pdf",
                "_blank"
              )
            }
            className="cursor-pointer flex items-center justify-center gap-2 text-white font-medium rounded-xl bg-[#4b8657] hover:bg-[#3a6b45] px-6 py-2.5 transition transform hover:scale-105 shadow-md"
          >
            Fileni yuklash
          </button>

          <a
            href="tel:+998951563636"
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-xl text-sm font-medium transition"
          >
            <Phone className="w-4 h-4" />
            +998 95 156 36 36
          </a>

          <button
            onClick={handleLoginClick}
            className="bg-gradient-to-r from-[#46A358] to-[#3a6b45] hover:opacity-90 text-white font-semibold px-5 py-3 rounded-xl text-sm transition transform hover:scale-105"
          >
            Login to the system
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-[#4b8657] transition"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden flex flex-col gap-5 bg-white px-5 pb-6 border-t border-gray-100"
          >
            <button className="flex items-center gap-2 text-gray-700 hover:text-[#4b8657] font-medium transition">
              <Play className="w-4 h-4" />
              Videoni ko‘rish
            </button>

            <button
              aria-label="Konstitutsiya"
              onClick={() =>
                window.open(
                  "/files/Toshkent_Axborot_Texnologiyalari_Universiteti_Talabalar_Ittifoqi.pdf",
                  "_blank"
                )
              }
              className="cursor-pointer flex items-center justify-center text-white font-medium rounded-xl bg-[#4b8657] hover:bg-[#3a6b45] px-8 py-3 transition transform hover:scale-105 shadow-md"
            >
              Fileni yuklash
            </button>

            <a
              href="tel:+998951563636"
              className="flex items-center justify-center gap-2 font-semibold bg-gray-100 hover:bg-gray-200 text-gray-700 w-full px-4 py-3 rounded-xl text-sm transition"
            >
              <Phone className="w-4 h-4" />
              +998 95 156 36 36
            </a>

            <button
              onClick={handleLoginClick}
              className="w-full bg-gradient-to-r from-[#46A358] to-[#3a6b45] hover:opacity-90 text-white font-semibold px-6 py-3 rounded-xl text-sm transition transform hover:scale-105"
            >
              Login to the system
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
