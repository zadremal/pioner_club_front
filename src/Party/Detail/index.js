import React, { Component } from "react";
import {
  Mainscreen
  // Description,
  // Schedule,
  // ScheduleHeading,
  // ScheduleText
} from "../../UI/landing";

import { Heading } from "../../UI/section";

class index extends Component {
  render() {
    return (
      <Mainscreen>
        <Heading>Афиша мероприятий</Heading>
      </Mainscreen>
    );
  }
}

export default index;
