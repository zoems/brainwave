import { curve, farms3, heroBackground } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
// import Generating from "./Generating";
import CompanyLogos from "./CompanyLogos";
import Quote from "./Quote";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] "
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            <span className="inline-block relative">
              Smarter{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>{" "}
            Solutions for&nbsp;Seafood&nbsp;Production
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            “SmartAqua brings a globally diverse team of passionate and
            dedicated people with the experience to help seafood companies,
            venture capital and private equity firms, governments, researchers
            and non-government organisations.”
          </p>
          <Button href="/contact" white>
            Get in touch
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-22">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className=" rounded-[0.9rem] overflow-hidden ">
                <img
                  src={farms3}
                  className="w-full scale-[1.9] md:scale-[1]"
                  alt="Fish Farm"
                />

                {/* <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" /> */}

                <ScrollParallax isAbsolutelyPositioned>
                  <Quote
                    className="hidden absolute -left-[6rem] bottom-[7.5rem] px-5 py-5 max-w-[23rem] bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex xl:flex-col"
                    title="“IT HAS BEEN CALCULATED that if no accident prevented the
                      hatching of the eggs and each egg reached maturity, it
                      would take only three years to fill the sea so that you
                      could walk across the Atlantic dryshod on the backs of
                      cod.”"
                    author={
                      "-Alexandre Dumas, Le Grand Dictionnaire de Cuisine, 1873"
                    }
                  ></Quote>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Quote
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] max-w-[23rem] px-5 py-5 xl:flex xl:flex-col"
                    title="It can take 20,000-30,000 hours of careful husbandry to produce a fish of around 3-5kg, and less than one hour to reduce that investment to well below cost by saving on humane harvesting technology."
                  />
                </ScrollParallax>
              </div>
            </div>
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full "
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
