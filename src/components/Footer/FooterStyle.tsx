import { styled } from "styled-components";

const ContainerFooter = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  > a {
    color: #dddddd;
    text-decoration: none;
    margin-left: 10px;
  }
  > h4 {
    color: #f8f8f8;
    font-size: 16px;
  }
`;
export default ContainerFooter;
