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
  console.log(facts);
  return (
    <div>
      <h2 className="h3">{title}</h2>
      {facts.map((fact, index) => (
        <p key={index}>{fact}</p>
      ))}
    </div>
  );
};
