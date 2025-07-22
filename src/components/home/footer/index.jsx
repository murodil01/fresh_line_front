import logom from "../../../assets/logom.png";
import { MapPin } from "lucide-react";
import {
  FaYoutube,
  FaInstagram,
  FaTelegramPlane,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#001722] text-white py-10 px-4 border-t border-gray-500">
      <div className="w-[90%] m-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
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

          <div className="md:w-5/12 flex flex-col sm:flex-row gap-8">
            <div className="flex-1">
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

              <div className="mt-4 flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="text-red-600 hover:scale-110 duration-200 text-xl"
                >
                  <FaYoutube />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="text-pink-500 hover:scale-110 duration-200 text-xl"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:scale-110 duration-200 text-xl"
                >
                  <FaTelegramPlane />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-700 hover:scale-110 duration-200 text-xl"
                >
                  <FaFacebookF />
                </a>
              </div>
            </div>

            <div className="flex-1">
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
      </div>
    </footer>
  );
};

export default Footer;
