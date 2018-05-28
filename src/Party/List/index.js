import React, { Component, Fragment } from "react";
import {
  Mainscreen
  // Description,
  // Schedule,
  // ScheduleHeading,
  // ScheduleText
} from "../../UI/landing";

import Section, { Heading } from "../../UI/section";
import { Party, PartyImage } from "./Styled";
import { Link } from "react-router-dom";

class index extends Component {
  state = {
    parties: []
  };

  componentDidMount = () => {
    const apiServer = process.env.REACT_APP_API_SERVER;
    const fetchUrl = `${apiServer}/api/v1/parties/`;
    fetch(fetchUrl)
      .then(response => response.json())
      .catch(err => console.log("Looks like there was an error", err))
      .then(data => {
        this.setState({
          parties: data
        });
      });
  };

  render() {
    const { parties } = this.state;
    return (
      <Fragment>
        <Mainscreen>
          <Heading>Афиша мероприятий</Heading>
        </Mainscreen>
        <Section>
          {parties.map(party => {
            const { id, name, date, poster, poster_alt, description } = party;
            return (
              <Link key={id} to={`/parties/${id}`}>
                <Party>
                  <Heading>{name}</Heading>
                  <h3>{date}</h3>
                  <PartyImage src={poster} alt={poster_alt} />
                  <p>{description} </p>
                </Party>
              </Link>
            );
          })}
        </Section>
      </Fragment>
    );
  }
}

export default index;
