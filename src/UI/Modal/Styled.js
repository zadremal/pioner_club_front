import styled from "styled-components";

export const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 50%;
  background: none;

  padding: 0;
  position: absolute;
  top: 40px;
  right: 40px;
`;

export const Image = styled.img`
  height: 40px;
  width: 40px;
  cursor: pointer;
  outline: none;
  margin: 0;
  border-radius: 50%;
  transition: all 0.4s ease-out;
  ${Button}:focus & {
    box-shadow: rgba(0, 0, 0, 0.8) 0 0 10px;
  }
  ${Button}:hover & {
    transform: rotate(180deg);
    border-collapse: collapse;
    box-shadow: rgba(0, 0, 0, 0.8) 0 0 10px;
  }
`;
