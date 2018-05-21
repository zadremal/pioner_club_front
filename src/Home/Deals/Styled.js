import styled from "styled-components";

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -1rem;
`;
export const SideSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 60%;
  justify-content: space-between;
`;
export const CardWrap = styled.div`
  flex-basis: 50%;
  flex-shrink: auto;

  padding: 1rem;
  &:first-child {
    flex-basis: 40%;
    padding: 1rem;
  }
`;

export const FirstCard = styled.div``;
