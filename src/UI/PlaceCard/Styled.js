import styled, { keyframes } from "styled-components";

export const Card = styled.div`
  position: relative;
  z-index: 1;
  height: ${props => (props.narrow ? "30vh" : "70vh")};
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-left: 40px;
  background-image: url(${props => props.background});
  background-size: cover;
  background-position: center;
  transition: all 0.2s ease-out;
  cursor: pointer;
  overflow: hidden;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
  width: 10%;
  background-color: #fff;
  transition: all 0.2s ease-out;

  ${Card}:hover & {
    width: 100%;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  width: 90%;
  transition: all 0.3s ease-out;
`;

export const TextBox = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 10;
  margin: 0;
  transform: translateY(-25%);
  transition: all 0.2s ease-out;

  ${Card}:hover & {
    top: 40%;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 0;
  font-family: Intro, Arial, sans-serif;
  font-size: 2rem;
  text-shadow: 0 0 16px #000;
  transition: all 0.8s ease-out;
  color: #fff;

  ${Card}:hover & {
    text-shadow: none;
    color: #000;
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
  max-width: 300px;
  margin-top: 1rem;
  margin-left: 2.5rem;
  opacity: 0;
  
  ${Card}:hover & {
    animation-name: ${textFadeIn};
    animation-duration: .3s
    animation-delay: .5s;
    animation-fill-mode: forwards;
  }  
`;

export const Text = styled.p`
  margin-bottom: 1.5rem;
  font-family: "Clear Sans", Arial;
  font-size: 1rem;
  font-weight: 700;
  color: #000;
`;
