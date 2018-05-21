import React, { Component, Fragment } from "react";
import { Mainscreen } from "../../UI/landing";

import Section, { Heading } from "../../UI/section";
import Card from "../../Home/Deals/Card";
import { Cards, CardWrap } from "../../Home/Deals/Styled";
import { Link } from "react-router-dom";
class index extends Component {
  state = {
    deals: []
  };

  componentDidMount = () => {
    const fetchUrl = "http://localhost:8000/api/v1/deals/";
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
      <Fragment>
        <Mainscreen>
          <Heading> Акции и прочая хрень </Heading>
        </Mainscreen>
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
                </Cards>
              </div>
            </div>
          </div>
        </Section>
      </Fragment>
    );
  }
}

export default index;
