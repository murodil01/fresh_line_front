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
          Fresh Line platformasi
          <br />
          nima beradi
        </h2>
        <p className="text-gray-300 mb-12 text-sm sm:text-base md:text-lg">
          Logistikadagi asosiy og'riqlarga urg'uv berilgan
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
                  Yuklar bilan to'g'ridan-to'g'ri bog'laning.
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Haydovchilar joylashuvga yaqin va transport vositasiga mos
                  yuklarni real vaqtda topishlari mumkin. Ortiqcha qo'ng'iroqlar
                  va kutishlarsiz.
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
                  Kerakli yuk mashinasini tez toping.
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Yuk egalari o'z yuklari uchun eng mos va eng arzon
                  variantlarni bir necha daqiqada topishlari mumkin. Narx, shart
                  va vaqtni taqqoslang.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#0A1E2A] p-6 rounded-2xl shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                Xavfsiz va ishonchli foydalanuvchilar.
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Fresh Line dagi har bir foydalanuvchi va transport vositasi
                shaxsiy tekshiruvdan o'tadi. Siz faqat real va ishonchli
                mijozlar bilan ishlaysiz.
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
            Tizimga kirish
          </button>
          <button className="bg-gray-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition text-lg">
            <i className="fa-brands fa-apple text-xl"></i>
            <span>Platformani yuklash</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default System;
