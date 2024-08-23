import { InlineWidget } from "react-calendly";
import { useEffect, useState } from "react";

import Button from "../components/Button";
import Loader from "../components/design/Loader";

const Calendly = ({ show, onClose }) => {
  const [renderModal, setRenderModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (show) {
      setIsLoading(true);
      setRenderModal(true);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="z-10 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center mt-20">
      <div className="bg-n-8 p-6 rounded shadow-lg ">
        <h2 className="h2 mb-4">Smartaqua Intro Call with Alastair Smart</h2>
        <p className="mb-4">Schedule a Call</p>
        {isLoading && <Loader />}
        {renderModal && (
          <InlineWidget url="https://calendly.com/al-smartaqua/smartaqua-intro-call-with-alastair-smart?hide_event_type_details=1&hide_gdpr_banner=1" />
        )}
        <Button onClick={onClose}>Close</Button>
      </div>
    </div>
  );
};

export default Calendly;

// add loading wheel and errors
// marrgins/ heights
