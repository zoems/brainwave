import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";

import Loader from "./components/design/Contact";
import useAlert from "./hooks/useAlert";
import Alert from "./components/Alert";
import Fishes from "./models/fishes";
import Section from "./components/Section";
import Header from "./components/Header";
import Button from "./components/Button";
import ButtonGradient from "./assets/svg/ButtonGradient";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setisLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const { alert, showAlert, hideAlert } = useAlert();

  // e calls set form 'spreads other properties' then the [target] value is updated with e.target.value this is how i get my form values from the DOM
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoading(true);
    setCurrentAnimation("hit");

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
          setCurrentAnimation("idle");
          setForm({ name: "", email: "", message: "" });
        }, [3000]);
      })
      .catch((error) => {
        setisLoading(false);
        setCurrentAnimation("idle");
        console.log(error);
        showAlert({
          show: true,
          text: "I didnt recieve your message",
          type: "danger",
        });
      });
  };

  const handleFocus = () => setCurrentAnimation("walk"); //in
  const handleBlur = () => setCurrentAnimation("idle"); //out

  return (
    <>
      <Header />
      <Section>
        <div className="container flex lg:flex-row flex-col ">
          {alert.show && <Alert {...alert} />}
          <div className="min-w-[32rem]">
            <h1 className="h1">Get In Touch</h1>
            <form className="flex flex-col gap-7 mt-14" onSubmit={handleSubmit}>
              <label className="flex flex-col h6 text-n-1">
                Name
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="John"
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
                  className="input rounded-md p-3"
                  placeholder="Jdoe@email.com"
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
                  className="textarea"
                  placeholder="Let me know how I can help you!"
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
          <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
            <Canvas
              camera={{
                position: [0, 0, 5],
                fov: 75, //feel of view
                near: 0.1,
                far: 1000,
              }}
            >
              <directionalLight intensity={2.5} position={[0, 0, 1]} />
              <ambientLight intensity={0.5} />
              <pointLight position={[5, 10, 0]} intensity={2} />
              <Suspense fallback={<Loader />}>
                <Fishes
                  currentAnimation={currentAnimation}
                  position={[0.5, 0.35, 0]}
                  rotation={[12.6, -0.6, 0]}
                  scale={[1, 1, 1]}
                />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </Section>
      <ButtonGradient />
    </>
  );
};

export default Contact;
