import styled from "styled-components";
import { colorPr, colorAcc, colorDark } from "../index";
import MaskedInput from "react-maskedinput";

export const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  max-width: 400px;
`;

export const Heading = styled.h4`
  font-family: Intro, arial, sans-serif;
  font-size: 1.75rem;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 2rem;
  color: ${colorDark};
  transform: all 0.2s ease-out;
`;

export const Error = styled.h5`
  text-align: center;
  color: ${colorPr};
`;

export const Input = styled(MaskedInput)`
  display: block;
  background: transparent;
  position: relative;
  border: none;
  width: 100%;
  border-bottom: 3px solid ${colorPr};
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  margin-bottom: 1.75rem;
  outline: none;
  font-family: "Clear Sans", sans-serif;
  font-weight: 700;
  color: ${colorDark};
  transition: all 0.1s linear;
  &:focus {
    box-shadow: 0 4px 2px -2px rgba(235, 31, 6, 0.7);
  }
`;

export const Label = styled.label`
  color: ${colorAcc};
  font-size: 1.25rem;
  font-weight: 700;
`;

export const Submit = styled.div`
  text-align: center;
  margin-top: 1rem;
`;
