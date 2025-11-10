import Footer from "./footer";
import Hero from "./hero";
import Navbar from "./navbar";
import Platform from "./platform";
import QrCode from "./qr-code";
import System from "./system";
import YouTube from "./youtube";

const HomeComponent = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <YouTube />
      <QrCode/>
      <Platform />
      <System />
      <Footer />
    </div>
  );
};

export default HomeComponent;
