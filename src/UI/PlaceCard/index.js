import React from "react";
import { ButtonRightPr } from "../buttons";
import { Card, Heading, Overlay, TextBox, Description, Text } from "./Styled";

export const index = ({
  image,
  heading,
  text,
  buttonText,
  overlayBackground,
  narrow
}) => {
  return (
    <Card background={image} narrow={narrow}>
      <Overlay overlayBackground={overlayBackground} />
      <TextBox>
        <Heading>{heading}</Heading>
        <Description>
          <Text>{text}</Text>
          <ButtonRightPr contrast>подробнее</ButtonRightPr>
        </Description>
      </TextBox>
    </Card>
  );
};

export default index;
