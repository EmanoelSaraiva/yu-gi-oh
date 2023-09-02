import React from "react";
import { HeaderStyled } from "./HeaderStyled";

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <HeaderStyled>{children}</HeaderStyled>;
};

export default Header;
