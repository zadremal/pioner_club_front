import styled from "styled-components";
import { colorAcc, colorDark } from "../index";

export const ArrowLeft = styled.img`
  height: 30px;
  width: 30px;
  padding: 0;
  position: absolute;
  top: 50%;
  left: -10px;
  z-index: 20;
  border-radius: 50%;
  transform: translateY(-50%) rotate(180deg);
  transition: all 0.1s ease-out;
  background-color: #fff;
  cursor: pointer;
  :hover {
    box-shadow: 0 0 10px #000;
  }
  :active {
    box-shadow: 0 0 20px ${colorDark};
  }
  :focus {
    box-shadow: 0 0 20px ${colorAcc};
  }
`;

export const ArrowRight = ArrowLeft.extend`
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
  left: auto;
`;
