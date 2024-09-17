const Circle = () => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={"absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2"}
    >
      <circle
        className="circle"
        r="45"
        cx="50"
        cy="50"
        fill="transparent"
        stroke="white"
        strokeWidth="10"
      />
    </svg>
  );
};

export default Circle;
