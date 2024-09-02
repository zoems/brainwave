import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";

import Loader from "../components/design/Contact";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import Fishes from "../models/fishes";
import Section from "../components/Section";
import Header from "../components/Header";
import Button from "../components/Button";
import Footer from "../components/Footer";
import ButtonGradient from "../assets/svg/ButtonGradient";

// npm install @emailjs/browser

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setisLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("Take 01");

  const { alert, showAlert, hideAlert } = useAlert();

  // e calls set form 'spreads other properties' then the [target] value is updated with e.target.value this is how i get my form values from the DOM
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoading(true);
    setCurrentAnimation("Take 01");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Zoe Mawby Smart",
          from_email: form.email,
          to_email: "zoemsmart@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setisLoading(false);
        showAlert({
          show: true,
          text: "Message sent successfully!",
          type: "success",
        });

        setTimeout(() => {
          hideAlert();
          setCurrentAnimation("Take 01");
          setForm({ name: "", email: "", message: "" });
        }, [3000]);
      })
      .catch((error) => {
        setisLoading(false);
        setCurrentAnimation("Take 01");
        console.log(error);
        showAlert({
          show: true,
          text: "I didnt recieve your message",
          type: "danger",
        });
      });
  };

  const handleFocus = () => setCurrentAnimation(false); //in
  const handleBlur = () => setCurrentAnimation("Take 01"); //out

  return (
    <>
      <Header />
      <Section
        className="pt-[12rem] pb-[5.25rem] "
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="contact"
      >
        <div className="container relative flex lg:flex-row flex-col ">
          {alert.show && <Alert {...alert} />}
          <div className="min-w-[32rem]">
            <h1 className="h1">Get In Touch</h1>
            <form className="flex flex-col gap-7 mt-14" onSubmit={handleSubmit}>
              <label className="flex flex-col h6">
                Name
                <input
                  type="text"
                  name="name"
                  className="input text-n-4 rounded-lg p-3"
                  placeholder="Ali"
                  required
                  value={form.name}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </label>
              <label className="h6 flex flex-col">
                Email
                <input
                  type="email"
                  name="email"
                  className="input text-n-4 rounded-lg p-3"
                  placeholder="ali@email.com"
                  required
                  value={form.email}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </label>
              <label className="h6 flex flex-col">
                Your Message
                <textarea
                  name="message"
                  rows={4}
                  className="textarea text-n-4 rounded-lg p-3"
                  placeholder="Let me know how I can help you."
                  required
                  value={form.message}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </label>
              <Button
                type="submit"
                disabled={isLoading}
                onFocus={handleBlur}
                onBlur={handleBlur}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          <div className="absolute inset-0 -z-1 bg-radial-gradient from-[#0E3B8F] to-[#28206C]/0 to-70% pointer-events-none">
            {" "}
            <Canvas
              camera={{
                position: [1, 0, 0],
                fov: 75, //feel of view
                near: 0.1,
                far: 1000,
              }}
            >
              <directionalLight intensity={2.5} position={[0, 0, 1]} />
              <ambientLight intensity={1} />
              <pointLight position={[5, 10, 0]} intensity={2} />
              <Suspense fallback={<Loader />}>
                <Fishes
                  currentAnimation={currentAnimation}
                  position={[0.5, -1, 0]}
                  rotation={[12.6, -0.6, 0]}
                  scale={[2, 2, 2]}
                />
              </Suspense>
            </Canvas>
          </div>
          <div></div>
        </div>
      </Section>
      <Footer />
      <ButtonGradient />
    </>
  );
};

export default Contact;
