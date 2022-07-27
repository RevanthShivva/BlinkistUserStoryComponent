import { Button  } from "@mui/material";
import React from "react";

interface Props {
  startIcon?: React.ReactNode,
  endIcon?: React.ReactNode,
  variant?: string,
  style?: React.CSSProperties,
  children?: React.ReactNode,
  onClick?: () => void;
  className?: string;
}

 const ButtonComponent = (props: Props) => {
  const { startIcon, endIcon, style, children, onClick, className } = props;
  return (
      <Button 
      startIcon={startIcon}
      endIcon={endIcon}
      style={style}
      onClick={onClick}
      className={className}>
          {children}
      </Button>
  );
} ;

export default ButtonComponent;