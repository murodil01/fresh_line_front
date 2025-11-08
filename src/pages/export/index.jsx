import Footer from "../../components/footer";

const defaultImg = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

const exporters = [
  {
    id: 1,
    firstName: "Javlon",
    lastName: "Toirov",
    location: "Namangan, Pop tumani",
  },
  {
    id: 2,
    firstName: "Nodira",
    lastName: "Bekmurodova",
    location: "Buxoro sh.",
  },
  {
    id: 3,
    firstName: "Sardor",
    lastName: "Ismoilov",
    location: "Navoiy, Karmana",
  },
];

const Export = () => {
  return (
    <div className="text-black min-h-screen">

      <div className="w-full py-8">
        <h1 className="text-gray-500 font-semibold text-2xl mb-6 text-left">
          List of exporters
        </h1>

        <div className="flex flex-col gap-4">
          {exporters.map((person) => (
            <div
              key={person.id}
              className="w-full bg-white p-4 shadow-sm rounded-lg flex flex-col sm:flex-row !items-center sm:items-start gap-4 sm:gap-6"
            >
              <img
                src={defaultImg}
                alt={`${person.firstName} ${person.lastName}`}
                className="w-16 h-16 object-cover rounded-full border border-gray-300"
              />

              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg font-semibold">
                  {person.firstName} {person.lastName}
                </h3>
                <p className="text-gray-500">{person.location}</p>
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

export default Export;
