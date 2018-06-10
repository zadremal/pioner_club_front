import styled from "styled-components";

export const Album = styled.div`
  position: relative;
  height: 250px;
  width: 100%;
  transition: all 0.2s ease-out;
  background-image: url(${props => props.background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 1rem;
  cursor: pointer;
  z-index: 10;
`;

export const Photos = styled.h3`
  color: #fff;
  text-align: center;
  flex-basis: 100%;
  margin: 0;
`;

export const Title = Photos.extend`
  font-family: Intro, Arial, sans-serif;
  font-size: 1.25rem;
  margin: 0.5rem 1.5rem;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  opacity: 1;
  transition: all 0.2s ease-out;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  ${Album}:hover & {
    opacity: 0;
  }
`;
