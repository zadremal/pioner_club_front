import React, { Component } from "react";
import styled from "styled-components";
import { colorPr } from "../../../UI";
import { ButtonRight } from "../../../UI/buttons";

import truncate from "lodash.truncate";

const Card = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.5)
    ),
    url(${props => props.background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  padding: 1rem;
  color: #fff;
  height: 450px;
  transition: all 0.2s linear;
  position: relative;
  z-index: 2;
  cursor: pointer;
  &:hover {
  }
`;

const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1rem;
  opacity: 0;
  background-color: rgba(46, 46, 58, 0.7);
  transition: all 0.2s ease-out;
  ${Card}:hover & {
    opacity: 1;
  }
`;

const Heading = styled.h3`
  font-family: Intro, sans-serif;
  font-size: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.7);
`;

const Details = styled.p`
  line-height: 1.5;
  margin-top: 125px;
`;

export const AfishaDate = styled.h3`
  font-family: Intro, sans-serif;
  display: inline-block;
  text-transform: uppercase;
  font-size: 1.25rem;
  margin-bottom: 0;
  padding-bottom: 0.25em;
  border-bottom: 0.25rem solid ${colorPr};
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.7);
`;

const Info = styled.div`
  position: absolute;
  top: 30px;
  z-index: 2;
`;

const ButtonBlock = styled.div`
  position: absolute;
  bottom: 30px;
  z-index: 2;
`;

class index extends Component {
  render() {
    return (
      <div>
        <Card background={this.props.background}>
          <Info>
            <AfishaDate children={this.props.date} />
            <Heading children={this.props.heading} />
          </Info>
          <Overlay>
            <Details>
              {truncate(this.props.details, {
                length: 220
              })}
            </Details>
          </Overlay>
          <ButtonBlock>
            <ButtonRight color={colorPr} children="подробнее" />
          </ButtonBlock>
        </Card>
      </div>
    );
  }
}

export default index;
