import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../../components/home/navbar";
import Footer from "../../components/home/footer";

const Error = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Navbar />

      <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl font-bold text-[#46A358] mb-4">404</h1>
        <p className="text-xl md:text-2xl font-medium mb-6">
          Sahifa topilmadi yoki mavjud emas
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#46A358] text-white hover:bg-[#51965f] font-semibold py-2 px-6 rounded-xl transition-all duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          Bosh sahifaga qaytish
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Error;
