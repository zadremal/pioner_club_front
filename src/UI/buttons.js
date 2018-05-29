import styled from "styled-components";
import { media } from "./index";

export const Button = styled.button`
  color: ${props => (props.contrast ? props.color : "#fff")};
  background-color: transparent;
  text-transform uppercase;
  letter-spacing: .15rem;
  padding: .5rem .5rem;
  font-size: .8rem;
  cursor: pointer;
  position: relative
  border: 3px solid ${props => props.color};
  font-weight: 700;
  overflow: hidden;
  transition: all .2s ease;
  z-index: 1;
  outline: none;
  &:hover{
    text-shadow: none;
    color: #fff;
  }
  &:focus{
    box-shadow: 0 0 0 2px rgba(235, 31, 6, 0.7);
  }


  ${media.sm`
  padding: .65rem 1.75rem;
  font-size: .9rem;
  `}
`;

export const ButtonUp = Button.extend`
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: ${props => props.color};
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    z-index: -1;
  }
  &:hover:before {
    top: auto;
    height: 100%;
    bottom: 0;
  }
`;

export const ButtonRight = Button.extend`
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 0;
    height: 100%;
    background-color: ${props => props.color};
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    z-index: -1;
  }
  &:hover:before {
    right: auto;
    width: 100%;
    left: 0;
  }
`;

export const ButtonUpWhite = ButtonUp.extend`
  color: #fff;
  border-color: #fff;
  &:hover {
    color: rgba(235, 31, 6, 1);
  }
  &:before {
    background-color: #fff;
  }
`;
