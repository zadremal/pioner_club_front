import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import MarkdownRenderer from "react-markdown-renderer";
import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";
import truncate from "lodash.truncate";
import fetchData from "../../UTILS/Fetch";
import { Heading } from "../../UI/section";
import Modal from "../../UI/Modal";
import Form from "../../UI/Form";
import { ButtonUpPr } from "../../UI/buttons";
import Loader from "../../UI/Loader";
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

class index extends Component {
  state = {
    party: "",
    modalOpen: false
  };

  toggleModal = () => {
    this.setState(prevState => {
      return {
        modalOpen: !prevState.modalOpen
      };
    });
  };

  updateState = data => {
    this.setState({
      party: data
    });
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
    const partyId = this.props.match.params.id;
    fetchData(`/api/v1/parties/${partyId}`, this.updateState);
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
