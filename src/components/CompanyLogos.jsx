import { companyLogos } from "../constants";
import "../index.css";

const CompanyLogos = ({ className }) => {
  const logosperrow = Math.ceil(companyLogos.length / 3);
  const rowlogos1 = companyLogos.slice(0, logosperrow);
  const rowlogos2 = companyLogos.slice(logosperrow, 2 * logosperrow);
  const rowlogos3 = companyLogos.slice(2 * logosperrow);

  return (
    <div
      className={`${className} relative z-10 max-w-[23rem] mx-auto md:max-w-[43rem] lg:max-w-[56rem] mt-20 block marquee `}
    >
      <h2 className="mb-6 body-1 tagline text-xl text-center text-n-1/50 ">
        Trusted By Industry Leaders
      </h2>
      <div className="marquee-content 1 md:w-[calc(290%)] sm:w-[calc(541%)] lg:w-[calc(222%)]">
        {[...rowlogos1, ...rowlogos1].map((logo, index) => (
          <div className="marquee-logo " key={`row1-${index}`}>
            <img src={logo} width={134} height={28} alt={`Logo ${index}`} />
          </div>
        ))}
      </div>
      <div className="marquee-pos-content 2 md:w-[calc(290%)] sm:w-[calc(541%)] lg:w-[calc(222%)]">
        {[...rowlogos2, ...rowlogos2].map((logo, index) => (
          <div className="marquee-logo" key={`row2-${index}`}>
            <img src={logo} width={134} height={28} alt={`Logo ${index}`} />
          </div>
        ))}
      </div>
      <div className="marquee-content 3 md:w-[calc(290%)] sm:w-[calc(541%)] lg:w-[calc(222%)]">
        {[...rowlogos3, ...rowlogos3].map((logo, index) => (
          <div className="marquee-logo" key={`row3-${index}`}>
            <img src={logo} width={134} height={28} alt={`Logo ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;
