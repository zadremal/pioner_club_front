import React, { Component, Fragment } from "react";
import "./App.css";
import "whatwg-fetch";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { YMInitializer } from "react-yandex-metrika";
import asyncComponent from "./UTILS/AsyncComponent";
import { Main } from "./UI";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { Content } from "./UI";
const AsyncHome = asyncComponent(() => import("./Home"));
const AsyncBirthday = asyncComponent(() => import("./Birthday"));
const AsyncBanket = asyncComponent(() => import("./Banket"));
const AsyncClub = asyncComponent(() => import("./Club"));
const AsyncKaraoke = asyncComponent(() => import("./Karaoke"));
const AsyncMenu = asyncComponent(() => import("./Menu"));
const AsyncCraft = asyncComponent(() => import("./Craft"));
const AsyncPhoto = asyncComponent(() => import("./Photo/"));
const AsyncPartyList = asyncComponent(() => import("./Party/List"));
const AsyncPartyDetail = asyncComponent(() => import("./Party/Detail"));
const AsyncDeals = asyncComponent(() => import("./Deals"));
const AsyncContacts = asyncComponent(() => import("./Contacts"));
const AsyncFacecontrol = asyncComponent(() => import("./FC"));
const AsyncPrivatePolicy = asyncComponent(() => import("./Policy"));
const AsyncNewYearPersonal = asyncComponent(() => import("./NewYear/personal"));
const AsyncNewYearCorporate = asyncComponent(() => import("./NewYear/corporate"));
const AsyncNotFound = asyncComponent(() => import("./NotFound"));

class App extends Component {
  state = {
    menuOpen: false
  };

  toggleMenu = () => {
    this.setState(prevState => {
      return {
        menuOpen: !prevState.menuOpen
      };
    });
  };

  render() {
    return (
      <Router>
        <Fragment>
          <YMInitializer
            accounts={[33155843]}
            version="2"
            options={
              ({
                clickmap: true
              },
              {
                defer: true
              },
              {
                trackLinks: true
              },
              {
                accurateTrackBounce: true
              },
              {
                webvisor: true
              })
            }
          />
          <Header menuIsOpen={this.state.menuOpen} onMenuToggle={this.toggleMenu} />
          <Navigation onMenuToggle={this.toggleMenu} menuIsOpen={this.state.menuOpen} />
          <Content menuIsOpen={this.state.menuOpen}>
            <Main id="main">
              <Switch>
                <Route exact path="/deals/1" render={() => <Redirect to="/birthday" />} />
                <Route exact path="/" component={AsyncHome} />
                <Route path="/birthday" component={AsyncBirthday} />
                <Route path="/club" component={AsyncClub} />
                <Route path="/karaoke" component={AsyncKaraoke} />
                <Route path="/banket" component={AsyncBanket} />
                <Route path="/craft" component={AsyncCraft} />
                <Route path="/photo" component={AsyncPhoto} />
                <Route exact path="/parties" component={AsyncPartyList} />
                <Route path="/parties/:id" component={AsyncPartyDetail} />
                <Route path="/deals" component={AsyncDeals} />
                <Route path="/menu" component={AsyncMenu} />
                <Route path="/contacts" component={AsyncContacts} />
                <Route path="/facecontrol" component={AsyncFacecontrol} />
                <Route path="/policy" component={AsyncPrivatePolicy} />
                <Route exact path="/newyear" component={AsyncNewYearPersonal} />
                <Route exact path="/newyear/corporate" component={AsyncNewYearCorporate} />
                <Route exact path="/birthday/birthday.html" render={() => <Redirect to="/birthday" />} />
                <Route exact path="/event/event.html" render={() => <Redirect to="/banket" />} />
                <Route exact path="/afisha1.html" render={() => <Redirect to="/parties" />} />
                <Route exact path="/karaoke.html" render={() => <Redirect to="/karaoke" />} />
                <Route exact path="/grazhdanskiy.html" render={() => <Redirect to="/club" />} />
                <Route exact path="/ispitateley.html" render={() => <Redirect to="/club" />} />

                <Route component={AsyncNotFound} />
              </Switch>
            </Main>
            <Footer />
          </Content>
        </Fragment>
      </Router>
    );
  }
}

export default App;
