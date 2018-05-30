import styled from "styled-components";

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
  flex-basis: calc(100% / 3);
  flex-shrink: auto;
  height: 250px;
  padding: 1%;
  &:first-child,
  :first-child + div {
    flex-basis: 50%;
    height: 400px;
  }
`;
