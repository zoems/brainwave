import { team } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import { heroBackground } from "../assets";
import { useState } from "react";
import Button from "./Button";

const Team = () => {
  const [openTeam, setOpenTeam] = useState(false);
  console.log(openTeam);

  const toggleteam = () => {
    if (openTeam) {
      setOpenTeam(false);
    } else {
      setOpenTeam(true);
    }
  };

  return (
    <Section id="team">
      <div className="container relative z-2">
        <Heading
          className="max-w-[80rem]"
          title="Our core team of professionals are respected global leaders in their respective fields providing turnkey solutions including advice and product supply."
          text=""
        />
        <div>
          <Button className="flex md:hidden mb-6" onClick={toggleteam}>
            Show Team
          </Button>
        </div>

        <div
          className={`md:flex flex-wrap gap-10 mb-10
            ${openTeam ? "flex flex-wrap" : "hidden"}
            `}
        >
          {team.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat md:max-w-[24rem] group"
              key={item.id}
            >
              <div className="relative z-2 flex flex-col justify-end min-h-[16rem] min-w-[15rem] p-[1.4rem]">
                <div>
                  <h5 className=" text-sm md:text-xl">{item.name}</h5>
                </div>
                <div className="hidden group-hover:flex items-center mt-5 ">
                  <a
                    href={item.lnlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" ml-auto font-code text-xs font-bold text-n-1 hover:text-color-1 uppercase tracking-wider"
                  >
                    Linked In
                  </a>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div className="absolute inset-0.5 transition-opacity group-hover:opacity-30">
                <div className="absolute object-cover inset-0 ">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={250}
                      height={200}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -z-1 -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[84%] max-w-[180rem]">
        <img
          src={heroBackground}
          className="w-full "
          width={1440}
          height={1800}
          alt="hero"
        />
      </div>
    </Section>
  );
};

export default Team;
