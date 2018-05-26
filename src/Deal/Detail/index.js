import React, { Component, Fragment } from "react";

import { Mainscreen } from "../../UI/landing";
import Section, { Heading } from "../../UI/section";

class index extends Component {
  state = {
    deal: ""
  };

  componentDidMount = () => {
    const dealId = this.props.match.params.id;
    const apiServer = process.env.REACT_APP_API_SERVER;
    const fetchUrl = `${apiServer}/api/v1/deals/${dealId}/`;
    fetch(fetchUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          deal: data
        });
      });
  };

  render() {
    const { deal } = this.state;
    return (
      <Fragment>
        <Mainscreen background={deal.poster}>
          <Heading contrast>{deal.name}</Heading>
        </Mainscreen>
        <Section>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <p>{deal.description}</p>
              </div>
            </div>
          </div>
        </Section>
      </Fragment>
    );
  }
}

export default index;
