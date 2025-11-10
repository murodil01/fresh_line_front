import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.jpg";
import { Menu, X, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    navigate("/video");
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled
          ? "bg-white shadow-md border-b border-gray-100"
          : "bg-transparent"
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
          <button
            onClick={handleClick}
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-xl text-sm font-medium transition"
          >
            <Play className="w-4 h-4" />
            Watch video
          </button>

          <button
            aria-label="Konstitutsiya"
            onClick={() =>
              window.open("/files/file_presentation.pptx", "_blank")
            }
            className="bg-gradient-to-r from-[#46A358] to-[#3a6b45] hover:opacity-90 text-white font-semibold px-5 py-3 rounded-xl text-sm transition transform hover:scale-105"
          >
            Open presentation
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
            <button
              onClick={handleClick}
              className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-xl text-sm font-medium transition"
            >
              <Play className="w-4 h-4" />
              Watch video
            </button>

            <button
              aria-label="Konstitutsiya"
              onClick={() =>
                window.open("/files/file_presentation.pptx", "_blank")
              }
              className="bg-gradient-to-r from-[#46A358] to-[#3a6b45] hover:opacity-90 text-white font-semibold px-5 py-3 rounded-xl text-sm transition transform hover:scale-105"
            >
              Open presentation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
