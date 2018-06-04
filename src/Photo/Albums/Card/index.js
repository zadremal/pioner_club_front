import React from "react";

import { Album, Overlay, Title, Photos } from "./Styled";

const index = ({ albumId, title, size, background, children }) => {
  return (
    <Album background={background}>
      {children}
      <Overlay>
        <Title>{title}</Title>
        <Photos>{size} фото</Photos>
      </Overlay>
    </Album>
  );
};

export default index;
