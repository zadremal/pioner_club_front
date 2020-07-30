import styled from "styled-components";
import { colorDark, colorPr, media } from "../UI/";

export const Content = styled.div`
  max-width: 60%;
  text-align: center;
`;

export const Detail = styled.p`
  margin: 2rem 0;
  color: #fff;
`;

export const DealImg = styled.img`
  margin-top: 1.5rem;
  height: 90px;
`;

export const DealDescription = styled.h3`
  padding: 0 2rem;
  font-family: Intro, sans-serif;
  font-size: 0.9rem;
  color: ${colorDark};

  ${media.md`
    padding: 0 1rem;
    font-size: 1rem;
    `};

  ${media.lg`
    padding: 0 2rem;
  `};
`;

export const Highlighted = styled.span`
  color: ${colorPr};
`;

export const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2em;
`;

export const Form = styled.form`
  margin: 0 auto;
  max-width: 600px;
`;

export const Input = styled.input`
  width: 100%;
  display: block;
  margin: 1rem 0;
  padding: 1rem 2rem;
  background: none;
  border: 1px solid ${colorDark};
`;

export const Submit = Input.extend`
  text-transform: uppercase;
  text-align: center;
  background: ${colorPr};
  border: 1px solid ${colorPr};
  color: #fff;
`;

export const Special = styled.div`
  padding: 10%;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.9);
`;

export const AllInclusiveCard = styled.div`
  color: #fff;
  border: 2px solid ${colorPr};
  font-size: 0.5em;
  padding: 0.25em 0.5em;
  max-width: 400px;
  margin: 20px auto;

  ${media.md`
    font-size: 0.5em;
    padding: 0.5em .75em;
    `};

  ${media.lg`
    font-size: 0.75em;
    padding: 0.5em 1.5em;
  `};

  h3 {
    margin: 0.5em 0;
    font-size: 2em;
    span {
      color: ${colorPr};
    }
  }

  span {
    font-size: 1.5em;
  }
`;
