import React, { Component } from "react";

import Section, { Heading } from "../UI/section";

import Kitchen from "./Kitchen/Menu";
import Bar from "./Bar/Menu";
import Banket from "./Banket/Menu";
import Beer from "./Beer/Menu";
import { Route, Redirect } from "react-router-dom";
import { StyledNavLink, Menu } from "./Styled";

class index extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    const { url, path } = this.props.match;
    return (
      <Section>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Heading>Меню</Heading>
            </div>
            <div className="col-xs-12 col-lg-2">
              <Menu>
                <StyledNavLink
                  activeClassName="menu-link--active"
                  to={`${url}/kitchen`}
                >
                  кухня
                </StyledNavLink>
                <StyledNavLink
                  activeClassName="menu-link--active"
                  to={`${url}/bar`}
                >
                  бар
                </StyledNavLink>
                <StyledNavLink
                  activeClassName="menu-link--active"
                  to={`${url}/banket`}
                >
                  банкет
                </StyledNavLink>
                <StyledNavLink
                  activeClassName="menu-link--active"
                  to={`${url}/beer`}
                >
                  пиво
                </StyledNavLink>
              </Menu>
            </div>
            <div className="col-xs-12 col-lg-10">
              <Route
                exact
                path={path}
                render={() => <Redirect to={`${path}/bar`} />}
              />
              <Route path={`${path}/kitchen`} component={Kitchen} />
              <Route path={`${path}/bar`} component={Bar} />
              <Route path={`${path}/banket`} component={Banket} />
              <Route path={`${path}/beer`} component={Beer} />
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default index;
