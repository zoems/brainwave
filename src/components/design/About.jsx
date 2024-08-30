import brackets from "../../assets/svg/Brackets";

export const TagLine = ({ className, children }) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
};

export const Facts = ({ facts, title }) => {
  return (
    <div className="flex flex-col flex-grow ">
      <h2 className="h4 mb-4">{title}</h2>
      <div className="flex flex-col justify-between flex-grow">
        {facts.map((fact, index) => (
          <p key={index} className="pb-4 pt-15 body-2 text-n-3">
            {fact}
          </p>
        ))}
      </div>
    </div>
  );
};
