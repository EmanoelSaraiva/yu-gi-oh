import styled from "styled-components";

export const CardStyled = styled.img`
  transition: transform 0.3s, box-shadow 0.3s;
  margin: 2rem;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
`;
