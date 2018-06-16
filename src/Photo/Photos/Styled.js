import styled from "styled-components";
import { colorPr, colorAcc } from "../../UI";

export const Button = styled.div`
  padding: 0.8em 1em;
  display: inline-block;
  margin-bottom: 1em;
  text-transform: uppercase;
  text-decoration: none;
  background-color: ${colorPr};
  border: none;
  transition: all 0.2s ease-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: ${colorAcc};
  }
`;

export const Icon = styled.img`
  height: 20px;
  margin: 0;
`;

export const Breadcrump = styled.h4`
  display: inline-block;
  margin-left: 1em;
  line-height: 56px;
  font-family: Intro, Arial, sans-serif;
`;
