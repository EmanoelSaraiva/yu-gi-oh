import React from "react";
import { CardStyled } from "./CardStyled";

interface CardProps {
  children: string;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <CardStyled src={children}></CardStyled>;
};

export default Card;
