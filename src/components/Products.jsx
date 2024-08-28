import Section from "./Section";
import Heading from "./Heading";
import { service1, service3, check } from "../assets";
import { deepChillPoints } from "../constants";
import { LeftMessage } from "./design/Products";
import Arrow from "../assets/svg/Arrow";

const Products = () => {
  return (
    <>
      <Section id="products" className="z-1">
        <div className="container">
          <Heading
            title="Products"
            text="We have developed long standing business relationships with several product suppliers where we believe they offer exceptional product and service supply and we utilise our combined efforts to help with the process of ongoing product and service improvement together with seafood industry producers and buyers. We look forward to continuing to support product development and innovation so vital for sustainable development of seafood production."
          />

          <div className="relative">
            <div
              id="box1/row1"
              className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border bg-n-7 border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]"
            >
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto opacity-70 md:opacity-100">
                <img
                  className="w-full h-full object-cover md:object-right"
                  width={800}
                  alt=""
                  height={730}
                  src={service1}
                />
              </div>

              <div className="relative z-1 max-w-[17rem] ml-auto ">
                <h4 className="h4 mb-4">DeepChill</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Deepchill® is like no other ice technology. It comprises of
                  tiny pearl-like micro-crystals generated in sea, or fresh
                  water, delivered in liquid slurry or crystal form to
                  superchill and hold valuable product at peak freshness.
                </p>
                <ul className="body-2">
                  {deepChillPoints.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start py-4 border-t bg-n-7 border-n-6"
                    >
                      <img width={24} height={24} src={check} />
                      <p className="ml-4">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <LeftMessage />
            </div>

            <div id="row2" className="relative z-1 grid gap-5 lg:grid-cols-2">
              <div
                id="box2"
                className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]"
              >
                <div className="py-12 px-4 xl:px-8">
                  <h4 className="h4 mb-4">DeepChill slurry systems</h4>
                  <p className="body-2 mb-[2rem] text-n-3">
                    Whether you operate a fishing vessel, aquaculture farm or a
                    processing facility, Deepchill® fits easily into your
                    operation and allows you to maintain the best condition of
                    your seafood at every stage—from harvest to the consumer.
                  </p>
                </div>

                <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[35rem]">
                  <img
                    src={service3}
                    className="w-full h-full object-cover"
                    width={520}
                    height={400}
                    alt="slurry silos"
                  />
                </div>
              </div>

              <div
                id="box2"
                className="relative min-h-[60rem] border bg-n-7 border-n-1/10 rounded-3xl overflow-hidden"
              >
                <div className="absolute inset-0 flex flex-col justify-end p-4 lg:p-8">
                  <h4 className="h4 mb-4">
                    {" "}
                    Why is this important technology?
                  </h4>
                  <p className="body-2 mb-2 text-n-3">
                    Temperature control for Seafood is a fundamental.
                    Post-mortem changes are inevitable and fish don’t improve.
                    This is a sad fact and a general truth, although exceptions
                    are admitted in the first few days post-catch as the umami
                    may increase with IMP formation and rigor changes affect
                    textural properties. However, after this short period it is
                    downhill all the way as spoilage bacteria begin to take
                    over, autolytic changes occur and oxidation is initiated –
                    phenomena which are all temperature dependent. It is thus
                    obvious that both time and temperature affect the rate of
                    change, and that it is the time-temperature integral that is
                    the fundamental, prime measure of the amount or degree of
                    change. This is critically important in that minor changes
                    in chill temperature become very important. The biological,
                    microbiological and biochemical changes and the gross sum of
                    their effects obey the same, or similar enough, kinetics to
                    be estimated with change in temperature. The consequence of
                    this is that a slight change in temperature from 0C to just
                    4C doubles the rate of degradation, and hence doubles the
                    amount of change that has occurred. If there were such
                    hypothetical measures as ‘quality units’ or ‘freshness
                    units’ then twice as many units would be decomposed at 4C as
                    at 0C.
                  </p>
                  <div className="flex items-center mt-auto">
                    <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                      Explore more
                    </p>
                    <Arrow />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* <Section crosses>
          <div className="container">
            <div className="relative">
              <div
                id="box1/row1"
                className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border bg-n-7 border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]"
              >
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto opacity-70 md:opacity-100">
                  <img
                    className="w-full h-full object-cover md:object-right"
                    width={800}
                    alt=""
                    height={730}
                    src={service1}
                  />
                </div>

                <div className="relative z-1 max-w-[17rem] ml-auto ">
                  <h2 className="h2 mb-4">Ace Aquatec</h2>
                  <p className="body-2 mb-[3rem] text-n-3">
                    It can take 20,000-30,000 hours of careful husbandry to
                    produce a fish of around 3-5kg, and less than one hour to
                    reduce that investment to well below cost by saving on
                    humane harvesting technology.
                  </p>
                  <ul className="body-2">
                    {points.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start py-4 border-t border-n-6"
                      >
                        <img width={24} height={24} src={check} />
                        <p className="ml-4">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <PhotoChatMessage />
              </div>

              <div id="row2" className="relative z-1 grid gap-5 lg:grid-cols-2">
                <div
                  id="box2"
                  className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]"
                >
                  <div className="py-12 px-4 xl:px-8">
                    <h4 className="h4 mb-4">DeepChill slurry systems</h4>
                    <p className="body-2 mb-[2rem] text-n-3">
                      Whether you operate a fishing vessel, aquaculture farm or
                      a processing facility, Deepchill® fits easily into your
                      operation and allows you to maintain the best condition of
                      your seafood at every stage—from harvest to the consumer.
                    </p>
                  </div>

                  <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[35rem]">
                    <img
                      src={service3}
                      className="w-full h-full object-cover"
                      width={520}
                      height={400}
                      alt="slurry silos"
                    />
                  </div>
                </div>

                <div
                  id="box2"
                  className="relative min-h-[60rem] bg-n-7 border border-n-1/10 rounded-3xl overflow-hidden"
                >
                  <div className="absolute inset-0 flex flex-col justify-end p-4 lg:p-8">
                    <h4 className="h4 mb-4">
                      {" "}
                      Why is this important technology?
                    </h4>
                    <p className="body-2 mb-2 text-n-3">
                      Temperature control for Seafood is a fundamental.
                      Post-mortem changes are inevitable and fish don’t improve.
                      This is a sad fact and a general truth, although
                      exceptions are admitted in the first few days post-catch
                      as the umami may increase with IMP formation and rigor
                      changes affect textural properties. However, after this
                      short period it is downhill all the way as spoilage
                      bacteria begin to take over, autolytic changes occur and
                      oxidation is initiated – phenomena which are all
                      temperature dependent. It is thus obvious that both time
                      and temperature affect the rate of change, and that it is
                      the time-temperature integral that is the fundamental,
                      prime measure of the amount or degree of change. This is
                      critically important in that minor changes in chill
                      temperature become very important. The biological,
                      microbiological and biochemical changes and the gross sum
                      of their effects obey the same, or similar enough,
                      kinetics to be estimated with change in temperature. The
                      consequence of this is that a slight change in temperature
                      from 0C to just 4C doubles the rate of degradation, and
                      hence doubles the amount of change that has occurred. If
                      there were such hypothetical measures as ‘quality units’
                      or ‘freshness units’ then twice as many units would be
                      decomposed at 4C as at 0C.
                    </p>
                    <div className="flex items-center mt-auto">
                      <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                        Explore more
                      </p>
                      <Arrow />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section> */}
    </>
  );
};

export default Products;
