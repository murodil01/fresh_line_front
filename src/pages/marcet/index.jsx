import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { Home } from "lucide-react";

const Marcet = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div>
        <h1 className="font-[500] text-gray-500 text-2xl">
          Market kataloglari
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 my-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="p-5 flex flex-col items-center gap-3 border border-white shadow-md rounded-xl bg-white"
            >
              <Home className="text-[#46A358]" size={32} />
              <h3 className="text-lg font-semibold text-gray-800">
                Bog' jihozlari
              </h3>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Marcet;
