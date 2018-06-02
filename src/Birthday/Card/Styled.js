import styled from "styled-components";
import { media } from "../../UI";

export const Card = styled.div`
  height: 250px;
  background-image: url(${props => props.background});
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  flex-basis: 50%;
`;

export const Heading = styled.h3`
  font-family: Intro, Arial, sans-serif;
  font-size: 0.8em;
  text-align: center;
  max-width: 80%;
  color: #fff;
  text-shadow: 0 0 20px rgba(0, 0, 0, 1);

  ${media.md`
    max-width: 60%;
  `};

  ${media.lg`
    font-size: 1em;
  `};
`;
