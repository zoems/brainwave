import Benefits from "./components/Team";
import Collaboration from "./components/Services";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Services from "./components/Products";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Collaboration />
        <Benefits />
        <Services />
        <ButtonGradient />
        <Footer />
      </div>
    </>
  );
};

export default App;
