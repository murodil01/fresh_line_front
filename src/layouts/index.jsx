import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/SideBar.jsx";
import { Menu, Sun, Bell, UserRoundPen, X } from "lucide-react";
import toast from "react-hot-toast";

const MainLayout = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleModal = () => setModalOpen((prev) => !prev);
  const closeModal = () => setModalOpen(false);

  const handleLogout = () => {
    toast((t) => (
      <div className="p-4">
        <p className="text-sm font-semibold mb-2">Do you want to log out?</p>
        <div className="flex justify-center gap-2">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
          >
            No
          </button>
          <button
            onClick={() => {
              toast.dismiss(t.id);
              toast.success("You have logged out ✅", { duration: 1000 });
              closeModal();
              setTimeout(() => {
                localStorage.removeItem("token");
                navigate("/login");
              }, 1000);
            }}
            className="px-3 py-1 bg-[#46A358] text-white rounded hover:bg-[#3d8b4d] text-sm"
          >
            Yes
          </button>
        </div>
      </div>
    ));
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <div
        className={`md:hidden fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        } text-black flex items-center justify-between py-4 px-6`}
      >
        <button onClick={toggleSidebar}>
          <Menu className="w-6 h-6 text-[#46A358]" />
        </button>
        <div className="flex items-center gap-4 text-[#46A358]">
          <Sun className="cursor-pointer" />
          <Bell className="cursor-pointer" />
          <UserRoundPen className="cursor-pointer" onClick={toggleModal} />
        </div>
      </div>

      <div className="md:w-64 pt-16 md:pt-0">
        <Sidebar
          onLogout={handleLogout}
          isMobileOpen={isSidebarOpen}
          setIsMobileOpen={setIsSidebarOpen}
        />
      </div>

      <div className="flex-1">
        <div className="hidden md:block border-b border-[#46A358]">
          <div className="max-w-[1200px] mx-auto flex justify-end gap-4 text-[#46A358] px-[5px] pt-4 pb-4">
            <Sun className="cursor-pointer" />
            <Bell className="cursor-pointer" />
            <UserRoundPen className="cursor-pointer" onClick={toggleModal} />
          </div>
        </div>

        {modalOpen && (
          <div className="absolute right-4 top-20 md:top-16 bg-white border border-gray-200 rounded-lg shadow-md w-64 p-4 z-50">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-[#46A358]">
                User
              </h3>
              <X
                className="w-5 h-5 text-gray-500 cursor-pointer hover:text-red-500"
                onClick={closeModal}
              />
            </div>
            <p>
              <span className="font-medium text-gray-600">Name:</span> Ali
            </p>
            <p>
              <span className="font-medium text-gray-600">Surname:</span>{" "}
              Karimov
            </p>
            <p>
              <span className="font-medium text-gray-600">Role:</span> Admin
            </p>
            <button
              onClick={handleLogout}
              className="mt-4 w-full bg-[#46A358] text-white py-2 rounded-lg hover:bg-[#3d8b4d] transition"
            >
              Logout
            </button>
          </div>
        )}

        <main className="p-6 pt-[10px] md:pt-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
