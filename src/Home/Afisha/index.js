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
    fetch("http://127.0.0.1:8000/api/v1/parties/")
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
              {console.log(parties)}
              <Heading children="На этой неделе" />
            </div>
            <div className="col-xs-12">
              <Afisha>
                {parties.map(party => {
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
