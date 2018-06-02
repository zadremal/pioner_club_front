import React from "react";
import { Dish, Image, Heading, Consist } from "./Styled";

const index = ({ image, imageAlt, heading, consist }) => {
  return (
    <Dish>
      <Image src={image} alt={imageAlt} />
      <Heading>{heading}</Heading>
      <Consist>{consist}</Consist>
    </Dish>
  );
};

export default index;
