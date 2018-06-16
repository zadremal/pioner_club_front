import styled from "styled-components";

export const Button = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: none;
  outline: none;
`;

export const Icon = styled.img`
  height: 40px;
  width: 40px;
  margin: 0;
  border-radius: 50%;
  transition: all 0.4s ease-out;
  cursor: pointer;
  outline: none;

  ${Button}:focus & {
    box-shadow: rgba(0, 0, 0, 0.8) 0 0 10px;
  }

  ${Button}:hover & {
    transform: rotate(180deg);
    border-collapse: collapse;
    box-shadow: rgba(0, 0, 0, 0.8) 0 0 10px;
  }
`;
