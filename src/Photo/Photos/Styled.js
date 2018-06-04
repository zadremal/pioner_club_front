import styled from "styled-components";
import { colorPr, colorAcc } from "../../UI";

export const Button = styled.div`
  padding: 0.8em 1em;
  text-transform: uppercase;
  border: none;
  background-color: ${colorPr};
  transition: all 0.2s ease-out;
  display: inline-block;
  text-decoration: none;
  color: #fff;
  margin-bottom: 1em;
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
  line-height: 56px;
  margin-left: 1em;
  font-family: Intro, Arial, sans-serif;
`;
