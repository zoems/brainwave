import { InlineWidget } from "react-calendly";
import { useEffect, useState } from "react";

import Button from "../components/Button";
import Loader from "../components/design/Loader";

const Calendly = ({ show, onClose }) => {
  const [renderModal, setRenderModal] = useState(false);

  useEffect(() => {
    if (show) {
      setRenderModal(true);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="z-10 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center mt-[5rem]">
      <div className="bg-n-8 p-8 rounded shadow-lg mt-9">
        <h2 className="h2 mb-4">Schedule a Call</h2>
        <p className="mb-4">Smartaqua Intro Call with Alastair Smart</p>
        <div className="max-h-[22rem] overflow-scroll">
          {renderModal && (
            <InlineWidget
              url="https://calendly.com/al-smartaqua/smartaqua-intro-call-with-alastair-smart?hide_event_type_details=1&hide_gdpr_banner=1"
              LoadingSpinner={Loader}
            />
          )}
        </div>
        <Button className={"mt-3"} onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default Calendly;

// add loading wheel and errors
// marrgins/ heights
