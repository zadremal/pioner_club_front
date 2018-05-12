import styled from "styled-components";
import React from "react";

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

export const Title = styled.h3`
  color: #fff;
  text-align: center;
  margin-top: 20px;
  }

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
  ${Album}:hover & {
    opacity: 1;
  }
`;

export const Card = ({ title, size, background, onPhotoClick }) => {
  return (
    <Album background={background} onClick={onPhotoClick}>
      <Overlay>
        <Title>{title}</Title>
        <Title>{size} фото</Title>
      </Overlay>
    </Album>
  );
};
