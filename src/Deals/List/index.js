import React, { Component, Fragment } from "react";
import { Mainscreen, Overlay } from "../../UI";

import Section, { Heading } from "../../UI/section";
import Card from "../../UI/DealCard";
import { Cards, CardWrap } from "./Styled";
import { Link } from "react-router-dom";
import dealsBackground from "./deals.jpg";
class index extends Component {
  state = {
    deals: []
  };

  componentDidMount = () => {
    const apiServer = process.env.REACT_APP_API_SERVER;
    const fetchUrl = `${apiServer}/api/v1/deals/`;
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
        <Mainscreen background={dealsBackground}>
          <Overlay />
          <Heading contrast> Акции и спецпредложения </Heading>
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
                        <Link
                          to={{
                            pathname: `deals/${id}`,
                            state: { deals: deals }
                          }}
                        >
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
