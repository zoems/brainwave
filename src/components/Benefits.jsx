import { team } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";

const Benefits = () => {
  const onClick = (url) => {
    if (!url) {
      return;
    }
    console.log("clicked");
    window.location.href = url;
  };

  return (
    <Section id="team">
      <div className="container relative z-2">
        <Heading
          className="max-w-[80rem]"
          title="Our core team of professionals are respected global leaders in their respective fields providing turnkey solutions including advice and product supply."
          text=""
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {team.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat md:max-w-[24rem] group"
              key={item.id}
            >
              <div className="relative z-2 flex flex-col justify-end min-h-[16rem] min-w-[15rem] p-[1.4rem] pointer-events-none opacity-1 transition-opacity group-hover:opacity-100">
                <div>
                  <h5 className=" text-sm md:text-xl">{item.name}</h5>
                </div>
                <div
                  className="hidden pointer-events-auto items-center mt-5 transition-opacity group-hover:flex"
                  href={item.lnlink}
                  onClick={() => onClick(item.lnlink)}
                >
                  <button className=" group ml-auto font-code text-xs font-bold text-n-1 hover:text-color-1 uppercase tracking-wider">
                    Explore more
                  </button>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 transition-opacity group-hover:opacity-30"
                // style={{ clipPath: "url(#benefits)" }}
              >
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

              {/* <ClipPath /> */}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
