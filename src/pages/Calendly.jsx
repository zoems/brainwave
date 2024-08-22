import { useState, useEffect } from "react";
import Button from "../components/Button";

const Calendly = ({ show, onClose }) => {
  if (!show) return null;
  const [events, setEvents] = useState();

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://assets.calendly.com/assets/external/widget.js";
  //   script.type = "text/javascript";
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  // const openCalendlyPopup = () => {
  //   window.Calendly.initPopupWidget({
  //     url: "https://calendly.com/your-calendly-link",
  //   });
  //   return false;
  // };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-n-8 p-6 rounded shadow-lg max-w-md w-full">
        <h2 className="text-lg font-bold mb-4">This is a pop-up</h2>
        <p className="mb-4">You can add any content you like here.</p>
        <h2>Schedule a Call</h2>
        {/* <button onClick={openCalendlyPopup}>Schedule with Calendly</button> */}
        <Button onClick={onClose}>Close</Button>
      </div>
    </div>
  );
};

export default Calendly;
