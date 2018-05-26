import React, { Component } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

import Section from "../../UI/section";
import { Cards, CardWrap } from "./Styled";

class index extends Component {
  state = {
    deals: []
  };

  componentDidMount = () => {
    const apiServer = process.env.REACT_APP_API_SERVER;
    const fetchUrl = `${apiServer}/api/v1/deals-main/`;
    fetch(fetchUrl)
      .then(response => response.json())
      .catch(err => console.log("Looks like there was an error", err))
      .then(data => {
        this.setState({
          deals: data
        });
      });
  };

  render() {
    const { deals } = this.state;
    return (
      <Section>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Cards>
                {deals.map(deal => {
                  const { id, name, poster, poster_alt } = deal;
                  return (
                    <CardWrap key={id}>
                      <Link to={`deal/${id}`}>
                        <Card
                          heading={name}
                          background={poster}
                          alt={poster_alt}
                        />
                      </Link>
                    </CardWrap>
                  );
                })}
                <CardWrap>
                  <Link to="deal/">
                    <Card heading="Все акции и предложения" />
                  </Link>
                </CardWrap>
              </Cards>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default index;
