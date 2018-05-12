import styled from "styled-components";

export const Mainwrap = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${props => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

export const Mainheading = styled.h1`
  font-size: 2rem;
  color: #fff;
  text-align: center;
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;
