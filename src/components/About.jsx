import Heading from "./Heading";
import Section from "./Section";
// import Tagline from "./TagLine";
import { about, facts } from "../constants";
import { Facts } from "./design/About";
// import { TagLine } from "./design/About";

const About = () => (
  <Section className="overflow-hidden" id="about">
    <div className="container md:pb-10">
      <Heading
        title="We Go There"
        text="SmartAqua was first established in 1996 by Alastair Smart to offer seafood consulting services chiefly to the fast growing aquaculture industry. After some years working in many countries he saw a number of colleagues offering the same service and the concept of a Team offering a one-stop-shop for seafood advice not limited by scope or geography was formed and the group expanded globally."
      />
      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {about.map((item) => {
          return (
            <div
              className={`md:flex  ${
                item.colorful
                  ? "p-[0.0625rem] bg-conic-gradient rounded-3xl"
                  : "border border-n-1/10 rounded-3xl"
              }`}
              key={item.id}
            >
              <div className="relative p-3 bg-n-7 rounded-3xl overflow-hidden xl:p-15">
                <div className="relative z-1">
                  {item.img ? (
                    <div className="mb-10 -my-10 -mx-15">
                      <img
                        className="w-full h-min"
                        src={item.img}
                        width={628}
                        height={426}
                        alt={item.title}
                      />
                    </div>
                  ) : (
                    <Facts title={item.title} facts={facts} />
                  )}

                  {item.img && <p className="body-2 text-n-3">{item.title}</p>}
                  {item.text && <p className="body-2 text-n-2">{item.text}</p>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </Section>
);

export default About;
