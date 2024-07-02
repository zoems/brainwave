const FishlineSvg = ({ className, colorWay }) => {
  let startColor, endColor, gradientId;

  switch (colorWay) {
    case "colorway1":
      startColor = "#DD734F";
      endColor = "#1A1A32";
      gradientId = "gradient1";
      break;
    case "colorway2":
      startColor = "#B9AEDF";
      endColor = "#1A1A32";
      gradientId = "gradient2";
      break;
    case "colorway3":
      startColor = "#88E5BE";
      endColor = "#1A1A32";
      gradientId = "gradient3";
      break;
    default:
      startColor = "#ffffff";
      endColor = "#ffffff";
      gradientId = "gradientDefault";
      break;
    case "green":
      startColor = "#88E5BE";
      endColor = "#88E5BE";
      gradientId = "green";
      break;
    case "orange":
      startColor = "#ff7e57";
      endColor = "#ff7e57";
      gradientId = "orange";
      break;
    case "purple":
      startColor = "#B9AEDF";
      endColor = "#B9AEDF";
      gradientId = "purple";
      break;
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={startColor} />
          <stop offset="100%" stopColor={endColor} />
        </linearGradient>
      </defs>
      <path
        d="M2 15C3.83333 12.3333 8.8 7 14 7C14.9226 7 15.7539 7.10492 16.5 7.28685M2 9C3.83333 11.6667 8.8 17 14 17C14.9226 17 15.7539 16.8951 16.5 16.7132M16.5 16.7132C19.9595 15.8697 22 12 22 12C22 12 19.9595 8.13032 16.5 7.28685M16.5 16.7132C15.5 15.1667 14.1 11.1163 16.5 7.28685M12 10.5C11.5 11 10.8 12.3 12 13.5"
        stroke={`url(#${gradientId})`}
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="M18 11H18.001"
        stroke={`url(#${gradientId})`}
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
};

export default FishlineSvg;
