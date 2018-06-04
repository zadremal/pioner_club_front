import React from "react";

import { Card, Heading, Overlay, TextBox, Description, Text } from "./Styled";
import { ButtonRightPr } from "../buttons";

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
          <ButtonRightPr contrast>подробнее</ButtonRightPr>
        </Description>
      </TextBox>
    </Card>
  );
};

export default index;
