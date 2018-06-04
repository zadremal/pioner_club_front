import styled from "styled-components";
import { media, colorPr } from "../../UI";

export const Image = styled.img`
  width: 100%;
  margin-top: 1em;
  ${media.lg`
    width: 70%;

  `};
`;

export const TextBlock = styled.div`
  padding: 2em 2em;
  background: #fff;
  box-shadow: 0 0 60px 0px rgba(0, 0, 0, 0.75);
  width: 100%;

  ${media.lg`
    padding: 3em 2em;
    transform: translateY(-50%);
    width: 40%;
    position: absolute;
    top: 50%;
    right: 0;
  `};
`;

export const PartyDate = styled.h4`
  background: ${colorPr};
  font-family: Intro, Arial, sans-serif;
  color: #fff;
  font-size: 1em;
  padding: 1em;
  text-align: center;
  margin: 0.5em 0;
  letter-spacing: 0.1rem;
  ${media.lg` 
    margin: 0.75em;
    font-size: 1.5em;
    position: absolute;
    right: 0;
    top: 0;
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
  margin: 1em auto;
  padding: 1em;
  width: 100%;
  box-shadow: 0 0 60px 0px rgba(0, 0, 0, 0.75);
  ${media.lg`
      padding: 2em 3em;
      margin: 2em auto;

  `};
`;

export const PartyStart = styled.h4`
  display: inline-block;
  margin-right: 1em;
  font-size: 1.5rem;
  font-family: Intro, Arial, sans-serif;
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
