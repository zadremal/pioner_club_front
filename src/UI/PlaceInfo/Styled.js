import styled from "styled-components";
import { media } from "../index";

export const Card = styled.div`
  padding: 1em;
  width: 100%;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.5);
  margin: 1em 0;
  & h5 {
    font-size: 1em;
  }
  ${media.lg`

    margin: 1em;
  `};
`;

export const Heading = styled.h4`
  font-family: Intro, Arial, sans-serif;
  font-size: 1.5em;
  letter-spasing: 0.2em;
`;
