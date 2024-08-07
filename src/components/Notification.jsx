const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5 `}
    >
      <div className="flex-1"></div>
      <h6 className="mb-1 font-semibold text-base">{title}</h6>
      <div className="flex items-center"></div>
    </div>
  );
};

export default Notification;
