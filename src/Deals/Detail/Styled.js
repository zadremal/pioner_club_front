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
  width: 100%;
  padding: 2em 2em;
  background-color: #fff;
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
