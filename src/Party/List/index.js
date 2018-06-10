import React, { Component, Fragment } from "react";
import { Mainscreen, Overlay } from "../../UI";
import Section, { Heading } from "../../UI/section";
import { Link } from "react-router-dom";
import background from "./parties-background.jpg";
import Card from "./Card";
import truncate from "lodash.truncate";
import Loader from "../../UI/Loader";

class index extends Component {
  state = {
    parties: ""
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
    const apiServer = process.env.REACT_APP_API_SERVER;
    const fetchUrl = `${apiServer}/api/v1/parties/`;
    fetch(fetchUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          parties: data
        });
      })
      .catch(err => console.log("Looks like there was an error", err));
  };

  render() {
    const { parties } = this.state;
    return (
      <Fragment>
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
