import system1 from "../../../assets/system1.png";
import system2 from "../../../assets/system2.png";
import system3 from "../../../assets/system3.svg";
import system4 from "../../../assets/system4.png";
import system5 from "../../../assets/system5.svg";
import system6 from "../../../assets/system6.svg";

const System = () => {
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
          <div className="flex flex-col gap-6 md:col-span-2">
            <div className="bg-[#0A1E2A] p-6 rounded-2xl flex flex-col sm:flex-row items-center gap-6 shadow-lg">
              <div className="w-full sm:w-1/3 flex items-center justify-center relative">
                <img
                  src={system6}
                  alt="icon"
                  className="absolute w-16 sm:w-20 opacity-30 z-10000"
                />
                <img
                  src={system1}
                  alt="yuk"
                  className="w-[70%] relative z-10 object-contain"
                />
              </div>
              <div className="w-full sm:w-2/3 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                  Oson yuklar topa olish imkoniyati
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Haydovchilar o'z joylashuvlariga va transport vositasining
                  turiga mos keladigan mavjud buyurtmalarni oson topishlari
                  mumkin.
                </p>
              </div>
            </div>

            <div className="bg-[#0A1E2A] p-6 rounded-2xl flex flex-col sm:flex-row items-center gap-6 shadow-lg">
              <div className="w-full sm:w-1/3 flex items-center justify-center relative">
                <img
                  src={system2}
                  alt="icon"
                  className="absolute w-16 sm:w-20 opacity-30 z-0"
                />
                <img
                  src={system3}
                  alt="truck"
                  className="w-[70%] relative z-10 object-contain"
                />
              </div>
              <div className="w-full sm:w-2/3 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                  Oson yuk mashinalar topa olish imkoniyati
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Yuk egalari o'z ehtiyojlariga mos keladigan transport
                  vositalarini tezda topish, shartlarni va tashish narxini
                  solishtirish imkoniyatiga ega bo'ladi.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#0A1E2A] p-6 rounded-2xl shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                Tekshiruvdan o'tgan foydalanuvchilar
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Har bir transport vositasi va foydalanuvchilarning barchasi
                shaxsni tasdiqlovchi tekshiruvdan o'tgan.
              </p>
            </div>
            <div className="flex items-center justify-center mt-6 relative">
              <img
                src={system4}
                alt="icon"
                className="absolute w-16 sm:w-20 opacity-30 z-70"
              />
              <img
                src={system5}
                alt="user"
                className="w-[70%] relative z-10 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <button className="bg-[#46A358] text-white px-[52.5px] py-3 rounded-lg hover:bg-[#3d8b4d] transition text-lg">
            Tizimga kirish
          </button>
          <button className="bg-gray-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition text-lg">
            <i className="fa-brands fa-apple text-xl"></i>
            <span>Haydovchilar uchun</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default System;
