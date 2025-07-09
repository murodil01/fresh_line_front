import { Sun, Bell, UserRoundPen } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-end gap-5 pb-2 border-b-1 border-[#46A358] mb-3">
      <Sun />
      <Bell />
      <UserRoundPen />
    </div>
  );
};

export default Navbar;
