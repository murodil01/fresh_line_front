import { User, Phone } from "lucide-react";

const Users = () => {
  return (
    <div className="shadow px-4 py-5 flex flex-col gap-2 w-full sm:w-[330px] rounded-lg text-gray-500 bg-white">
      <h3 className="text-[17px] font-semibold">Data</h3>
      <p className="flex items-center gap-2 text-[15px]">
        <User className="text-[15px]" /> Name - 
      </p>
      <p className="flex items-center gap-2 text-[15px]">
        <User className="text-[15px]" /> Surname - 
      </p>
      <h3 className="text-[17px] mt-4 font-semibold">Aloqa</h3>
      <p className="flex items-center gap-2 text-[15px]">
        <Phone className="text-[15px]" /> Phone - 
      </p>
    </div>
  );
};

export default Users;
