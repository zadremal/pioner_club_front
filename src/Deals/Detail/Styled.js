import styled from "styled-components";
import { media } from "../../UI";

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
