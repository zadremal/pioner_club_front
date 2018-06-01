import React, { Component } from "react";
import styled from "styled-components";
import { colorDark, media } from "./index";

const Section = styled.section`
  padding: 1rem 0;
  background: URL(${props => props.background});
  background-color: ${props =>
    props.background ? props.background : "transparent"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Heading = styled.h2`
  position: relative;
  z-index: 10;
  letter-spacing: 0.2rem;
  font-family: "Intro", Arial, sans-serif;
  text-shadow: ${props =>
    props.contrast ? "0 0 4px rgba(0, 0, 0, 0.5)" : "none"};
  text-align: center;
  font-size: 2rem;
  color: ${props => (props.contrast ? "#fff" : colorDark)};

  ${media.lg`
    font-size: 2.5rem;
  `};
`;

class section extends Component {
  render() {
    return (
      <Section background={this.props.background}>
        {this.props.children}
      </Section>
    );
  }
}

export default section;
