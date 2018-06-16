import styled from "styled-components";
import { media, colorPr, colorAcc } from "./index";

const Button = styled.button`
  position: relative
  z-index: 1;
  padding: .5em .5em;
  text-transform uppercase;
  letter-spacing: .15em;
  font-size: .8em;
  font-weight: 700;
  background-color: transparent;
  transition: all .2s ease;
  border: 3px solid #fff;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  color: #fff;

  &:hover{
    text-shadow: none;
    color: #fff;
  }

  &:focus{
    box-shadow: 0 0 0 2px rgba(235, 31, 6, 0.7);
  }

  ${media.sm`
    padding: .65em 1.75em;
    font-size: .9em;
  `}; 
`;

const ButtonUp = Button.extend`
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    z-index: -1;
  }

  &:hover:before {
    top: auto;
    bottom: 0;
    height: 100%;
  }
`;

const ButtonRight = Button.extend`
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 0;
    z-index: -1;
    height: 100%;
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  }

  &:hover:before {
    right: auto;
    left: 0;
    width: 100%;
  }
`;

export const ButtonUpWhite = ButtonUp.extend`
  color: #fff;
  border-color: #fff;

  &:hover {
    color: ${colorPr};
  }

  &:before {
    background-color: #fff;
  }
`;

export const ButtonUpPr = ButtonUp.extend`
  color: ${props => (props.contrast ? colorPr : "#fff")};
  border-color: ${colorPr};

  &:hover {
    color: #fff;
  }

  &:before {
    background-color: ${colorPr};
  }
`;

export const ButtonUpAcc = ButtonUp.extend`
  color: ${props => (props.contrast ? colorAcc : "#fff")};
  border-color: ${colorAcc};

  &:hover {
    color: #fff;
  }

  &:before {
    background-color: ${colorAcc};
  }
`;

export const ButtonRightPr = ButtonRight.extend`
  color: ${props => (props.contrast ? colorPr : "#fff")};
  border-color: ${colorPr};

  &:hover {
    color: #fff;
  }

  &:before {
    background-color: ${colorPr};
  }
`;

export const ButtonRightAcc = ButtonRight.extend`
  color: ${props => (props.contrast ? colorAcc : "#fff")};
  border-color: ${colorAcc};

  &:hover {
    color: #fff;
  }

  &:before {
    background-color: ${colorAcc};
  }
`;
