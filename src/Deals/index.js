import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import DealsList from "./List";
import DealsDetail from "./Detail";
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
    const { path } = this.props.match;
    return (
      <Fragment>
        <Route
          exact
          path={`${path}`}
          render={() => {
            return <DealsList deals={this.state.deals} />;
          }}
        />
        <Route
          path="/deals/:id"
          render={props => {
            return (
              <Fragment>
                <DealsDetail deals={this.state.deals} {...props} />
              </Fragment>
            );
          }}
        />
      </Fragment>
    );
  }
}

export default index;
