import { Row, Col, Button } from "antd";

const Platform = () => {
  return (
    <div className="w-[90%] max-w-[1372px] mx-auto py-10">
      <section className="info-section">
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={12}>
            <h5 className="info-section-title">Dispetcherlar uchun</h5>
            <p className="info-section-text">
              Yuk tashishni markazlashtirilgan boshqarish: Dispetcherlarga
              yuklar, haydovchilar va transport vositalarining yagona
              ma'lumotlar bazasidan foydalanish imkoniyati beriladi, bu ularga
              buyurtmalarni samarali taqsimlash va real vaqt rejimida tashishni
              kuzatish imkonini beradi.
              <br />
              <br />
              Marshrutni avtomatlashtirish: platforma tirbandlik va boshqa yo'l
              sharoitlarini hisobga olgan holda yuk va mavjud transport
              vositalarining joylashuvini tahlil qilish asosida avtomatik
              ravishda optimal marshrutlarni taklif qilishi mumkin.
              <br />
              <br />
              Hujjatlar aylanishini soddalashtirish: schyot-fakturalar va
              bajarilgan ish sertifikatlari kabi hujjatlarni qayta ishlash
              jarayonlarini avtomatlashtirish byurokratik tartib-qoidalar uchun
              vaqtni qisqartiradi.
            </p>
            <Button
              style={{
                background: "#46A358",
                color: "white",
                padding: "20px 25px",
                border: "none",
              }}
            >
              Tizimga kirish
            </Button>
          </Col>
          <Col xs={24} md={12}>
            <img
              src="https://i.pinimg.com/originals/6b/6b/72/6b6b7278581a2aa24948a3c6584e2fe0.jpg"
              className="info-section-img"
              alt="Dispetcher"
              style={{ width: "100%", borderRadius: 10 }}
            />
          </Col>
        </Row>
      </section>

      <section className="info-section mt-16">
        <Row gutter={[32, 32]} align="middle" justify="space-between">
          <Col xs={24} md={12} order={2} mdOrder={1}>
            <h5 className="info-section-title">Yuk egalari uchun</h5>
            <p className="info-section-text">
              Avtotransport vositalariga keng kirish: Yuk egalari tezda o'z
              ehtiyojlari uchun mos transport vositalarini topish, tashish
              shartlari va xarajatlarini solishtirish imkoniyatiga ega.
              <br />
              <br />
              Shaffoflik va nazorat: real vaqt rejimida yuk harakatini kuzatish,
              yetkazib berish holati haqida bildirishnomalarni olish va tashish
              tarixiga kirish imkoniyati.
              <br />
              <br />
              Soddalashtirilgan logistika: Barcha operatsiyalar uchun bitta
              platforma bir nechta vositachilar bilan o'zaro aloqaga bo'lgan
              ehtiyojni kamaytiradi va xatolar xavfini kamaytiradi.
            </p>
            <Button
              style={{
                background: "#46A358",
                color: "white",
                padding: "20px 25px",
                border: "none",
              }}
            >
              Tizimga kirish
            </Button>
          </Col>
          <Col xs={24} md={12} order={1} mdOrder={2}>
            <img
              src="https://i.pinimg.com/originals/6b/6b/72/6b6b7278581a2aa24948a3c6584e2fe0.jpg"
              className="info-section-img"
              alt="Yuk egalari"
              style={{ width: "100%", borderRadius: 10 }}
            />
          </Col>
        </Row>
      </section>

      <section className="info-section mt-16">
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={12}>
            <h5 className="info-section-title">Mashina egalari uchun</h5>
            <p className="info-section-text">
              Yukni maksimallashtirish: platforma transport vositalari egalariga
              tashish uchun yuklarni topishga yordam beradi, ishlamay qolish
              vaqtini kamaytiradi va daromadni oshiradi.
              <br />
              <br />
              Filoni boshqarish: Avtomobil sog'lig'ini kuzatish, texnik xizmat
              ko'rsatishni rejalashtirish va avtomobil samaradorligini tahlil
              qilish.
              <br />
              <br />
              Moliyaviy hisobot va tahlil: daromadlar va xarajatlarning
              avtomatlashtirilgan hisobi, har bir transport vositasining
              samaradorligi va rentabelligi bo‘yicha tahlillar.
            </p>
            <Button
              style={{
                background: "#46A358",
                color: "white",
                padding: "20px 25px",
                border: "none",
              }}
            >
              Tizimga kirish
            </Button>
          </Col>
          <Col xs={24} md={12}>
            <img
              src="https://i.pinimg.com/originals/6b/6b/72/6b6b7278581a2aa24948a3c6584e2fe0.jpg"
              className="info-section-img"
              alt="Mashina egalari"
              style={{ width: "100%", borderRadius: 10 }}
            />
          </Col>
        </Row>
      </section>

      <section className="info-section mt-16">
        <Row gutter={[32, 32]} align="middle" justify="space-between">
          <Col xs={24} md={12} order={2} mdOrder={1}>
            <h5 className="info-section-title">Haydovchilar uchun</h5>
            <p className="info-section-text">
              Yuk yuklarini qidirish: Haydovchilar joylashuvi va transport
              vositasi turiga mos keladigan yuk buyurtmalarini osongina
              topishlari mumkin.
              <br />
              <br />
              Bir zumda yukni bron qilish va tasdiqlash: Buyurtmalarni qabul
              qilish jarayonini soddalashtiradi, ishlamay qolish vaqtini
              kamaytiradi.
              <br />
              <br />
              Navigatsiya va marshrutni optimallashtirish: platforma
              drayverlarga optimallashtirilgan marshrutlarga kirish imkonini
              beradi, bu esa vaqt va yoqilg'ini tejashga yordam beradi.
            </p>
            <Button
              style={{
                background: "#46A358",
                color: "white",
                padding: "20px",
                border: "none",
              }}
              icon={<i className="fa-brands fa-apple" />}
            >
              Haydovchilar uchun
            </Button>
          </Col>
          <Col xs={24} md={12} order={1} mdOrder={2}>
            <img
              src="https://i.pinimg.com/originals/6b/6b/72/6b6b7278581a2aa24948a3c6584e2fe0.jpg"
              className="info-section-img"
              alt="Haydovchi"
              style={{ width: "100%", borderRadius: 10 }}
            />
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Platform;
