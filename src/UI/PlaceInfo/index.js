import React from "react";
import { Card, Heading } from "./Styled";

const index = ({ heading, children }) => {
  return (
    <Card>
      {heading && <Heading>{heading}</Heading>}
      {children}
    </Card>
  );
};

export default index;
