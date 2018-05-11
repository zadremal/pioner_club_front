import styled from "styled-components";

export const CardWrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Card = styled.div`
  padding-bottom: 400px;
  position: relative;
  background: url(${props => props.background});
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  flex-basis: 32%;
  flex-grow: 0;
  flex-shrink: 0;
`;

export const CardText = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  color: #fff;
  text-align: center;
`;

export const Beer = styled.div`
  flex-basis: 22%;
  flex-grow: 0;
  flex-shrink: 0;
`;
