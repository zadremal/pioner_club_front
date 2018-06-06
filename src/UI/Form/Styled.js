import styled from "styled-components";
import { colorPr, colorDark, media } from "../index";
import InputMask from "react-input-mask";

export const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  max-width: 400px;
`;

export const Heading = styled.h4`
  font-family: Intro, arial, sans-serif;
  font-size: 1rem;
  max-width: 400px;
  margin: 1.25rem auto;
  text-align: center;
  color: ${colorDark};
  ${media.md`
    font-size: 1.5rem;
  `};
`;

export const Error = styled.h5`
  text-align: center;
  color: ${colorPr};
`;

export const Input = styled(InputMask)`
  display: block;
  background: transparent;
  position: relative;
  border: none;
  width: 100%;
  border-bottom: 3px solid ${colorDark};
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  margin-bottom: 1.75rem;
  outline: none;
  font-family: "Clear Sans", sans-serif;
  font-weight: 700;
  color: ${colorDark};
  transition: all 0.1s linear;
  text-transform: ${props => props.transform};
  &:focus {
    box-shadow: 0 4px 2px -2px rgba(235, 31, 6, 0.8);
    border-bottom: 3px solid rgba(235, 31, 6, 1);
  }
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 700;
  color: ${colorDark};
`;

export const Submit = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

export const Response = styled.div`
  text-align: center;
  font-size: 1.25rem;
  padding: 3em;
  display: flex;
  justify-content: center;
`;
