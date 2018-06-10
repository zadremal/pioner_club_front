import React, { Component } from "react";
import Section, { Heading } from "../../UI/section";
import {
  Image,
  TextBlock,
  Wrap,
  CardWrap,
  Carousel,
  Description
} from "./Styled";
import Card from "../../UI/DealCard";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "./deals.css";

import Slider from "../../UI/Carousel";
import Loader from "../../UI/Loader";

class index extends Component {
  state = {
    deal: "",
    deals: "",
    dealId: ""
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
    const dealId = this.props.match.params.id;
    this.retrieveCurrentDeal(dealId);
    this.props.deals.length > 0
      ? this.setState({
          deals: this.props.deals
        })
      : this.retrieveAllDeals();
  };

  componentDidUpdate = () => {
    window.scrollTo(0, 0);
    const newDealId = this.props.match.params.id;
    this.state.dealId !== newDealId && this.retrieveCurrentDeal(newDealId);
  };

  filterDeals = (dealsArray, dealId) => {
    return dealsArray.filter(deal => deal.id !== Number(dealId));
  };

  retrieveAllDeals = () => {
    const apiServer = process.env.REACT_APP_API_SERVER;
    const fetchUrl = `${apiServer}/api/v1/deals/`;
    fetch(fetchUrl)
      .then(response => response.json())
      .then(data => {
        this.state.deals !== data &&
          this.setState(prevState => {
            return {
              deals: data
            };
          });
      })
      .catch(err => console.log("Looks like there was an error", err));
  };

  retrieveCurrentDeal = dealId => {
    const apiServer = process.env.REACT_APP_API_SERVER;
    const fetchUrl = `${apiServer}/api/v1/deals/${dealId}/`;
    fetch(fetchUrl)
      .then(response => response.json())
      .then(data => {
        this.state.deal !== data &&
          this.setState({
            deal: data,
            dealId: dealId
          });
      });
  };

  render() {
    const { poster, poster_alt, name, description } = this.state.deal;
    const { deal, deals, dealId } = this.state;

    return (
      <Section>
        {deal && deals ? (
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <Wrap>
                  <TextBlock>
                    <Heading>{name}</Heading>
                  </TextBlock>
                  <Image src={poster} alt={poster_alt} />
                </Wrap>
                <Description>
                  <ReactMarkdown
                    className="markdown-deals"
                    source={description}
                  />
                </Description>
              </div>
              <div className="col-xs-12">
                {deals && (
                  <Carousel>
                    <Slider
                      settings={{
                        responsive: [
                          {
                            breakpoint: 992,
                            settings: {
                              slidesToShow: 2
                            }
                          },
                          {
                            breakpoint: 576,
                            settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1
                            }
                          }
                        ]
                      }}
                    >
                      {this.filterDeals(deals, dealId).map(deal => {
                        const { id, name, poster, poster_alt } = deal;
                        return (
                          <CardWrap key={id}>
                            <Link to={`/deals/${id}`}>
                              <Card
                                heading={name}
                                background={poster}
                                alt={poster_alt}
                                deals={deals}
                              />
                            </Link>
                          </CardWrap>
                        );
                      })}
                    </Slider>
                  </Carousel>
                )}
              </div>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </Section>
    );
  }
}

export default index;
