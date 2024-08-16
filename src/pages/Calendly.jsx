import { useState, useEffect } from "react";
import { Form } from "react-router-dom";

const Calendly = () => {
  const [events, setEvents] = useState();

  useEffect(() => {
    // You'll fetch data here later
  }, []);

  return (
    <div>
      <h2>Schedule a Call</h2>
      <Form></Form>
    </div>
  );
};

export default Calendly;
