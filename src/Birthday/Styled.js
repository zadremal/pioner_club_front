import styled from "styled-components";
import { colorDark, colorPr, media } from "../UI/";

export const Content = styled.div`
  max-width: 60%;
  text-align: center;
`;

export const Detail = styled.p`
  color: #fff;
  margin: 2rem 0;
`;

export const DealImg = styled.img`
  height: 90px;
  margin-top: 1.5rem;
`;

export const DealDescription = styled.h3`
  color: ${colorDark};
  font-family: Intro, sans-serif;
  font-size: 0.9rem;
  padding: 0 2rem;

  ${media.md`
    font-size: 1rem;
    padding: 0 1rem;
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
  padding: 1rem 2rem;
  background: none;
  border: 1px solid ${colorDark};
  margin: 1rem 0;
`;
export const Submit = Input.extend`
  background: ${colorPr};
  border: 1px solid ${colorPr};
  text-transform: uppercase;
  color: #fff;
  text-align: center;
`;

export const Special = styled.div`
  padding: 10%;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.9);
`;
