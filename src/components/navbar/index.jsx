import { Sun, Bell, UserRoundPen, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => setOpen((prev) => !prev);
  const closeModal = () => setOpen(false);

  const handleLogout = () => {
    alert("Logged out");
    closeModal();
  };

  return (
    <div className="relative">
      <div className="flex items-center text-[#46A358] justify-end gap-5 pb-2 border-b border-[#46A358] mb-3 px-2">
        <Sun className="cursor-pointer" />
        <Bell className="cursor-pointer" />
        <UserRoundPen className="cursor-pointer" onClick={toggleModal} />
      </div>

      {open && (
        <div className="absolute right-2 top-14 bg-white border border-gray-200 rounded-lg shadow-md w-64 p-4 z-50">
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
            <span className="font-medium text-gray-600">Surname:</span> Karimov
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
    </div>
  );
};

export default Navbar;

