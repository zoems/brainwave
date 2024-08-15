import Team from "../components/Team";
import Services from "../components/Services";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ButtonGradient from "../assets/svg/ButtonGradient";
import Products from "../components/Products";
import Footer from "../components/Footer";
import About from "../components/About";

const Home = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Services />
        <Team />
        <Products />
        <About />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default Home;
