import React, { Fragment } from "react";

import { Card, Heading, Image } from "./Styled";

const index = ({ heading, image, imageAlt }) => {
  return (
    <Fragment>
      <Card>
        <Image src={image} alt={imageAlt} title={imageAlt} />
      </Card>
      <Heading>{heading}</Heading>
    </Fragment>
  );
};

export default index;
