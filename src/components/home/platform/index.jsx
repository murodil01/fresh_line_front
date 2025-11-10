import { Row, Col, Button } from "antd";
import ship from "../../../assets/platform/ship.jpg";
import shef from "../../../assets/platform/shef.jpg";
import fermers from "../../../assets/platform/fermers.jpg";
import shirt from "../../../assets/FResh Line/shirt.jpg";
import { useNavigate } from "react-router-dom";
import Car_FreshLine from "../../../assets/FResh Line/Car_FreshLine.jpg";
import FreshLIneCard from "../../../assets/FResh Line/FreshLIneCard.jpg";
import explore from "../../../assets/explore.png";
import simulation from "../../../assets/simulation.png";

const sections = [
  {
    title: "Delivery methods tailored for farmers",
    content: `Smart delivery methods: The Fresh Line platform uses AI to select the most efficient, fast, and safe delivery routes, ensuring products reach markets on time. Digitizing documents: Through Fresh Line, farmers can send and receive documents electronically — saving time and eliminating unnecessary bureaucracy.`,
    image: fermers,
  },
  {
    title: "Quality product - Directly from the farmer to your kitchen",
    content: `Through Fresh Line, partners in the HORECA sector receive the newest local products directly from farmers. Thanks to AI-optimized logistics, fast, chilled delivery is always guaranteed for you.`,
    image: shef,
  },
  {
    title: "Uzbekistan's own logistics system",
    content: `Fresh Line is not a foreign solution. It is a modern logistics system created within Uzbekistan, adapted to local roads, climate, and market conditions. Our AI system ensures safe and fast delivery of products by taking into account districts, road loads, and microclimate. A single platform — from the farmer to the customer, all our own!`,
    image: Car_FreshLine,
  },
  {
    title: "Fresh Line along with export",
    content: `Fresh Line simplifies export routes. Our AI system suggests the most profitable markets and the fastest delivery routes based on demand forecasts and customs requirements. For import, Fresh Line, as a reliable partner, delivers foreign products on time with the necessary certificates.`,
    image: ship,
  },
  {
    title: "For our employees",
    content: `Special branding for those who will be in the team with us.`,
    image: [
      { src: shirt, size: "large" },
      { src: FreshLIneCard, size: "small" },
    ],
  },
  {
    title: "Headline: Optimize Your Supply Chain with Smart Logistics Simulation",
    content: `Streamline your logistics decisions with our powerful simulation platform. Model real-world scenarios, identify inefficiencies, and test strategies before implementation. Whether you're managing fleets, warehouses, or supply chains — visualize outcomes and make data-driven moves that save time and cost.`,
    image: simulation,
    buttonText: "Start Simulation",
  },
  {
    title: "Powering the Next Generation of Logistics Simulation",
    content: `We’re continuously enhancing our logistics simulation platform to deliver smarter, faster, and more accurate results. Upcoming upgrades include AI-powered optimization, real-time route prediction, 3D visualization of logistics networks, and advanced analytics dashboards. Stay tuned — the future of logistics intelligence is on its way.`,
    image: explore,
    buttonText: "Explore Upcoming Features",
  },
];

const Platform = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleExternalLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="w-[90%] max-w-[1372px] mx-auto py-10 space-y-24">
      {sections.map((section, index) => {
        const isEven = index % 2 === 0;

        return (
          <section className="info-section" key={index}>
            <Row gutter={[32, 32]} align="middle" justify="space-between">
              {/* Text qismi */}
              <Col
                xs={{ span: 24, order: 2 }}
                md={{ span: 12, order: isEven ? 1 : 2 }}
              >
                <h3 className="info-section-title text-2xl font-bold mb-4">
                  {section.title}
                </h3>
                <p className="info-section-text whitespace-pre-line text-gray-700 mb-4">
                  {section.content.trim()}
                </p>

                {/* Tugma qismi */}
                <div className="text-center md:text-left">
                  {section.buttonText ? (
                    <Button
                      onClick={() =>
                        handleExternalLink(
                          section.buttonText === "Start Simulation"
                            ? "https://freshline-simulation.vercel.app/"
                            : "https://fresh-line.base44.app/home"
                        )
                      }
                      style={{
                        background: "#46A358",
                        color: "white",
                        fontSize: "15px",
                        padding: "22px",
                        border: "none",
                        borderRadius: "7px",
                      }}
                    >
                      {section.buttonText}
                    </Button>
                  ) : (
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
                      Login to the system
                    </Button>
                  )}
                </div>
              </Col>

              {/* Rasm qismi */}
              <Col
                xs={{ span: 24, order: 1 }}
                md={{ span: 12, order: isEven ? 2 : 1 }}
              >
                {Array.isArray(section.image) ? (
                  <div className="flex gap-4 justify-center md:justify-start">
                    {section.image.map((img, i) => (
                      <img
                        key={i}
                        src={img.src}
                        alt={section.title}
                        className={`rounded-lg shadow-lg object-cover ${
                          img.size === "large" ? "w-2/3" : "w-1/3 max-h-29"
                        }`}
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    src={section.image}
                    alt={section.title}
                    style={{
                      width: "100%",
                      borderRadius: 12,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    }}
                  />
                )}
              </Col>
            </Row>
          </section>
        );
      })}
    </div>
  );
};

export default Platform;
