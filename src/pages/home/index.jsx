import { Phone, User } from "lucide-react";
import { useEffect, useState } from "react";
import Footer from "../../components/footer";
import Items from "./items";
import Application from "./application";
import Opinions from "./opinions";
import Pro from "./pro"
const Home = () => {
  const [activeTab, setActiveTab] = useState("mahsulotlar");
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDateTime = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };

  const renderContent = () => {
    switch (activeTab) {
      case "mahsulotlar":
        return <Items />;
      case "ariza":
        return <Application/>;
      case "sharxlar":
        return <Opinions/>;
      case "pro":
        return <Pro/>;
      default:
        return null;
    }
  };

  return (
    <div className="flex-1 text-[#00AE4B] bg-white py-6 min-h-screen">
      <div>
        <div
          className="w-full h-[150px] rounded-t-lg"
          style={{
            backgroundImage:
              "linear-gradient(to right, #add8e6, #90ee90, #fffdd0, #ffb6c1)",
          }}
        ></div>
        <div className="flex flex-col sm:flex-row items-start gap-4 px-4 sm:px-8 pt-16 pb-8 bg-white shadow rounded-b-lg relative">
          <div className="flex-shrink-0 sm:absolute sm:left-8 sm:top-[-50px] z-10">
            <div className="bg-blue-100 p-2 rounded-lg border-4 border-white shadow">
              <img
                src="https://cdn1.iconfinder.com/data/icons/bokbokstars-121-classic-stock-icons-1/512/person-man.png"
                alt="avatar"
                className="w-[100px] h-[120px] sm:w-[120px] sm:h-[145px] object-cover"
              />
            </div>
          </div>
          <p className="pl-0 sm:pl-40 text-gray-500">
            {formatDateTime(currentDateTime)}
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-col lg:flex-row gap-4">
        <div className="shadow px-4 py-5 flex flex-col gap-2 w-full sm:w-[250px] rounded-lg text-gray-500 bg-white">
          <h3 className="text-[17px] font-semibold">Ma'lumot</h3>
          <p className="flex items-center gap-2 text-[15px]">
            <User className="text-[15px]" /> Ism
          </p>
          <p className="flex items-center gap-2 text-[15px]">
            <User className="text-[15px]" /> Familiya
          </p>
          <h3 className="text-[17px] mt-4 font-semibold">Aloqa</h3>
          <p className="flex items-center gap-2 text-[15px]">
            <Phone className="text-[15px]" /> Telefon
          </p>
        </div>

        <div className="w-full">
          <nav>
            <ul className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between p-4 bg-white shadow rounded-t-lg gap-2 sm:gap-0">
              {["mahsulotlar", "ariza", "sharxlar", "pro"].map((tab) => (
                <li
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`cursor-pointer px-4 py-2 rounded text-center transition-all duration-200
                    ${
                      activeTab === tab
                        ? "bg-[#46A358] text-white font-[500]"
                        : "text-gray-700 hover:bg-green-300 hover:text-white"
                    }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </li>
              ))}
            </ul>
          </nav>

          {renderContent()}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
