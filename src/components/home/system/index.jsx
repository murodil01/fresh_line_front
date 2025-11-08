import system1 from "../../../assets/system1.png";
import system2 from "../../../assets/system2.png";
import system4 from "../../../assets/system4.png";
import { useNavigate } from "react-router-dom";

const System = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <section className="bg-[#001722] py-16 text-white mt-10">
      <div className="w-[90%] mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
          Fresh Line platform
          <br />
          what it offers
        </h2>
        <p className="text-gray-300 mb-12 text-sm sm:text-base md:text-lg">
          The main pain points in logistics have been highlighted
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="w-full flex flex-col gap-6 md:col-span-2">
            <div className="bg-[#0A1E2A] p-6 rounded-2xl flex flex-col sm:flex-row items-center gap-6 shadow-lg">
              <div className="w-full sm:w-1/3 flex items-center justify-center">
                <img
                  src={system1}
                  alt="icon"
                  className="h-[200px] sm:h-[90px] md:h-[150px] w-auto object-contain"
                />
              </div>
              <div className="w-full sm:w-2/3 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                  Contact directly regarding the cargo.
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Drivers can find loads close to their location and suitable
                  for their vehicle in real time. Without excessive calls and
                  waiting.
                </p>
              </div>
            </div>

            <div className="bg-[#0A1E2A] p-6 rounded-2xl flex flex-col sm:flex-row items-center gap-6 shadow-lg">
              <div className="w-full h-35 sm:w-1/3 flex items-center justify-center">
                <img
                  src={system2}
                  alt="icon"
                  className="h-[90px] sm:h-[90px] md:h-[80px] w-auto object-contain"
                />
              </div>
              <div className="w-full sm:w-2/3 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                  Find the required truck quickly.
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Cargo owners can find the most suitable and cheapest options
                  for their shipments in just a few minutes. Compare prices,
                  conditions, and time.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#0A1E2A] p-6 rounded-2xl shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                Safe and reliable users.
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Every user and vehicle at Fresh Line undergoes a personal
                inspection. You only work with real and reliable clients.
              </p>
              <img
                src={system4}
                alt="icon"
                className="w-full max-w-[100px] mx-auto mt-8"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <button
            onClick={handleLoginClick}
            className="bg-[#46A358] text-white px-[52.5px] py-3 rounded-lg hover:bg-[#3d8b4d] transition text-lg"
          >
            Log in to the system
          </button>
          <button className="bg-gray-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition text-lg">
            <i className="fa-brands fa-apple text-xl"></i>
            <span>Load the platform</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default System;
