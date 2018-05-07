import React, { Component } from "react";
import { Mainwrap, Mainheading } from "./Styled";
import { ButtonRight } from "../UI/buttons";
import { colorPr, colorAcc } from "../UI/index";
import background from "../assets/img/background.jpg";
export default class extends Component {
  render() {
    return (
      <Mainwrap background={background}>
        <div className="container">
          <div className="row center-xs middle-xs">
            <div className="col-xs-12">
              <Mainheading>Ночной клуб Пионер</Mainheading>
              <ButtonRight children="подробнее" color={colorPr} />
            </div>
          </div>
        </div>
      </Mainwrap>
    );
  }
}
