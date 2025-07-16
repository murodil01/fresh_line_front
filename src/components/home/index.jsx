import Drivers from "./drivers";
import Carusel from "./carusel";
import Footer from "./footer";
import Hero from "./hero";
import Navbar from "./navbar";
import Platform from "./platform";
import System from "./system";
import YouTube from "./youtube";

const HomeComponent = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <YouTube />
      <Carusel />
      <Drivers />
      <Platform />
      <System />
      <Footer />
    </div>
  );
};

export default HomeComponent;
