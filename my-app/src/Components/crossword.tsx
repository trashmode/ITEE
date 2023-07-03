import React from "react";
import crossword from "./cross.png"

interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  width: string
  cursor: string;
}

const Button: React.FC<Props> = ({ 
    border,
    color,
    children,
    height,
    onClick, 
    width,
    cursor
  }) => { 
  return (
    <button 
      onClick={onClick}
      style={{
         border,
         height,
         width,
         cursor: cursor,
         backgroundImage: `url(${crossword})`
      }}
    >
    {children}
    </button>
  );
}

export default Button;