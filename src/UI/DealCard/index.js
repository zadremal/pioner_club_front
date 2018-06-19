import React from "react";

import { Card, Wrap, Text, Heading, Button, Overlay } from "./Styled";
import { colorPr } from "../index";

const index = ({ background, heading }) => {
  return (
    <Wrap>
      <Card background={background}>
        <Text>
          <Heading children={heading} />
          <Button color={colorPr} children="подробнее" />
        </Text>
        <Overlay />
      </Card>
    </Wrap>
  );
};

export default index;
