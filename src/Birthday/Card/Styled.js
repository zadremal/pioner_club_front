import styled from "styled-components";
import { media } from "../../UI";

export const Card = styled.div`
  display: flex;
  flex-basis: 50%;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  height: 250px;
  background-image: url(${props => props.background});
  background-position: center;
  background-size: cover;
`;

export const Heading = styled.h3`
  max-width: 80%;
  font-family: Intro, Arial, sans-serif;
  font-size: 0.8em;
  text-align: center;
  text-shadow: 0 0 20px rgba(0, 0, 0, 1);
  color: #fff;

  ${media.md`
    max-width: 60%;
  `};

  ${media.lg`
    font-size: 1em;
  `};
`;
