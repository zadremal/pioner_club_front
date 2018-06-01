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
  padding: 0 20%;
`;

export const Overlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const MainHeading = styled.h1`
  color: #fff;
  font-family: Intro, Arial, sans-serif;
  font-size: 2rem;
  text-align: center;
  margin: 1rem;
  line-height: 3.5rem;
`;

export const HeadingHighlighted = styled.span`
  background-color: #ffc01f;
  color: #d12f19;
  padding: 1rem 1rem 0.75rem;
`;

export const Description = styled.p``;

export const PlaceHeading = styled.h3``;

export const Schedule = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: left;
`;

export const ScheduleHeading = styled.h3`
  font-family: Intro, sans-serif;
`;

export const ScheduleText = styled.p`
  flex-basis: 50%;
  text-align: left;
  &:nth-child(2n) {
    text-align: right;
  }
`;
