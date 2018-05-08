import styled from "styled-components";
import { colorDark, colorPr } from "../UI/";

export const Mainscreen = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  background: url(${props => props.background});
  background-position: center;
  background-size: cover;
  backgorund-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  background-attachment: fixed;
`;

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
`;

export const DealDescription = styled.h3`
  color: ${colorDark};
  font-family: Intro, sans-serif;
`;

export const Highlighted = styled.span`
  color: ${colorPr};
`;

export const BoringDescription = styled.p``;

export const BoringWrap = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;
`;

export const BoringCard = styled.div`
  position: relative;
  padding-bottom: 250px;
  background-image: url(${props => props.background});
  background-position: center;
  background-size: cover;
  flex-grow: 1;
  flex-basis: auto;
`;

export const BoringHeading = styled.h3`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20%;
  text-align: center;
  max-width: 80%;
`;

export const Pioner = Mainscreen.extend`
  height: auto;
  padding: 10rem 0;
`;

export const PionerText = styled.p`
  color: #fff;
  max-width: 600px;
  margin: 0 auto;
`;

export const BirthdayText = PionerText.extend`
  color: #000;
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
