import { ComponentProps, ReactNode } from "react";

interface BoardSquareProps extends ComponentProps<"div"> {
  children?: ReactNode;
}

const BoardSquare = ({ children, ...props }: BoardSquareProps) => {
  return (
    <div {...props} className={"cursor-pointer relative bg-neutral-950"}>
      {children}
    </div>
  );
};

export default BoardSquare;
