import styled from "styled-components";
import { media } from "../../UI";

export const Cards = styled.div`
  position: relative;
  z-index: 20;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  background-color: #fff;
`;

export const CardWrap = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 100%;
  height: 200px;

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
