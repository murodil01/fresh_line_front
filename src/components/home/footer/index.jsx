import logom from "../../../assets/logom.png";
import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#001722] text-white py-10 px-4">
      <div className="w-[90%] m-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-5">
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
          </div>

          <div className="md:w-5/12 flex flex-col md:flex-row gap-8">
            <div>
              <h6 className="text-lg font-semibold mb-2">Kontaktlar</h6>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="tel:+998951563636" className="hover:underline">
                    +998 95 156 36 36
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:nurmamatovmirodil978@gmail.com"
                    className="hover:underline"
                  >
                    nurmamatovmirodil978@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="text-lg font-semibold mb-2">Manzil</h6>
              <p className="text-sm mb-1">
                Toshkent 100084, Amir Temur shox ko'chasi 108 uy
              </p>
              <a
                href="https://www.google.com/maps?ll=41.34093,69.286729&z=15&t=m&hl=uz&gl=US&mapclient=embed&cid=5956285218696080088"
                target="_blank"
                rel="noreferrer"
                className="hover:underline text-sm inline-flex items-center gap-1"
              >
                Xaritada ko'rish <MapPin size={16} />
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
