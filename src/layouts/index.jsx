import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/SideBar.jsx";
import { Menu } from "lucide-react";

const MainLayout = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <div
        className={`md:hidden fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        } text-black flex items-center justify-between p-4`}
      >
        <button onClick={toggleSidebar}>
          <Menu className="w-6 h-6 text-[#46A358]" />
        </button>
      </div>

      <div className="md:w-64">
        <Sidebar
          onLogout={handleLogout}
          isMobileOpen={isSidebarOpen}
          setIsMobileOpen={setIsSidebarOpen}
        />
      </div>

      <main className="flex-1 p-6 pt-20 md:pt-6">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;




