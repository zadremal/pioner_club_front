import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

export const Albums = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Album = styled.div`
  position: relative;
  height: 250px;
  flex-basis: 23%;
  flex-grow: 0;
  flex-shrink: 0;
  transition: all 0.2s ease-out;
  overflow: hidden;
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
  font-size: 2rem;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: all 0.2s ease-out;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  ${Album}:hover & {
    opacity: 1;
  }
`;

export const Card = ({ albumId, title, size, background, onPhotoClick }) => {
  return (
    <Album background={background}>
      <Link to={`photo/${albumId}`}>
        <Overlay>
          <Title>{title}</Title>
          <Photos>{size} фото</Photos>
        </Overlay>
      </Link>
    </Album>
  );
};
