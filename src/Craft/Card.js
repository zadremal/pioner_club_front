import React, { Component } from "react";
import styled from "styled-components";
import { colorAcc, colorDark } from "../UI/";

const Card = styled.div`
  background: ${colorAcc};
  padding: 1rem;
  color: ${colorDark};
  color: #fff;
`;

const Image = styled.img`
  height: 150px;
  text-align: center;
  margin: auto;
`;

const Beer = styled.h4`
  font-weight: 400;
  text-align: center;
  font-family: Intro, sans-serif;
`;

const Characteristics = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BeerProps = styled.h5`
  font-weight: 700;
`;

const Price = BeerProps.extend``;
const Description = styled.p``;

class index extends Component {
  render() {
    const { name, image, alcohol, ibu, description, price } = this.props;
    return (
      <Card>
        <Beer>{name}</Beer>
        <Image src={image} />
        <Characteristics>
          <BeerProps>Алк: {alcohol} об.</BeerProps>
          <BeerProps>IBU {ibu}</BeerProps>
        </Characteristics>
        <Description>{description}</Description>
        <Price>{price}</Price>
      </Card>
    );
  }
}

export default index;
