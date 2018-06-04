import React, { Component } from "react";
import Section, { Heading } from "../../UI/section";
import Card from "./Card";
import { Afisha, AfishaItem } from "./Styled";
import { Link } from "react-router-dom";
class index extends Component {
  constructor() {
    super();
    this.state = {
      parties: [],
      deals: []
    };
  }
  componentDidMount = () => {
    const apiServer = process.env.REACT_APP_API_SERVER;
    const fetchUrl = `${apiServer}/api/v1/parties-main/`;
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
      <Section>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Heading children="На этой неделе" />
            </div>
            <div className="col-xs-12">
              <Afisha>
                {parties &&
                  parties.map(party => {
                    const { date, name, description, poster, id } = party;
                    return (
                      <AfishaItem key={id}>
                        <Link to={`/party/${id}`}>
                          <Card
                            background={poster}
                            date={date}
                            heading={name}
                            details={description}
                          />
                        </Link>
                      </AfishaItem>
                    );
                  })}
              </Afisha>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default index;
