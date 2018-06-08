import styled from "styled-components";
import { colorAcc, colorDark, colorPr } from "../index";

export const ArrowLeft = styled.svg`
  height: 40px;
  width: 40px;
  padding: 0;
  position: absolute;
  top: 50%;
  left: 2px;
  z-index: 20;
  transform: translateY(-50%);
  transition: all 0.2s ease-out;
  background: none;
  cursor: pointer;
  fill: ${colorPr};
  :hover {
    fill: ${colorAcc};
  }
  :active {
    fill: ${colorDark};
  }
  :focus {
    fill: ${colorAcc};
  }
`;

export const ArrowRight = ArrowLeft.extend`
  right: 2px;
  top: 50%;
  transform: translateY(-50%) rotate(180deg);
  left: auto;
`;
