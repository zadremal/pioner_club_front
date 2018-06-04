import React from "react";
import { Card, Heading } from "./Styled";

const index = ({ heading, children }) => {
  return (
    <Card>
      <Heading>{heading}</Heading>
      {children}
    </Card>
  );
};

export default index;
