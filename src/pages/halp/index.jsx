import Footer from "../../components/footer";

const Halp = () => {
  return (
    <div className="wull">
      <div className="bg-white shadow-md rounded-xl p-8 w-full">
        <h1 className="text-3xl font-bold text-[#46A358] mb-6 border-b pb-2">
          Yordam va qo'llab-quvvatlash
        </h1>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              1. Qanday qilib parolni o'zgartirishim mumkin?
            </h3>
            <p className="text-gray-600 mt-1">
              Sozlamalar sahifasiga o'ting, yangi parolni kiriting va saqlash
              tugmasini bosing.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              2. Mening hisobim bloklangan bo'lsa nima qilaman?
            </h3>
            <p className="text-gray-600 mt-1">
              Iltimos, bizning qo'llab-quvvatlash jamoamiz bilan bog'laning:{" "}
              <a
                href="mailto:support@example.com"
                className="text-[#46A358] underline"
              >
                support@example.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              3. Saytdan qanday foydalanaman?
            </h3>
            <p className="text-gray-600 mt-1">
              Har bir sahifada kerakli ma'lumotlar aniq ko'rsatilgan.
              Shuningdek, siz "Sozlamalar" yoki "Profil" orqali o'zingizga
              moslashtira olasiz.
            </p>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Qo'shimcha yordam kerakmi?
            </h3>
            <p className="text-gray-600">Biz bilan bog'laning:</p>
            <ul className="text-[#46A358] mt-2 space-y-1 list-disc list-inside">
              <li>
                Email:{" "}
                <a href="mailto:support@example.com">support@example.com</a>
              </li>
              <li>
                Telegram:{" "}
                <a href="https://t.me/example" target="_blank">
                  t.me/example
                </a>
              </li>
              <li>Telefon: +998 90 123 45 67</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Halp;
