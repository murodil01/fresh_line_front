import { Row, Col, Button } from "antd";
import ship from "../../../assets/platform/ship.jpg";
import shef from "../../../assets/platform/shef.jpg";
import fermers from "../../../assets/platform/fermers.jpg";
import { useNavigate } from "react-router-dom";

const sections = [
  {
    title: "Fermerlar uchun moslashtirilgan yetkazib berish yo'llari",
    content: `
      Aqlli yetkazib berish yo'llari: Fresh Line platformasi AI yordamida eng samarali, tez va xavfsiz yetkazib berish yo'llarini tanlab, mahsulotlarni bozorlarga o'z vaqtida yetkazishni ta’minlaydi.
      
      Hujjatlarni raqamlashtirish: Fresh Line orqali fermerlar hujjatlarni elektron ko'rinishda yuborishlari va qabul qilishlari mumkin — bu esa vaqtni tejaydi va ortiqcha byurokratiyani bartaraf etadi.
    `,
    image: fermers,
  },
  {
    title:
      "Sifatli mahsulot - To'g'ridan-to'g'ri fermerdan sizning oshxonangizgacha",
    content: `
    Fresh Line orqali HORECA sohasidagi hamkorlar eng yangi, mahalliy mahsulotlarni to'g'ridan-to'g'ri fermerlardan oladilar. 
    
    AI asosida optimallashtirilgan logistika tufayli sizga har doim tezkor, sovitilgan yetkazib berish kafolatlanadi.
    `,
    image: shef,
  },
  {
    title: "O'zbekistonning o'z logistika tizimi",
    content: `
      Fresh Line — bu xorijiy yechim emas.
      Bu O'zbekiston ichida yaratilgan, mahalliy yo'llar, iqlim va bozor sharoitlariga moslashtirilgan zamonaviy logistika tizimidir.
      Bizning AI tizimimiz tumanlar, yo'llardagi yuklama va mikroiqlimni hisobga olib, mahsulotlar xavfsiz va tez yetkazilishini ta’minlaydi.
      Yagona platforma — fermerdan to mijozgacha, o'zimizniki!

    `,
    image:
      "https://i.pinimg.com/originals/6b/6b/72/6b6b7278581a2aa24948a3c6584e2fe0.jpg",
  },
  {
    title: "Fresh Line eksport bilan birga",
    content: `
      Fresh Line eksport yo'llarini soddalashtiradi.
      Bizning AI tizimimiz talab prognozlari va bojxona talablari asosida sizga eng foydali bozorlar va eng tez yetkazib berish yo'nalishlarini taklif qiladi.
      Import uchun esa — Fresh Line ishonchli hamkor sifatida, xorijiy mahsulotlarni o'z vaqtida, zarur sertifikatlar bilan yetkazadi.

    `,
    image: ship,
  },
];

const Platform = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="w-[90%] max-w-[1372px] mx-auto py-10 space-y-24">
      {sections.map((section, index) => {
        const isEven = index % 2 === 0;

        return (
          <section className="info-section" key={index}>
            <Row gutter={[32, 32]} align="middle" justify="space-between">
              <Col
                xs={{ span: 24, order: 2 }}
                md={{ span: 12, order: isEven ? 1 : 2 }}
              >
                <h5 className="info-section-title text-2xl font-bold mb-4">
                  {section.title}
                </h5>
                <p className="info-section-text whitespace-pre-line text-gray-700 mb-4">
                  {section.content.trim()}
                </p>
                <div className="text-center md:text-left">
                  <Button
                    onClick={handleLoginClick}
                    style={{
                      background: "#46A358",
                      color: "white",
                      fontSize: "15px",
                      padding: "22px",
                      border: "none",
                      borderRadius: "7px",
                    }}
                  >
                    Tizimga kirish
                  </Button>
                </div>
              </Col>

              <Col
                xs={{ span: 24, order: 1 }}
                md={{ span: 12, order: isEven ? 2 : 1 }}
              >
                <img
                  src={section.image}
                  alt={section.title}
                  style={{
                    width: "100%",
                    borderRadius: 12,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  }}
                />
              </Col>
            </Row>
          </section>
        );
      })}
    </div>
  );
};

export default Platform;
