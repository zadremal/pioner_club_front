import styled from "styled-components";
import { colorDark, colorAcc, colorPr } from "../UI/";
import { media } from "../UI";

export const Logo = styled.img`
  height: 2rem;
  display: none;

  ${media.lg`
    display: block;
  `};
`;

export const Header = styled.header`
  position: fixed;
  z-index: 30;
  width: 100%;
  height: 60px;
  background-color: ${colorDark};

  padding: 0;
  width: 100%;
`;

export const HeaderFlex = styled.div`
  height: 60px;
  position: relative;
  z-index: 60;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-basis: 100%;
  ${media.lg`
  justify-content: flex-end;
  flex-basis: auto;

  `};
`;

export const Contact = styled.a`
  color: #fff;
  text-decoration: none;

  font-size: 1.15rem;
  font-family: 
  font-weight: 700;
  transition: color .1s ease-out;

  &:visited {
    color: #fff;
  }
  &:hover {
    color: ${colorAcc};
  }
  &:active {
    color: ${colorPr};
  }

  ${media.lg`
      margin: 0 2rem;
  `}
`;

export const Text = styled.span`
  display: none;

  ${media.md`
    display: inline;
  `};
`;

export const Icon = styled.img`
  display: inline-block;
  height: 30px;
  width: 30px;
  margin: 0 0.5rem;
  ${media.md`
    display: none;
  `};
`;
