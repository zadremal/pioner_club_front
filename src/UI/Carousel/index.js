import React from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "./Styled";
import arrow from "./arrow.svg";

const index = props => {
  const LeftButton = props => {
    const { style, onClick } = props;
    return (
      <ArrowLeft
        src={arrow}
        className="slick-arrow"
        style={{ ...style }}
        onClick={onClick}
      />
    );
  };
  const RightButton = props => {
    const { style, onClick } = props;
    return (
      <ArrowRight
        src={arrow}
        className="slick-arrow"
        style={{ ...style }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <RightButton />,
    prevArrow: <LeftButton />
  };

  return (
    <Slider {...settings} {...props.settings}>
      {props.children}
    </Slider>
  );
};

export default index;
