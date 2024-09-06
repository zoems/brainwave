import { InlineWidget } from "react-calendly";

import Button from "../components/Button";
import Loader from "../components/design/Loader";

const Calendly = ({ show, onClose, isModal, className, noHeading }) => {
  if (isModal && !show) return null;

  const containerClass = isModal
    ? "z-10 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center mt-[5rem]"
    : "";

  const contentClass = isModal ? "bg-n-8 p-8 rounded shadow-lg mt-9" : "";

  const widgetClass = isModal ? "max-h-[22rem] mt-4" : "max-h-[490px]";

  return (
    <div className={`${containerClass} ${className}`}>
      <div className={contentClass}>
        <div className="">
          {!noHeading && <h1 className="h1 mb-4">Schedule a Call</h1>}
          <p className="h6">Smartaqua Intro Call with Alastair Smart</p>
        </div>
        <div className={`${widgetClass} overflow-scroll`}>
          <InlineWidget
            url="https://calendly.com/al-smartaqua/smartaqua-intro-call-with-alastair-smart?hide_event_type_details=1&hide_gdpr_banner=1"
            LoadingSpinner={Loader}
          />
        </div>
        {isModal && (
          <Button className={"mt-3"} onClick={onClose}>
            Close
          </Button>
        )}
      </div>
    </div>
  );
};

export default Calendly;

// add loading wheel and errors
// marrgins/ heights
