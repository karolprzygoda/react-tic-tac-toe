const CheckMark = () => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={"absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2"}
    >
      <line
        className="line"
        x1="0"
        y1="0"
        x2="100"
        y2="100"
        stroke="white"
        strokeWidth="10"
      />
      <line
        className="line line2"
        x1="100"
        y1="0"
        x2="0"
        y2="100"
        stroke="white"
        strokeWidth="10"
      />
    </svg>
  );
};

export default CheckMark;
