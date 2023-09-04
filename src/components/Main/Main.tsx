import React from "react";
import MainStyled from "./MainStyled";

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <React.Fragment>
      <MainStyled>{children}</MainStyled>
    </React.Fragment>
  );
};

export default Main;
