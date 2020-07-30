import styled from "styled-components";
import { media, colorPr } from "../UI";

export const Image = styled.img`
  margin-top: 1em;
  width: 100%;

  ${media.lg`
    width: 70%;
  `};
`;

export const TextBlock = styled.div`
  width: 100%;
  padding: 2em;
  background: #fff;
  box-shadow: 0 0 60px 0px rgba(0, 0, 0, 0.75);

  ${media.lg`
    position: absolute;
    top: 50%;
    right: 0;
    width: 40%;
    padding: 3em 2em;
    transform: translateY(-50%);
  `};
`;

export const PartyDate = styled.h4`
  margin: 0.5em 0;
  padding: 1em;
  text-align: center;
  font-family: Intro, Arial, sans-serif;
  font-size: 1em;
  letter-spacing: 0.1rem;
  background-color: ${colorPr};
  color: #fff;

  ${media.lg` 
    position: absolute;
    top: 0;
    right: 0;
    margin: 0.75em;
    font-size: 1.5em;
  `};
`;

export const Wrap = styled.div`
  position: relative;
`;

export const CardWrap = styled.div`
  height: 250px;
  padding: 0.5em;
`;

export const Carousel = styled.div`
  font-size: 0.9em;
`;

export const Description = styled.div`
  width: 100%;
  margin: 1em auto;
  padding: 1em;
  box-shadow: 0 0 60px 0px rgba(0, 0, 0, 0.75);

  ${media.lg`
      margin: 2em auto;
      padding: 2em 3em;
  `};
`;

export const PartyStart = styled.h4`
  display: inline-block;
  margin-right: 1em;
  font-family: Intro, Arial, sans-serif;
  font-size: 1.5rem;
`;

export const PartyPrice = PartyStart.extend`
  display: block;
`;

export const Enterance = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.7);

  ${media.md`
    max-width: 80%;
  `};

  & h5 {
    font-size: 1.2em;
  }
`;

export const Button = styled.div`
  text-align: center;

  ${media.lg`
      text-align: left;
  `};
`;

export const Price = styled.h3`
  position: absolute;
  right: 0;
  left: 0;
  top: 50%;
  transform: translateY(50%);
  margin: 0.2rem auto;
  width: 100%;
  max-width: 400px;
  color: #fff;
  text-align: center;
  font-size: 2rem;
  font-family: Intro, Arial, sans-serif;
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.9);

  ${media.lg`
    font-size: 3rem;
    bottom: 20px;
    right: 25%;
    top: inherit;
    left: inherit;
    transform: translateY(0%);
    margin: 0.2rem;
    text-align: left;
  `};
`;
