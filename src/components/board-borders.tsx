import { useEffect, useRef } from "react";

const BoardBorders = () => {
  const borders = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const drawBorders = setTimeout(() => {
      borders.current!.style.backgroundSize = "99.7% 99.7%";
    }, 500);

    return () => {
      clearTimeout(drawBorders);
    };
  }, []);

  return (
    <div
      ref={borders}
      className={
        "bg-gradient-to-r from-white to-white bg-no-repeat absolute h-full w-full top-0 left-0 bg-[length:0px_0px] bg-center transition-all duration-1000"
      }
    ></div>
  );
};

export default BoardBorders;
