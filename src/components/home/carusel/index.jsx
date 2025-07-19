const Carusel = () => {
  const partners = [
    "https://api.cpstc.ru/storage/1730818628-0-Artel-02.png",
    "https://www.bsr.org/images/marks/mars.jpg",
    "https://i.pinimg.com/originals/e7/7f/76/e77f76a87a7f1d8c91e3ae1dc4d228a9.png",
    "https://www.sttinfo.fi/data/images/00009/90050d26-9c22-42c0-a0ec-1c78ebd3bada.png/social",
    "https://pic.rutubelist.ru/playlist/9dbf0441-0baf-11f0-a913-76eddef15282.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/512px-Samsung_Logo.svg.png",
    "https://i.pinimg.com/originals/e4/4e/a3/e44ea309124c8149ccf6cc56f89e9cc8.jpg",
    "https://avatars.mds.yandex.net/i?id=76019e58798e8034834e0c71eea51386_l-5275490-images-thumbs&n=13",
    "https://i.pinimg.com/originals/76/81/30/768130a0b537c927387f6c38e1659c03.jpg",
  ];

  const repeated = [...partners, ...partners];

  return (
    <div className="w-full overflow-hidden bg-white py-10">
      <style>
        {`
          @keyframes scrollX {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex gap-12 animate-scrollX"
          style={{
            width: "200%",
            animation: "scrollX 30s linear infinite",
          }}
        >
          {repeated.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Partner ${i + 1}`}
              className="h-12 md:h-16 w-auto object-contain"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carusel;
