const ButtonGradient = () => {
  return (
    <svg className="block" width={0} height={0}>
      <defs>
        <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FF5722" />
          <stop offset="100%" stopColor="#022550" />
        </linearGradient>
        <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#03A9F4" />
          <stop offset="100%" stopColor="#022550" />
        </linearGradient>
        <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#79FFF7" />
          <stop offset="100%" stopColor="#FF5722" />
        </linearGradient>
        <linearGradient
          id="btn-right"
          x1="14.635%"
          x2="14.635%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#79FFF7" />
          <stop offset="100%" stopColor="#03A9F4" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ButtonGradient;
