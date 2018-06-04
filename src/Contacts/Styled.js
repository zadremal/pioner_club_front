import styled from "styled-components";
import { media } from "../UI";

export const Map = styled.div`
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
  text-align: center;
  ${media.lg`
    text-align: left;
  `} ${media.lg`
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

export const Contact = styled.h4`
  margin: 1em;
`;
