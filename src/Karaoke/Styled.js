import styled from "styled-components";

export const CardWrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Card = styled.div`
  position: relative;
  flex-basis: 32%;
  flex-grow: 0;
  flex-shrink: 0;
  padding-bottom: 300px;
  background: url(${props => props.background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const CardText = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translateX(-50%) translateY(-50%);
  color: #fff;
`;
