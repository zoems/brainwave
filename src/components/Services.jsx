import { check, globelogo } from "../assets";
import { servicesApps, services, servicesText } from "../constants";
import Calendly from "../pages/Calendly";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Services";
import { useState } from "react";

const Services = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Section id="services" crosses>
      <div className="container lg:flex">
        <div className="">
          <h2 className="h2 mb-4 md:mb-8">
            SmartAqua operates globally and partners with other organisations in
            their network bringing pragmatic solutions for the seafood industry
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {services.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-3">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button onClick={() => setOpenModal(true)}>
            Book a Call With Us
          </Button>
          <Calendly show={openModal} onClose={() => setOpenModal(false)} />
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-10">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {servicesText}
          </p>

          <div className="relative left-1/2 flex w-[37rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-[50%] md:scale-100">
            <div className="flex w-80 p-[0.2rem] aspect-square m-auto bg-conic-gradient rounded-full">
              <div className="w-[22rem] aspect-square m-auto rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={globelogo}
                    width={236}
                    height={166}
                    alt="smartaqua global"
                  />
                </div>
              </div>
            </div>

            <ul>
              {servicesApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[2.5rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[2.3rem] flex w-[5.2rem] h-[5.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width * 1.5}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
