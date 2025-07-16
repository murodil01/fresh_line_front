const Question = () => {
  return (
    <section className="bg-[#001722] py-10">
      <div className="w-[90%] mx-auto bg-[#151F2A] text-white py-6 px-6 rounded-2xl">
        <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-10">

          <div className="md:w-4/12">
            <p className="text-xl font-semibold mb-2">Savol va takliflar uchun</p>
            <p className="text-gray-300 text-sm">
              Dispetcherlar, Haydovchilar, Yuk egalari, Mashina egalari, barchasi bitta tizimda
            </p>
          </div>

          <div className="md:w-3/12 w-full">
            <label className="block text-sm font-medium mb-1 text-gray-200">
              Ism familiyangiz
            </label>
            <input
              type="text"
              placeholder="Ism Familiya"
              className="w-full bg-gray-800 text-white border border-gray-600 rounded-md px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="md:w-3/12 w-full">
            <label className="block text-sm font-medium mb-1 text-gray-200">
              Telefon raqamingiz
            </label>
            <input
              type="tel"
              placeholder="+998 90-738-20-02"
              className="w-full bg-gray-800 text-white border border-gray-600 rounded-md px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="md:w-2/12 w-full">
            <button
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
            >
              Yuborish
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Question;
