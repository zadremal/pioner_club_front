import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Mainscreen, Overlay } from "../../UI";
import Section, { Heading } from "../../UI/section";
import Card from "../../UI/DealCard";
import Loader from "../../UI/Loader";
import { Cards, CardWrap } from "./Styled";

import background from "./background.jpg";

const index = ({ deals }) => {
  return (
    <Fragment>
      <Mainscreen background={background}>
        <Overlay />
        <Heading contrast> Акции и спецпредложения </Heading>
      </Mainscreen>
      <Section>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Cards>
                {deals.length > 0 ? (
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
};

export default index;
