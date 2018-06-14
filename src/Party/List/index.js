import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import truncate from "lodash.truncate";
import fetchData from "../../UTILS/Fetch";
import { Mainscreen, Overlay } from "../../UI";
import Section, { Heading } from "../../UI/section";
import Loader from "../../UI/Loader";
import Card from "./Card";

import background from "./background.jpg";

class index extends Component {
  state = {
    parties: ""
  };

  updateState = data => {
    this.setState({
      parties: data
    });
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
    fetchData("/api/v1/parties/", this.updateState);
  };

  render() {
    const { parties } = this.state;
    return (
      <Fragment>
        <Helmet>
          <title>Пионер - афиша мероприятий</title>
          <link rel="canonical" href="https://pioner-club.com/menu/parties" />
        </Helmet>
        <Mainscreen background={background}>
          <Overlay />
          <Heading contrast>Афиша мероприятий</Heading>
        </Mainscreen>
        <Section>
          <div className="container">
            <div className="row">
              {parties ? (
                parties.map(party => {
                  const { id, name, date, poster, poster_alt } = party;
                  const description = party.description.replace(/#/g, "");
                  return (
                    <div className="col-xs-12 col-md-6 col-lg-3" key={id}>
                      <Link
                        style={{ textDecoration: "none", color: "inherit" }}
                        to={`/parties/${id}`}
                      >
                        <Card
                          heading={name}
                          image={poster}
                          imageAlt={poster_alt}
                          date={date}
                          description={truncate(description, {
                            length: 150,
                            separator: " "
                          })}
                        />
                      </Link>
                    </div>
                  );
                })
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </Section>
      </Fragment>
    );
  }
}

export default index;
