import AnimatedWords from "../animation";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="px-4 py-20 md:py-32 max-w-7xl mx-auto text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold text-gray-900 leading-tight">
        <AnimatedWords />
        <br />
        system that facilitates work
      </h1>

      <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
        Farmers, Restaurants, Cafes, Hotels — all in one system
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
        <button
          onClick={handleLoginClick}
          className="w-[280px] h-[60px] bg-[#46A358] hover:bg-[#4b8657] font-bold text-white text-lg sm:text-xl rounded-lg transition"
        >
          Log in to the system
        </button>

        <button
          onClick={() =>
            window.open("https://freshline-simulation.vercel.app/", "_blank")
          }
          className="w-[280px] h-[60px] flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-lg sm:text-xl rounded-lg transition"
        >
          Try Simulation
        </button>
      </div>
    </div>
  );
};

export default Hero;
