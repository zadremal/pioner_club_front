import React, { Fragment } from "react";
import Slider from "react-slick";
import Helmet from "react-helmet";
import { ArrowLeft, ArrowRight } from "./Styled";
import Arrow from "./arrow";

const index = props => {
  const LeftButton = props => {
    const { style, onClick } = props;
    return (
      <ArrowLeft
        viewBox="0 0 306 306"
        className="slick-arrow"
        style={{ ...style }}
        onClick={onClick}
      >
        <Arrow />
      </ArrowLeft>
    );
  };
  const RightButton = props => {
    const { style, onClick } = props;
    return (
      <ArrowRight
        viewBox="0 0 306 306"
        className="slick-arrow"
        style={{ ...style }}
        onClick={onClick}
      >
        <Arrow />
      </ArrowRight>
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
    <Fragment>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Helmet>
      <Slider {...settings} {...props.settings}>
        {props.children}
      </Slider>
    </Fragment>
  );
};

export default index;
