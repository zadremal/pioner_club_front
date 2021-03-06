import React, { Component } from "react";
import styled from "styled-components";
import { colorDark, media } from "./index";

const Section = styled.section`
  position: relative;
  z-index: 1;
  padding: 1rem 0;
  background: URL(${props => props.background});
  background-color: ${props =>
    props.background ? props.background : "transparent"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: ${props => (props.fixed ? "fixed" : "inherit")};
`;

export const Heading = styled.h2`
  position: relative;
  z-index: 10;
  text-align: center;
  font-family: "Intro", Arial, sans-serif;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  text-shadow: ${props =>
    props.contrast ? "0 0 4px rgba(0, 0, 0, 0.5)" : "none"};
  color: ${props => (props.contrast ? "#fff" : colorDark)};

  ${media.md`
    font-size: 2rem;
  `};

  ${media.lg`
    font-size: 2.5rem;
  `};
`;

class section extends Component {
  render() {
    return (
      <Section fixed={this.props.fixed} background={this.props.background}>
        {this.props.children}
      </Section>
    );
  }
}

export default section;
