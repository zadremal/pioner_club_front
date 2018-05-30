import React, { Component } from "react";
import Section, { Heading } from "../../UI/section";
import { Image, TextBlock, Wrap, CardWrap } from "./Styled";
import Card from "../../UI/DealCard";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "./deals.css";

class index extends Component {
  state = {
    deal: "",
    deals: ""
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
    const { poster, name, description } = this.state.deal;
    const deals = this.state.deals;
    console.log(this.state);
    return (
      <Section>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Wrap>
                <Image src={poster} />
                <TextBlock>
                  <Heading>{name}</Heading>
                </TextBlock>
              </Wrap>
              <ReactMarkdown className="markdown-deals" source={description} />
            </div>
            <div className="col-xs-12">
              {deals && (
                <div>
                  {deals.map(deal => {
                    const { id, name, poster, poster_alt } = deal;
                    return (
                      <CardWrap key={id}>
                        <Link to={`deals/${id}`}>
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
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default index;
