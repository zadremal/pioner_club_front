import React, { Component } from "react";
import styled from "styled-components";
import { colorDark } from "./index";

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
  font-family: "Intro", sans-serif, arial;
  font-size: 2rem;
  text-align: center;
  color: ${props => (props.contrast ? "#fff" : colorDark)};
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
