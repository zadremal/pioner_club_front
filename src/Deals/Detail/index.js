import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import fetchData from "../../UTILS/Fetch";
import Section, { Heading } from "../../UI/section";
import Card from "../../UI/DealCard";
import Slider from "../../UI/Carousel";
import Loader from "../../UI/Loader";
import {
  Image,
  TextBlock,
  Wrap,
  CardWrap,
  Carousel,
  Description
} from "./Styled";
import "./deals.css";

class index extends Component {
  state = {
    deal: "",
    dealList: "",
    dealId: ""
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
    const dealId = this.props.match.params.id;
    this.retrieveCurrentDeal(dealId);
    this.retrieveAllDeals();
  };

  componentDidUpdate = () => {
    window.scrollTo(0, 0);
    const newDealId = this.props.match.params.id;
    this.state.dealId !== newDealId && this.retrieveCurrentDeal(newDealId);
  };

  retrieveAllDeals = () => {
    fetchData("/api/v1/deals", this.updateDealList);
  };

  retrieveCurrentDeal = dealId => {
    fetchData(`/api/v1/deals/${dealId}/`, this.updateDeal);
    this.setState({
      dealId: dealId
    });
  };

  updateDealList = data => {
    this.state.deals !== data &&
      this.setState(prevState => {
        return {
          dealList: data
        };
      });
  };

  updateDeal = data => {
    this.setState({
      deal: data
    });
  };

  filterDeals = (dealsArray, dealId) => {
    return dealsArray.filter(deal => deal.id !== Number(dealId));
  };

  render() {
    const { poster, poster_alt, name, description } = this.state.deal;
    const { deal, dealList, dealId } = this.state;

    return (
      <Section>
        {deal && dealList ? (
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
                    {this.filterDeals(dealList, dealId).map(deal => {
                      const { id, name, poster, poster_alt } = deal;
                      return (
                        <CardWrap key={id}>
                          <Link to={`/deals/${id}`}>
                            <Card
                              heading={name}
                              background={poster}
                              alt={poster_alt}
                              deals={dealList}
                            />
                          </Link>
                        </CardWrap>
                      );
                    })}
                  </Slider>
                </Carousel>
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
