import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-3 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <li key={item.id}>
              <a
                href={item.url}
                target={item.notarget ? "_self" : "_blank"}
                className="flex items-center justify-center w-30 h-30 px-6 bg-n-7 rounded-full transition-colors hover:bg-n-6"
              >
                {item.iconUrl && (
                  <img
                    src={item.iconUrl}
                    width={16}
                    height={16}
                    aria-hidden="true"
                  />
                )}
                <p className="p-2 text-xs text-n-3">{item.title}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
