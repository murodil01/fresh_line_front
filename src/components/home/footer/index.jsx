import logom from "../../../assets/logom.png";

const Footer = () => {
  return (
    <footer className="bg-[#001722] text-white py-10 px-4">
      <div className="w-[90%] m-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">

          <div className="md:w-7/12">
            <div className="mb-4">
              <a href="/">
                <img
                  src={logom}
                  alt="diip.uz"
                  width="143"
                  height="40"
                  className="object-contain ml-[-10px]"
                />
              </a>
            </div>
            <p className="text-sm">
              Logistic technology company
            </p>
          </div>

          <div className="md:w-5/12 flex flex-col md:flex-row gap-8">

            <div>
              <h6 className="text-lg font-semibold mb-2">Kontaktlar</h6>
              <ul className="space-y-1">
                <li>
                  <a href="tel:+998907382002" className="hover:underline">
                    +998 90 7382002
                  </a>
                </li>
                <li>
                  <a href="mailto:diip@info.uz" className="hover:underline">
                    diip@info.uz
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="text-lg font-semibold mb-2">Manzil</h6>
              <p className="text-sm mb-1">
                Xorazm viloyati, Urganch sh, Fayozov ko'chasi 2a
              </p>
              <a
                href="https://maps.google.com/?q=41.321452,69.201385"
                target="_blank"
                rel="noreferrer"
                className="hover:underline text-sm"
              >
                Xaritada ko'rish
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex gap-4 justify-start md:justify-end">
          <a
            href="https://youtube.com/@diipuz?si=MolE1GKy3wYo1p9S"
            target="_blank"
            rel="noreferrer"
            className="text-red-600 hover:scale-110 duration-200 text-2xl"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a
            href="https://instagram.com/diip.uz?igshid=OGQ5ZDc2ODk2ZA=="
            target="_blank"
            rel="noreferrer"
            className="text-pink-600 hover:scale-110 duration-200 text-2xl"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://t.me/diip_uz"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:scale-110 duration-200 text-2xl"
          >
            <i className="fa-brands fa-telegram"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61551358637063"
            target="_blank"
            rel="noreferrer"
            className="text-blue-700 hover:scale-110 duration-200 text-2xl"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
