const Drivers = () => {
  return (
    <div className="bg-[#001722] text-white py-20 px-4 overflow-hidden mt-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Barchasi bitta tizimda</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Dispetcherlar, Haydovchilar, Yuk egalari, Mashina egalari, barchasi bitta tizimda
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center relative">

        <div className="flex flex-col items-center gap-10 md:gap-20">
          <div className="flex flex-col items-center gap-2">
            <img
              src="https://i.ytimg.com/vi/-SIw_c9VV3E/maxresdefault.jpg"
              alt="Dispatcher"
              className="w-28 h-28 object-cover rounded-xl shadow-lg"
            />
            <span className="px-3 py-1 bg-[#4B2A22] text-white text-sm rounded-lg">Dispatcher</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img
              src="https://i.ytimg.com/vi/-SIw_c9VV3E/maxresdefault.jpg"
              alt="Mashina egalari"
              className="w-28 h-28 object-cover rounded-xl shadow-lg"
            />
            <span className="px-3 py-1 bg-[#1A3D66] text-white text-sm rounded-lg">Mashina egalari</span>
          </div>
        </div>

        <div className="flex justify-center order-first md:order-none">
          <img
            src="https://i.ytimg.com/vi/-SIw_c9VV3E/maxresdefault.jpg"
            alt="Platform preview"
            className="w-full max-w-[400px] rounded-2xl shadow-xl"
          />
        </div>

        <div className="flex flex-col items-center gap-10 md:gap-20">
          <div className="flex flex-col items-center gap-2">
            <img
              src="https://i.ytimg.com/vi/-SIw_c9VV3E/maxresdefault.jpg"
              alt="Yuk egalari"
              className="w-28 h-28 object-cover rounded-xl shadow-lg"
            />
            <span className="px-3 py-1 bg-[#2B216F] text-white text-sm rounded-lg">Yuk egalari</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img
              src="https://i.ytimg.com/vi/-SIw_c9VV3E/maxresdefault.jpg"
              alt="Haydovchilar"
              className="w-28 h-28 object-cover rounded-xl shadow-lg"
            />
            <span className="px-3 py-1 bg-[#0F5A2C] text-white text-sm rounded-lg">Haydovchilar</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-wrap gap-4 mt-12">
        <button className="bg-[#3182F6] hover:bg-[#2563eb] text-white font-semibold px-6 py-2 rounded-full transition">
          Tizimga kirish
        </button>
        <button className="flex items-center gap-2 bg-white text-black font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M15.71 4.17C16.64 3.01 17.09 1.51 16.98 0C15.57 0.16 14.26 0.86 13.32 1.98C12.86 2.53 12.51 3.17 12.28 3.86C12.06 4.54 11.97 5.27 12.01 6C12.72 6.01 13.42 5.85 14.06 5.53C14.7 5.21 15.27 4.75 15.71 4.17Z" />
            <path d="M18.7 12.89C18.72 11.98 18.97 11.09 19.43 10.3C19.9 9.51 20.56 8.85 21.36 8.37C20.85 7.67 20.18 7.09 19.4 6.68C18.62 6.27 17.75 6.05 16.86 6.02C14.96 5.83 13.13 7.11 12.16 7.11C11.17 7.11 9.69 6.04 8.09 6.07C7.05 6.1 6.04 6.39 5.16 6.91C4.27 7.43 3.54 8.17 3.04 9.04C0.85 12.69 2.48 18.05 4.57 21C5.62 22.44 6.84 24.06 8.44 24C10.01 23.94 10.59 23.03 12.48 23.03C14.36 23.03 14.9 24 16.54 23.96C18.22 23.94 19.28 22.51 20.29 21.05C21.04 20.03 21.62 18.89 22 17.69C21.02 17.29 20.19 16.62 19.6 15.77C19.02 14.92 18.71 13.92 18.7 12.89Z" />
          </svg>
          Haydovchilar uchun
        </button>
      </div>
    </div>
  );
};

export default Drivers;