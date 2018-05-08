import styled from "styled-components";
import { colorDark, colorPr, colorAcc } from "../UI/";

export const Footer = styled.footer`
  background-color: ${colorDark};
  padding: 2rem;
`;

export const Nav = styled.ul`
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  display: block;
  color: #8d8d93;
  text-transform: uppercase;
  font-size: 0.8rem;
  margin: 1rem 0;
  &:hover {
    color: #fff;
  }
`;

export const SocialSvg = styled.svg`
  display: inline;
  height: 30px;
  fill: #fff;
  margin-right: 1rem;
  transition: all 0.2s ease-in;
  &:hover {
    fill: ${colorPr};
  }
  &:active {
    fill: ${colorAcc};
  }
`;

export const ContactsSvg = SocialSvg.extend`
  height: 24px;
`;

export const Contacts = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`;

export const ContactsLink = styled.a`
  color: #8d8d93;
`;

export const BasementText = styled.p`
  display: inline;
  margin-right: 0.5rem;
`;

export const Basement = styled.div`
  color: #8d8d93;
  margin-top: 2rem;
  font-size: 0.9rem;
`;
