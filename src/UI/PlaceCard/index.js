import React from "react";

import { Card, Heading, Overlay, TextBox, Description, Text } from "./Styled";
import { ButtonRight } from "../buttons";
import { colorPr } from "../index";

export const index = ({
  image,
  heading,
  text,
  buttonText,
  overlayBackground
}) => {
  return (
    <Card background={image}>
      <Overlay overlayBackground={overlayBackground} />
      <TextBox>
        <Heading>{heading}</Heading>
        <Description>
          <Text>{text}</Text>
          <ButtonRight contrast color={colorPr}>
            подробнее
          </ButtonRight>
        </Description>
      </TextBox>
    </Card>
  );
};

export default index;
