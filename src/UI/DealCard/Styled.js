import styled from "styled-components";
import { ButtonUpWhite } from "../buttons";
import { colorPr, media } from "../index";

export const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  background-image: url(${props => props.background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${colorPr};
  cursor: pointer;
`;

export const Button = ButtonUpWhite.extend`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  transition: all 0.2s ease-out;
  opacity: 0;

  ${Card}:hover & {
    transform: translateX(-50%) translateY(20px);
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(235, 31, 6, 0.4);
  transition: opacity 0.2s ease-out;
  opacity: 0;

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
      right: 10px;
      bottom: 10px;
      left: 10px;
      opacity: 1;
    }
  }
`;

export const Heading = styled.h3`
  display: block;
  text-transform: uppercase;
  font-size: 1em;
  font-family: Intro, sans-serif, arial;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease;
  color: #fff;

  ${Card}:hover & {
    transform: translateY(-20px);
  }

  ${media.lg`
    font-size: 1.25em;
  `};
`;

export const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  width: 80%;
  padding: 0.5em 1em;
  background-color: rgba(235, 31, 6, 0.6);
  transform: translateY(-50%) translateX(-50%);

  ${Card}:hover & {
    background-color: transparent;
  }
`;

export const Wrap = styled.div`
  padding: 0 1rem;
`;
