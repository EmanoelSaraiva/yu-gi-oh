/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import ButtonComponent from "../components/Button";
import CardImage from "../assets/Cards.svg";
import Main from "../components/Main/Main";
import { characters } from "../data/characters";
import Modal from "../components/ModalCards/Modal";
import Card from "../components/Card/Card";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const data = characters;
  const [selectedCharacter, setSelectedCharacter] = useState<any>(null);
  // Armazenar o personagem selecionado

  const openModal = (character: any) => {
    setSelectedCharacter(character);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleClick = () => {
    const character = characters[Math.floor(Math.random() * characters.length)];
    navigate(`/description/${character.name}`);
  };

  return (
    <>
      <Header>
        <img className="logo" src={"/public/Component_6.svg"} alt="logo" />
      </Header>
      <Main>
        {data.map((character, index) => (
          <div key={index} onClick={() => openModal(character)}>
            <Card>{CardImage}</Card>
          </div>
        ))}
      </Main>
      <Main>
        <ButtonComponent action={handleClick}>
          <span>Descubra</span>
        </ButtonComponent>
      </Main>
      {modalOpen && selectedCharacter && (
        <Modal isOpen={modalOpen} onClose={closeModal}>
          <div>
            <img src={selectedCharacter.img} alt="" />
          </div>
        </Modal>
      )}

      <Footer />
    </>
  );
};

export default Home;
