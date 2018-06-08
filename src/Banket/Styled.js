import styled from "styled-components";
import { colorPr, colorAcc, media } from "../UI/";

export const BanketHeading = styled.h3`
  color: #fff;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;

  ${media.lg`
    font-size: 1.5rem;
  `};
`;

export const Deal = styled.h3`
  font-size: 1rem;
  text-align: center;
  padding: 0 0.75rem;
  ${media.lg`
    padding: 0 2rem;
    font-size: 1.25rem;
  `};
`;

export const Highlighted = styled.span`
  color: ${colorPr};
`;

export const MenuWrap = styled.div`
  display: flex;
  flex-wrap: no-wrap;
`;

export const Number = styled.span`
  display: block;
  font-size: 2rem;

  color: #fff;
  font-family: Intro, sans-serif;
  margin-bottom: 0;
  margin-top: 2rem;
  ${media.md`
    font-size: 2rem;
  `};
  ${media.lg`
    font-size: 2.5rem;
  `};
`;

export const Advantage = styled.h5`
  color: #fff;
  font-size: 0.75rem;
  margin-top: 1rem;
  padding: 0;
  ${media.md`
    font-size: 1.1rem;
  `};
  ${media.lg`
    padding: 0 2rem;
    font-size: 1.25rem;
  `};
`;

export const Company = styled.img`
  margin: 2rem 0;
  width: 100%;
  max-width: 200px;
`;

export const ContactLink = styled.a`
  display: block;
  color: #fff;
  font-size: 1rem;
  transition: all 0.1s ease-out;
  margin: 1rem;
  &:hover {
    color: ${colorAcc};
  }
  &:active {
    color: ${colorPr};
  }
`;

export const PhoneLink = ContactLink.extend`
  font-family: Intro, sans-serif;
  margin: 1.5rem;
  font-size: 1.5rem;
  &:hover {
    color: ${colorAcc};
  }

  ${media.md`
  font-size: 1.75rem;
  `};

  ${media.lg`
  font-size: 2rem;
  `};
`;

export const Button = styled.div`
  margin: 1em;
`;
