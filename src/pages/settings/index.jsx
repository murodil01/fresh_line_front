import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const Settings = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-[#46A358] mb-6 border-b pb-2">
          Foydalanuvchi sozlamalari
        </h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ism
            </label>
            <input
              type="text"
              placeholder="Ismingiz"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#46A358]"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Familiya
            </label>
            <input
              type="text"
              placeholder="Familiyangiz"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#46A358]"
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#46A358]"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Yangi parol
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#46A358]"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Parolni tasdiqlang
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#46A358]"
            />
          </div>

          <div className="col-span-1 md:col-span-2 flex justify-end pt-4">
            <button
              type="submit"
              className="bg-[#46A358] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#3d8b4d] transition"
            >
              Saqlash
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Settings;
