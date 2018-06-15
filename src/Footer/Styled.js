import styled from "styled-components";
import { Link } from "react-router-dom";
import { colorDark, colorPr, colorAcc, media } from "../UI/";

export const Footer = styled.footer`
  width: 100%;
  padding: 2rem;
  flex-shrink: 0;
  background-color: ${colorDark};
`;

export const Nav = styled.ul`
  margin: 0;
  padding: 0;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #8d8d93;

  &:hover {
    text-decoration: underline;
  }
`;

export const NavItem = styled.li`
  display: block;
  margin: 1rem 0;
  text-transform: uppercase;
  font-size: 0.8rem;
  color: #8d8d93;

  &:hover {
    color: #fff;
  }
`;

export const Social = styled.div`
  margin-top: 1em;
`;

export const SocialSvg = styled.svg`
  display: inline
  height: 30px;
  margin-right: 1rem;
  transition: all 0.1s ease-in;
  fill: #fff;
  
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
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
`;

export const ContactsLink = styled.a`
  color: #8d8d93;
`;

export const BasementText = styled.p`
  display: block;
  margin-right: 0.5rem;

  ${media.md`
    display: inline
  `};
`;

export const Basement = styled.div`
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #8d8d93;
`;
