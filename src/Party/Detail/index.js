import React, { Component, Fragment } from "react";
import {
  Mainscreen
  // Description,
  // Schedule,
  // ScheduleHeading,
  // ScheduleText
} from "../../UI/landing";

import Section, { Heading } from "../../UI/section";

class index extends Component {
  state = {
    party: {}
  };

  componentDidMount = () => {
    const partyId = this.props.match.params.id;
    const apiServer = process.env.REACT_APP_API_SERVER;
    const fetchUrl = `${apiServer}/api/v1/parties/${partyId}`;
    fetch(fetchUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          party: data
        });
      });
  };
  render() {
    const {
      name,
      date,
      description,
      place,
      poster,
      poster_alt,
      time_start,
      time_end
    } = this.state.party;
    return (
      <Fragment>
        <Mainscreen>
          <Heading>Афиша мероприятий</Heading>
        </Mainscreen>
        <Section>
          <h1> {name} </h1>
          <h2> {date} </h2>
          <img src={poster} alt={poster_alt} />
          <p> {description} </p>
        </Section>
      </Fragment>
    );
  }
}

export default index;
