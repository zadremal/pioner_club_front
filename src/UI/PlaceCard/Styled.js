import styled, { keyframes } from "styled-components";

export const Card = styled.div`
  position: relative;
  padding-left: 40px;
  overflow: hidden;
  transition: all 2s ease-out;
  height: 70vh;
  cursor: pointer;
  z-index: 1;
  background-image: url(${props => props.background});
  background-size: cover;
  background-position: center;
  margin-bottom: 2rem;
`;

export const Overlay = styled.div`
  background-color: #fff;
  position: absolute;
  z-index: 3;
  opacity: 2;
  top: 0;
  bottom: 0;
  left: 0;
  width: 10%;
  transition: all 0.2s ease-out;
  ${Card}:hover & {
    width: 100%;
  }
`;

export const Image = styled.img`
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  width: 90%;
  transition: all 0.3s ease-out;
`;

export const TextBox = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  margin: 0;
  transform: translateY(-25%);
  transition: all 0.2s ease-out;
  z-index: 10;
  ${Card}:hover & {
    top: 40%;
  }
`;

export const Heading = styled.h1`
  color: #fff;
  text-shadow: 0 0 2px #000;
  font-size: 2rem;
  margin-bottom: 0;
  transition: all 0.8s ease-out;
  font-family: Intro, Arial, sans-serif;
  ${Card}:hover & {
    color: #000;
    text-shadow: none;
  }
`;

const textFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Description = styled.div`
  margin-top: 1rem;
  margin-left: 2.5rem;
  max-width: 300px;
  opacity: 0;
  ${Card}:hover & {
    animation-name: ${textFadeIn};
    animation-duration: .3s
    animation-delay: .5s;
    animation-fill-mode: forwards;
  }  
`;

export const Text = styled.p`
  font-size: 1rem;
  font-family: "Clear Sans", Arial;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #000;
`;
