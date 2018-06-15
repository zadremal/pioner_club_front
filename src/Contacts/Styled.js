import styled from "styled-components";
import { media } from "../UI";

export const Map = styled.div`
  width: 100%;
  margin-top: 1em;

  ${media.lg`
    width: 70%;
  `};
`;

export const Feedback = styled.div`
  margin: 1em auto;
  padding: 1em;
  width: 100%;
  transition: all 0.5s ease-out;
  box-shadow: 0 0 60px 0px rgba(0, 0, 0, 0.75);

  ${media.lg`
      padding: 2em 3em;
      margin: 2em auto;
  `};
`;

export const TextBlock = styled.div`
  width: 100%;
  padding: 2em 2em;
  text-align: center;
  background: #fff;
  box-shadow: 0 0 60px 0px rgba(0, 0, 0, 0.75);

  ${media.lg`
    text-align: left;
  `};

  ${media.lg`
    position: absolute;
    right: 0;
    top: 50%;
    width: 40%;
    padding: 3em 2em;
    transform: translateY(-50%);
  `};
`;

export const Wrap = styled.div`
  position: relative;
`;

export const Contact = styled.h4`
  margin: 1em;
`;

export const FormBox = styled.div`
  padding-top: 2rem;
`;
