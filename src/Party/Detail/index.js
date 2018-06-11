import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Heading } from "../../UI/section";
import {
  Image,
  TextBlock,
  Wrap,
  Description,
  PartyDate,
  PartyStart,
  PartyPrice,
  Enterance,
  Button
} from "./Styled";
import Modal from "../../UI/Modal";
import Form from "../../UI/Form";

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";

import MarkdownRenderer from "react-markdown-renderer";
import { ButtonUpPr } from "../../UI/buttons";
import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";
import truncate from "lodash.truncate";
import Loader from "../../UI/Loader";
const body = document.querySelector("body");

class index extends Component {
  state = {
    party: "",
    modalOpen: false
  };

  componentWillUnmount = () => {
    clearAllBodyScrollLocks();
  };

  toggleMenu = () => {
    const newModalState = !this.state.menuOpen;
    newModalState ? disableBodyScroll(body) : enableBodyScroll(body);
    this.setState({
      menuOpen: newModalState
    });
  };

  toggleModal = () => {
    this.setState(prevState => {
      return {
        modalOpen: !prevState.modalOpen
      };
    });
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
    const partyId = this.props.match.params.id;
    const apiServer = process.env.REACT_APP_API_SERVER;
    const fetchUrl = `${apiServer}/api/v1/parties/${partyId}`;
    fetch(fetchUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          party: data
        });
      })
      .catch(err => console.log("Looks like there was an error", err));
  };
  render() {
    const {
      name,
      description,
      poster,
      date,
      place,
      poster_alt,
      time_start
    } = this.state.party;

    return (
      <Fragment>
        <Helmet>
          <title>Пионер - афиша мероприятий</title>
          <link rel="canonical" href="https://pioner-club.com/menu/parties" />
        </Helmet>
        <Modal modalIsOpen={this.state.modalOpen} closeModal={this.toggleModal}>
          <Form />
        </Modal>
        {this.state.party ? (
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <Wrap>
                  <PartyDate>
                    {format(date, "D.MM, dddd", { locale: ruLocale })}
                  </PartyDate>
                  <TextBlock>
                    <Heading>{name}</Heading>
                  </TextBlock>
                  <Image src={poster} alt={poster_alt} />
                </Wrap>
                <Description>
                  {place && (
                    <div className="container">
                      <div className="row">
                        <div className="col-xs-12 col-md-6">
                          <PartyStart>Начало:</PartyStart>
                          <PartyStart>
                            {truncate(time_start, {
                              length: 5,
                              separator: " ",
                              omission: ""
                            })}
                          </PartyStart>
                          <Enterance>
                            <PartyPrice> вход </PartyPrice>
                            <MarkdownRenderer markdown={place.price} />
                          </Enterance>
                        </div>
                        <div className="col-xs-12 col-md-6">
                          <MarkdownRenderer markdown={description} />
                          <Button>
                            {" "}
                            <ButtonUpPr onClick={this.toggleModal} contrast>
                              забронировать столик
                            </ButtonUpPr>
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </Description>
              </div>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </Fragment>
    );
  }
}

export default index;
