import styled from "styled-components";
import { ButtonUpWhite } from "../buttons";
import { colorPr, media } from "../index";

export const Card = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: relative;
  text-align: center;
  background-image: url(${props => props.background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${colorPr};
`;

export const Button = ButtonUpWhite.extend`
  transition: all 0.2s ease-out;
  opacity: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  ${Card}:hover & {
    opacity: 1;
    transform: translateX(-50%) translateY(20px);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  opacity: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: opacity 0.2s ease-out;
  background-color: rgba(235, 31, 6, 0.4);
  &:after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    border: 1px solid #fff;
    transition: all 0.175s ease-out;
  }
  ${Card}:hover & {
    opacity: 1;
    &:after {
      top: 10px;
      left: 10px;
      bottom: 10px;
      right: 10px;
      opacity: 1;
    }
  }
`;

export const Heading = styled.h3`
  display: block;
  font-size: 1rem;
  text-transform: uppercase;
  font-family: Intro, sans-serif, arial;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.6);
  color: #fff;
  transition: all 0.2s ease;

  ${Card}:hover & {
    transform: translateY(-20px);
  }

  ${media.lg`
    font-size: 1.25rem;
  `};
`;

export const Text = styled.div`
  position: relative;
  z-index: 2;
  padding: 0.5rem 1rem;
  background-color: rgba(235, 31, 6, 0.6);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 80%;
  ${Card}:hover & {
    background-color: transparent;
  }
`;

export const Wrap = styled.div`
  padding: 0 1rem;
`;
