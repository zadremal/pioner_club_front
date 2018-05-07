import styled from "styled-components";

export const Mainwrap = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${props => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
`;

export const Mainheading = styled.h1`
  font-size: 2rem;
  color: #fff;
  text-align: center;
`;
