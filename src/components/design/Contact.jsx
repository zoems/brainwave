import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className=" z-100 flex justify-center items-center">
        <div className="w-20 h-20 border-3 border-opacity-20 border-blue-100 border-t-color-9 rounded-full animate-spin"></div>
      </div>
    </Html>
  );
};

export default Loader;

export const GradientLight = ({ className }) => {
  return (
    <div
      className={` absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#0E3B8F] to-[#28206C]/0 to-70% pointer-events-none ${className}`}
    />
  );
};
