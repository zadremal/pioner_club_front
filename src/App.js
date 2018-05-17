import React, { Component, Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Main } from "./UI";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Birthday from "./Birthday";
import Banket from "./Banket";
import Club from "./Club";
import Karaoke from "./Karaoke";
import Craft from "./Craft";
import Albums from "./Photo/Albums";
import Photos from "./Photo/Photos";
import PartyList from "./Party/List";
import PartyDetail from "./Party/Detail";
import DealList from "./Deal/List";
import DealDetail from "./Deal/Detail";

import NotFound from "./NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/birthday" component={Birthday} />
              <Route path="/club" component={Club} />
              <Route path="/karaoke" component={Karaoke} />
              <Route path="/banket" component={Banket} />
              <Route path="/craft" component={Craft} />
              <Route exact path="/photo" component={Albums} />
              <Route path="/photo/:id" component={Photos} />
              <Route exact path="/party" component={PartyList} />
              <Route path="/party/:id" component={PartyDetail} />
              <Route exact path="/deal" component={DealList} />
              <Route path="/deal/:id" component={DealDetail} />

              <Route component={NotFound} />
            </Switch>
          </Main>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
