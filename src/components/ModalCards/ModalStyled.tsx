import styled from "styled-components";

export const ModalStyled = styled.div`
  width: 100vw;
  height: 100%;
  background-color: rgba(1, 2, 3, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;

  img {
    width: 20rem;
  }

  button {
    height: 50px;
    position: absolute;
    bottom: 5rem;
  }
`;
