import styled from "styled-components";
import { colorPr } from "../UI/";

export const BanketHeading = styled.h3`
  color: #fff;
  font-size: 1.5rem;
`;

export const Text = styled.p`
  color: ${props => (props.contrast ? "#fff" : "#000")};
`;

export const Deal = styled.h3`
  font-size: 1.25rem;
  text-align: center;
  padding: 0 2rem;
`;
export const Highlighted = styled.span`
  color: ${colorPr};
`;

export const MenuWrap = styled.div`
  display: flex;
  flex-wrap: no-wrap;
`;
export const Dish = styled.div`
  background-image: url(${props => props.background});
  padding-bottom: 200px;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: cover;
`;

export const DishOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 0.2s ease-in;
  ${Dish}:hover & {
    opacity: 1;
  }
`;

export const DishHeading = styled.h4`
  color: #fff;
`;

export const DishRecepie = styled.p`
  color: #fff;
  margin-top: 3rem;
`;

export const Number = styled.h4`
  font-size: 3rem;
  color: #fff;
  font-family: Intro, sans-serif;
  margin-bottom: 0;
`;

export const Advantage = styled.h5`
  color: #fff;
  font-size: 1.25rem;
  padding: 0 2rem;
  text-align: center;
`;

export const Company = styled.img`
  height: 70px;
  margin-bottom: 1rem;
`;

export const ContactLink = styled.a`
  display: block;
  color: #fff;
  font-size: 1rem;
`;

export const PhoneLink = ContactLink.extend`
  font-size: 2rem;
  font-family: Intro, sans-serif;
`;
