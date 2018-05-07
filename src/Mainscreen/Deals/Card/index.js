import React, { Component } from "react";
import styled from "styled-components";
import { ButtonUpWhite } from "../../../UI/buttons";
import { colorPr } from "../../../UI/";

const Card = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
  text-align: center;
  min-height: 250px;
  background-image: url(${props => props.background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const CardButton = ButtonUpWhite.extend`
  transition: all 0.2s ease-out;
  opacity: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  ${Card}:hover & {
    opacity: 1;
    transform: translateX(-50%) translateY(20px);
  }
`;

const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  opacity: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: opacity 0.2s ease-out;
  background-color: rgba(235, 31, 6, 0.4);
  ${Card}:hover & {
    opacity: 1;
  }
`;

const Heading = styled.h3`
  display: block;
  font-size: 1.25rem;
  text-transform: uppercase;
  font-family: Intro, sans-serif, arial;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
  color: #fff;
  transition: all 0.2s ease;
  ${Card}:hover & {
    transform: translateY(-20px);
  }
`;

const HeadingWrap = styled.div`
  position: relative;
  z-index: 2;
  padding: 0.5rem 1rem;
  background-color: rgba(235, 31, 6, 0.4);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 80%;
  ${Card}:hover & {
    background-color: transparent;
  }
`;

const Wrap = styled.div`
  padding: 0 1rem;
`;

class index extends Component {
  render() {
    return (
      <Card background={this.props.background}>
        <Wrap>
          <HeadingWrap>
            <Heading children={this.props.heading} />
            <CardButton color={colorPr} children="подробнее" />
          </HeadingWrap>
        </Wrap>
        <Overlay />
      </Card>
    );
  }
}

export default index;
