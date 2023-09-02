import React from "react";
import { ButtonStyled } from "./ButtonStyled";

interface ButtonComponentProps {
  action: () => void;
  children: React.ReactNode;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  action,
  children,
}) => {
  return <ButtonStyled onClick={action}>{children}</ButtonStyled>;
};

export default ButtonComponent;
