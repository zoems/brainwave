const Quote = ({ className, title, author }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5 `}
    >
      <div className="flex-1"></div>
      <h6 className="mb-1 text-base">{title}</h6>
      {author && <h5 className="italic text-base">{author}</h5>}

      <div className="flex items-center"></div>
    </div>
  );
};

export default Quote;
