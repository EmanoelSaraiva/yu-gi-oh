import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import ButtonComponent from "../components/Button";
import CardImage from "../assets/Cards.svg";
import Main from "../components/Main/Main";
import { Card } from "../components/Card/CardStyled";
import { characters } from "../data/characters";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    const character = characters.sort(() => 0.5 - Math.random());
    const randomCharacter = character[0];
    navigate(`/description/${randomCharacter.name}`);
    console.log(character);
    // navigate("/description")
  };
  return (
    <>
      <Header>
        <img className="logo" src={"/public/Component_6.svg"} alt="logo" />
      </Header>
      <Main>
        <Card src={CardImage} alt="card" />
        <Card src={CardImage} alt="card" />
        <Card src={CardImage} alt="card" />
        <Card src={CardImage} alt="card" />
        <Card src={CardImage} alt="card" />
      </Main>
      <Main>
        <ButtonComponent action={handleClick}>
          <span>Descubra</span>
        </ButtonComponent>
      </Main>

      <Footer />
    </>
  );
};

export default Home;
