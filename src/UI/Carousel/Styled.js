import styled from "styled-components";
import { colorAcc, colorDark, colorPr } from "../index";

export const ArrowLeft = styled.svg`
  position: absolute;
  z-index: 20;
  top: 50%;
  left: 2px;
  height: 40px;
  width: 40px;
  padding: 0;
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
  top: 50%;
  right: 2px;
  left: auto;
  transform: translateY(-50%) rotate(180deg);
`;
