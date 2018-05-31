import React, { Component } from "react";

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

import MarkdownRenderer from "react-markdown-renderer";
import { ButtonUpPr } from "../../UI/buttons";
import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";
import truncate from "lodash.truncate";
class index extends Component {
  state = {
    party: {}
  };

  componentDidMount = () => {
    const partyId = this.props.match.params.id;
    const apiServer = process.env.REACT_APP_API_SERVER;
    const fetchUrl = `${apiServer}/api/v1/parties/${partyId}`;
    fetch(fetchUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          party: data
        });
      });
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
                        <ButtonUpPr contrast>
                          забронировать столик
                        </ButtonUpPr>{" "}
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </Description>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
