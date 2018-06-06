//colors
import styled, { css } from "styled-components";

export const colorPr = "rgba(235, 31, 6, 1)";
export const colorSec = "rgba(222, 145, 81, 1)";
export const colorAcc = "rgba(188, 93, 46, 1)";
export const colorDark = "rgba(46, 46, 58, 1)";

const sizes = {
  xl: 1199,
  lg: 992,
  md: 768,
  sm: 420
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
  padding-top: 60px;
  height: 100%;
  overflow: hidden;
  position: relative;
  z-index: 1;
  transform: ${props =>
    props.menuIsOpen ? "translateX(-300px)" : "translateX(0)"};
`;

export const Mainscreen = styled.section`
  width: 100%;
  height: 50vh;
  position: relative;
  background: url(${props => props.background});
  background-position: center;
  background-size: cover;
  backgorund-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  background-attachment: fixed;
  padding: 0 5%;

  ${media.lg`
    padding: 0 10%;
  `};
  ${media.xl`
    padding: 0 20%;
  `};
`;

export const LandingMainscreen = Mainscreen.extend`
  height: 90vh;
`;

export const Overlay = styled.div`
  position: absolute;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Content = styled.div`
  transition: transform 0.4s cubic-bezier(0.67, 0.1, 0.32, 0.98);
  transform: ${props =>
    props.menuIsOpen ? "translateX(-300px)" : "translateX(0)"};
`;

export const MainscreenWrap = styled.div`
  position: relative;
  z-index: 3
  text-align: center;
  padding: 2rem 0;
`;

export const MainHeading = styled.h1`
  color: #fff;
  font-family: Intro, Arial, sans-serif;
  font-size: 2em;
  text-align: center;
  margin: 1rem;
  line-height: 3.5em;
`;

export const LandingMainHeading = MainHeading.extend`
  line-height: 1.5em;
  margin: 0;
  font-size: 2em;

  ${media.lg`
    font-size: 3em;
  `};
`;

export const HeadingHighlighted = styled.span`
  background-color: #ffc01f;
  color: #d12f19;
  padding: 1rem 1rem 0.75rem;
  font-size: 1rem;

  ${media.md`
  font-size: 1.5rem;
  `};

  ${media.md`
  font-size: 2rem;
  `};
`;

export const Description = styled.p`
  font-family: "Clear Sans", Arial, sans-serif;
  font-size: 1em;
  line-height: 1.5em;
  color: ${props => (props.contrast ? "#fff" : "#000")};
  ${media.md`
  
  font-size: 1.2em;
  line-height: 1.75em;
  `};
`;

export const PlaceHeading = styled.h3``;
