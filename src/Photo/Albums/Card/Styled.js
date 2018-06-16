import styled from "styled-components";

export const Album = styled.div`
  position: relative;
  z-index: 10;
  height: 250px;
  width: 100%;
  margin-bottom: 1rem;
  background-image: url(${props => props.background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.2s ease-out;
  cursor: pointer;
`;

export const Photos = styled.h3`
  margin: 0;
  flex-basis: 100%;
  text-align: center;
  color: #fff;
`;

export const Title = Photos.extend`
  margin: 0.5rem 1.5rem;
  font-family: Intro, Arial, sans-serif;
  font-size: 1.25rem;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  background: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease-out;
  opacity: 1;

  ${Album}:hover & {
    opacity: 0;
  }
`;
