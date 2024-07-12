import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
// import Tagline from "./TagLine";
import { about } from "../constants";
import { Gradient, TagLine } from "./design/About";

const About = () => (
  <Section className="overflow-hidden" id="about">
    <div className="container md:pb-10">
      <Heading tag="Ready to get started" title="We Go There" />
      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {about.map((item) => {
          return (
            <div
              className={`md:flex p-0.25  ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 overflow-hidden xl:p-15">
                <div className="relative z-1">
                  <div className="mb-10 -my-10 -mx-15">
                    <img
                      className="w-full"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                  <div className="flex mb-2 flex-end">
                    {item.date && <TagLine>{item.date}</TagLine>}
                  </div>
                  <p className="body-2 mb-[2rem] text-n-3">{item.title}</p>
                  {item.text && <p className="body-2 text-n-2">{item.text}</p>}
                  {item.list && (
                    <ul>
                      {item.list.map((item, index) => (
                        <li className="mb-3 py-3" key={index}>
                          <p className="body-2 text-n-2">{item}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>

      {/* <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/roadmap">Our roadmap</Button>
      </div> */}
    </div>
  </Section>
);

// export const x = () => {
//   return (
//     <>
//       <Section className="overflow-hidden" id="about">
//         <div className="container md:pb-10">
//           <Heading tag="Ready to get started" title="We Go there" />
//           <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
//             {aboutList.map((item) => (
//               <div key={item.id}>
//                 <img
//                   className="w-full"
//                   src={item.imageUrl}
//                   width={628}
//                   height={426}
//                   alt={item.title}
//                 />
//                 <h4 className="h4 mb-4">{item.title}</h4>
//                 <ul className="max-w-[22rem] mb-10 md:mb-14">
//                   {item.list.map((item, index) => (
//                     <li className="mb-3 py-3" key={index}>
//                       <h4 className="body-2 ml-5 text-n-3">{item}</h4>
//                       <div className="flex items-center"></div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//         <Gradient />
//       </Section>
//     </>
//   );
// };

export default About;
