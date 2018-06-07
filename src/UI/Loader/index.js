import React from "react";
import { Loader } from "./Styled";
import { colorPr } from "../index";

import ReactLoading from "react-loading";

const index = () => {
  return (
    <Loader>
      <ReactLoading type={"spin"} color={colorPr} />
    </Loader>
  );
};

export default index;
