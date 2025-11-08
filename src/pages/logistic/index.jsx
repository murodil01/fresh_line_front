import Footer from "../../components/footer";

const companies = [
  {
    id: 1,
    img: "https://s.alicdn.com/@sc04/kf/H6612af5246d64c57b6e9b8b8f65fc067t.jpg",
    title: "DHL Express",
    location: "Toshkent, Yunusobod",
  },
  {
    id: 2,
    img: "https://avatars.mds.yandex.net/i?id=4d204949944c9389fba2cb4155ca728c_sr-5656606-images-thumbs&n=13",
    title: "IGS Logistics",
    location: "Toshkent, Chilonzor",
  },
  {
    id: 3,
    img: "https://www.kisacoresearch.com/sites/default/files/styles/panopoly_image_original/public/speaker_company_logos/ups.png?itok=0z6hWsJE",
    title: "UPS Uzbekistan",
    location: "Samarqand sh.",
  },
];

const Logistic = () => {
  return (
    <div className="text-black min-h-screen">

      <div className="w-full py-8">
        <h3 className="text-gray-700 font-semibold text-2xl mb-6 text-left">
          List of logistic companies
        </h3>

        <div className="flex flex-col gap-4">
          {companies.map((company) => (
            <div
              key={company.id}
              className="w-full bg-white p-4 shadow-sm rounded-lg flex flex-col sm:flex-row !items-center sm:items-start gap-4 sm:gap-6"
            >
              <img
                src={company.img}
                alt={company.title}
                className="w-16 h-16 p-[5px] object-cover rounded-full border border-gray-300"
              />

              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg font-semibold">{company.title}</h3>
                <p className="text-gray-500">{company.location}</p>
              </div>

              <button className="px-4 py-2 bg-[#46A358] text-white rounded hover:bg-[#3d8b4d] transition text-sm w-full sm:w-auto">
                Detailed
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Logistic;
