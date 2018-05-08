//colors
import styled from "styled-components";

export const colorPr = "rgba(235, 31, 6, 1)";
export const colorSec = "rgba(222, 145, 81, 1)";
export const colorAcc = "rgba(188, 93, 46, 1)";
export const colorDark = "rgba(46, 46, 58, 1)";

export const Main = styled.main`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
`;

export const MainHeading = styled.h1`
  color: #fff;
  font-family: Intro, sans-serif;
  font-size: 2rem;
  text-align: center;
  margin: 1rem;
  line-height: 3.5rem;

  text-transform: uppercase;
`;

export const HeadingHighlighted = styled.span`
  background-color: #ffc01f;
  color: #d12f19;
  padding: 1rem 1rem 0.75rem;
`;

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
  padding: 0 20%;
`;
