import React, { Component, Fragment } from "react";
import { Mainscreen, Overlay } from "../../UI";
import Section, { Heading } from "../../UI/section";
import Card from "../../UI/DealCard";
import { Cards, CardWrap } from "./Styled";
import { Link } from "react-router-dom";
import dealsBackground from "./deals.jpg";
import Loader from "../../UI/Loader";

class index extends Component {
  render() {
    const { deals } = this.props;

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
                  {deals ? (
                    deals.map(deal => {
                      const { id, name, poster, poster_alt } = deal;
                      return (
                        <CardWrap key={id}>
                          <Link to={`deals/${id}`}>
                            <Card
                              heading={name}
                              background={poster}
                              alt={poster_alt}
                            />
                          </Link>
                        </CardWrap>
                      );
                    })
                  ) : (
                    <Loader />
                  )}
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
