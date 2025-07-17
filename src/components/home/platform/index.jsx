import { Row, Col, Button } from "antd";

const sections = [
  {
    title: "Dispetcherlar uchun",
    content: `
      Yuk tashishni markazlashtirilgan boshqarish: Dispetcherlarga yuklar, haydovchilar va transport vositalarining yagona ma'lumotlar bazasidan foydalanish imkoniyati beriladi.
      
      Marshrutni avtomatlashtirish: platforma tirbandlik va boshqa yo'l sharoitlarini hisobga olgan holda avtomatik optimal marshrutlarni taklif qiladi.
      
      Hujjatlar aylanishini soddalashtirish: hujjatlarni avtomatlashtirish byurokratik tartib-qoidalarni soddalashtiradi.
    `,
    image:
      "https://i.pinimg.com/originals/6b/6b/72/6b6b7278581a2aa24948a3c6584e2fe0.jpg",
    button: "Tizimga kirish",
  },
  {
    title: "Yuk egalari uchun",
    content: `
      Avtotransport vositalariga keng kirish: mos transport vositalarini topish, shartlarni solishtirish imkoniyati.
      
      Shaffoflik va nazorat: real vaqt rejimida kuzatish, bildirishnomalar va tarixga kirish.
      
      Soddalashtirilgan logistika: bitta platforma orqali vositachilar ehtiyoji kamayadi.
    `,
    image:
      "https://i.pinimg.com/originals/6b/6b/72/6b6b7278581a2aa24948a3c6584e2fe0.jpg",
    button: "Tizimga kirish",
  },
  {
    title: "Mashina egalari uchun",
    content: `
      Yukni maksimallashtirish: transport egalariga yuk topishga yordam beradi, ishlamay qolish vaqtini kamaytiradi.
      
      Filoni boshqarish: texnik xizmatlarni rejalashtirish, samaradorlik tahlili.
      
      Moliyaviy hisobot: avtomatlashtirilgan hisobotlar, daromad va xarajat nazorati.
    `,
    image:
      "https://i.pinimg.com/originals/6b/6b/72/6b6b7278581a2aa24948a3c6584e2fe0.jpg",
    button: "Tizimga kirish",
  },
  {
    title: "Haydovchilar uchun",
    content: `
      Yuk yuklarini qidirish: joylashuv va vosita turiga mos buyurtmalar.
      
      Bir zumda yukni bron qilish: ishlamay qolish vaqtini kamaytiradi.
      
      Navigatsiya: optimallashtirilgan marshrutlar bilan vaqt va yoqilg'i tejaladi.
    `,
    image:
      "https://i.pinimg.com/originals/6b/6b/72/6b6b7278581a2aa24948a3c6584e2fe0.jpg",
    button: "Haydovchilar uchun",
  },
];

const Platform = () => {
  return (
    <div className="w-[90%] max-w-[1372px] mx-auto py-10 space-y-24">
      {sections.map((section, index) => {
        const isEven = index % 2 === 0;

        return (
          <section className="info-section" key={index}>
            <Row gutter={[32, 32]} align="middle" justify="space-between">
              {/* Text */}
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
                <Button
                  style={{
                    background: "#46A358",
                    color: "white",
                    padding: "16px 24px",
                    border: "none",
                  }}
                >
                  {section.button}
                </Button>
              </Col>

              {/* Image */}
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
