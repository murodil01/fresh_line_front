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

        <button className="w-[280px] h-[60px] flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-lg sm:text-xl rounded-lg transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M15.7 4.17c.94-1.17 1.4-2.67 1.29-4.17-1.42.16-2.73.87-3.67 2.01-.46.55-.81 1.2-1.03 1.89-.22.7-.32 1.42-.28 2.14.71.01 1.41-.17 2.06-.52.65-.35 1.23-.84 1.63-1.35zM18.7 12.89c.01-.91.26-1.8.73-2.59.47-.79 1.13-1.46 1.91-1.93-.51-.71-1.2-1.31-2.01-1.71-.82-.4-1.7-.63-2.59-.66-1.89-.19-3.73 1.1-4.69 1.1-.99 0-2.47-.96-4.06-.94-.99.03-1.97.29-2.86.78-.89.49-1.64 1.18-2.2 2.03-2.18 3.65-.51 9.02 1.59 11.97 1.05 1.45 2.3 3.06 3.91 3 1.56-.06 2.15-1.01 4.03-1.01 1.88 0 2.43.97 4.06.96 1.68-.03 2.74-1.44 3.75-2.91.76-1.04 1.35-2.17 1.74-3.35-.98-.39-1.8-1.04-2.37-1.91-.57-.87-.87-1.86-.87-2.87z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M2.5 1C2.18 1.4 2 1.89 2 2.41v19.18c0 .52.18 1.1.5 1.41L14 12 2.5 1zM5.78.38C5.24.02 4.6-.08 4 .06L14.57 11 18 7.46 5.78.38zM14.57 13L4 23.94c.17.04.35.06.53.06.44 0 .88-.13 1.26-.38L18 16.54 14.57 13zM22.82 9.85L19.74 8 16 12l3.74 4 3.08-1.85C23.56 13.71 24 12.91 24 12s-.44-1.71-1.18-2.15z" />
          </svg>
          Download the app
        </button>
      </div>
    </div>
  );
};

export default Hero;
