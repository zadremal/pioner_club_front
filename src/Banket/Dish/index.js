import React from "react";
import { Dish, Image, Heading, Consist } from "./Styled";

const index = ({ image, image2x, imageAlt, heading, consist }) => {
  return (
    <Dish>
      <Image src={image}>
        <source title={imageAlt} srcSet={`${image}, ${image2x} 2x`} />
        <img title={imageAlt} src={image} alt={imageAlt} />
      </Image>
      <Heading>{heading}</Heading>
      <Consist>{consist}</Consist>
    </Dish>
  );
};

export default index;
