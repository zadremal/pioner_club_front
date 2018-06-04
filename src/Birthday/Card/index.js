import React from "react";

import { Card, Heading } from "./Styled";

const index = ({ heading, background }) => {
  return (
    <Card background={background}>
      <Heading>{heading}</Heading>
    </Card>
  );
};
export default index;
