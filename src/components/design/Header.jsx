import { background } from "../../assets";
import FishlineSvg from "../../assets/svg/fishline";

export const Rings = () => {
  return (
    <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export const SideLines = () => {
  return (
    <>
      <div className="absolute top-0 left-5 w-0.25 h-full bg-n-6"></div>
      <div className="absolute top-0 right-5 w-0.25 h-full bg-n-6"></div>
    </>
  );
};

export const BackgroundFish = () => {
  return (
    <>
      <FishlineSvg
        className="absolute top-[4.4rem] left-16 w-3 h-3"
        colorWay="colorway1"
      />
      <FishlineSvg
        className="absolute top-[12.6rem] right-16 w-3 h-3"
        colorWay="colorway2"
      />
      <FishlineSvg
        className="absolute top-[26.8rem] left-12 w-6 h-6"
        colorWay="colorway3"
      />
    </>
  );
};

export const HamburgerMenu = () => {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      <div className="absolute inset-0 opacity-[.03]">
        {/* <img
          className="w-full h-full object-cover"
          src={background}
          width={688}
          height={953}
          alt="Background"
        /> */}
      </div>

      <Rings />

      <SideLines />

      <BackgroundFish />
    </div>
  );
};
