import React from "react";

import { Card, Wrap, Text, Heading, Button, Overlay } from "./Styled";
import { colorPr } from "../index";

const index = ({ background, heading }) => {
  return (
    <Card background={background}>
      <Wrap>
        <Text>
          <Heading children={heading} />
          <Button color={colorPr} children="подробнее" />
        </Text>
      </Wrap>
      <Overlay />
    </Card>
  );
};

export default index;
