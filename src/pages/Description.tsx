import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import ButtonComponent from "../components/Button";
import Main from "../components/Main/Main";
import { characters } from "../data/characters";
import { Typography } from "../components/Typography/Typography";
import { CardDescription } from "../components/CardDescription/CardDescription";

const Description: React.FC = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const character = characters.find((i) => i.name === name);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <Header>
        <img className="logo" src={"/public/Component_6.svg"} alt="logo" />
      </Header>
      <Main>
        <CardDescription src={character?.img}></CardDescription>
        <Typography>{character?.description}</Typography>
      </Main>
      <Main>
        <ButtonComponent action={handleClick}>
          <span>Voltar</span>
        </ButtonComponent>
      </Main>
      <Footer />
    </>
  );
};

export default Description;
