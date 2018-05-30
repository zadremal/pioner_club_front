import styled from "styled-components";
import { media } from "../../UI";

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  padding: 0;
  background-color: #fff;
  position: relative;
  z-index: 20;
`;

export const CardWrap = styled.div`
  flex-basis: 100%;
  flex-shrink: auto;
  height: 200px;
  padding: 1%;

  ${media.md`
   flex-basis: 50%;
  `};

  ${media.lg`
    flex-basis: calc(100% / 3);
    height: 250px;
    &:first-child,
    :first-child + div {
      flex-basis: 50%;
      height: 400px;
    }
  `};
`;
