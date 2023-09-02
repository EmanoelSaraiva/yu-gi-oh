import React from "react";
import ContainerFooter from "./FooterStyle";

const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <ContainerFooter>
        <h4>Desenvolvido por:</h4>
        <a href="https://www.linkedin.com/in/emanoel-saraiva/" target="_blank">
          Emanoel Saraiva
        </a>
        <a
          href="https://www.linkedin.com/in/leandro-fernandes-nascimento-ba990a246/"
          target="_blank"
        >
          Leandro Fernandes
        </a>
        <a
          href="https://www.linkedin.com/in/lucas-pereira-sikinowski-a05347233/"
          target="_blank"
        >
          Lucas Sikinwoski
        </a>
        <a href="https://www.linkedin.com/in/marceledutra/" target="_blank">
          Marcele Dutra
        </a>
        <a
          href="https://www.linkedin.com/in/thainara-wulfert-4350601a5/"
          target="_blank"
        >
          Thainara Wulfert.
        </a>
      </ContainerFooter>
    </React.Fragment>
  );
};

export default Footer;
