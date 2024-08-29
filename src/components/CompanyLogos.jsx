import { companyLogos } from "../constants";
import "../index.css";

const CompanyLogos = ({ className }) => {
  return (
    <div
      className={`${className} relative z-10 max-w-[23rem] mx-auto md:max-w-[43rem] lg:max-w-[56.1rem] mt-20 block marquee `}
    >
      <h2 className="mb-6 body-1 tagline text-xl text-center text-n-1/50 ">
        Trusted By Industry Leaders
      </h2>
      <div className=" p-3 bg-white">
        <div className="flex flex-wrap justify-center">
          {companyLogos.map((logo, index) => (
            <div className="marquee-logo " key={`row1-${index}`}>
              <img src={logo} width={80} height={28} alt={`Logo ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
