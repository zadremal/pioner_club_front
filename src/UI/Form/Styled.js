import styled from "styled-components";
import InputMask from "react-input-mask";
import DatePicker from "react-date-picker";
import { colorPr, colorDark, media, colorAcc } from "../index";

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

export const Heading = styled.h4`
  max-width: 400px;
  margin: 1.25rem auto;
  text-align: center;
  font-family: Intro, arial, sans-serif;
  font-size: 1rem;
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
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 0.5rem 1rem;
  text-transform: ${props => props.transform};
  font-family: "Clear Sans", sans-serif;
  font-size: 1.25rem;
  background: transparent;
  border: none;
  border-bottom: 3px solid ${colorDark};
  outline: none;
  transition: all 0.1s linear;
  color: #000;

  &:focus {
    box-shadow: 0 4px 2px -2px rgba(235, 31, 6, 0.8);
    border-bottom: 3px solid rgba(235, 31, 6, 1);
  }
`;

export const StandartInput = Input.withComponent("input");

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 700;
  color: ${colorDark};
`;

export const Submit = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

export const Response = styled.div`
  padding: 3em;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 1.25rem;
`;

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  text-transform: ${props => props.transform};
  font-family: "Clear Sans", sans-serif;
  font-size: 1rem;
  border: 3px solid ${colorDark};
  outline: none;
  transition: all 0.1s linear;
  color: #000;

  &:focus {
    box-shadow: 0 0px 2px 2px rgba(235, 31, 6, 0.8);
    border: 3px solid rgba(235, 31, 6, 1);
  }
`;

export const DateInput = styled(DatePicker)`
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: 1.75rem;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  font-family: "Clear Sans", sans-serif;
  font-size: 1.25rem;
  border-bottom: 3px solid ${colorDark};
  outline: none;

  &:focus {
    box-shadow: 0 4px 2px -2px rgba(235, 31, 6, 0.8);
    border-bottom: 3px solid rgba(235, 31, 6, 1);
  }

  ${".react-date-picker__button__input__input"}:focus & {
    box-shadow: 0 4px 2px -2px rgba(235, 31, 6, 0.8);
    border-bottom: 3px solid rgba(235, 31, 6, 1);
  }

  & .react-date-picker__button {
    position: relative;
    width: 100%;
    border: none;
  }

  & .react-calendar__tile--active,
  .react-calendar__tile--hasActive {
    background: ${colorPr};
    color: #fff;

    &:enabled:hover {
      background: ${colorAcc};
    }
  }

  & .react-date-picker__calendar {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 20;
    width: 100%;
    max-width: 340px;
    margin: 0 auto;
    font-size: 0.8rem;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.8);

    ${media.sm`
       font-size: 1rem;
    `};
  }
`;
