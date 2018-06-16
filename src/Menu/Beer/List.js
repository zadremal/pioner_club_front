import React from "react";
import styled from "styled-components";
import { media } from "../../UI/";

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Title = styled.h3`
  margin: 1em 2%;
  flex-basis: 100%;
  text-align: center;
  font-family: Intro, Arial, Helvetica, sans-seriif;
  font-size: 2em;

  ${media.md`
    text-align: left;
  `};
`;

export const Card = styled.div`
  padding: 2%;
  flex-basis: 100% ${media.md`
    flex-basis: ${props => (props.wide ? "100%" : "50%")}; 
  `};
`;

export const Category = styled.h3`
  text-transform: uppercase;
  font-size: 1.5em;
`;

export const Element = styled.div`
  margin: 0.5rem 0;
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
  justify-content: space-between;

  &:nth-child(2n) {
    background-color: #ebebeb;
  }
`;

export const Name = styled.div`
  flex-basis: 50%;
  font-weight: 700;
`;

export const Info = styled.div`
  display: flex;
  flex-basis: 50%;
  justify-content: space-around;
`;

export const InfoItem = styled.div`
  flex-basis: 32%;
  text-align: right;
`;

const Country = styled.div`
  flex-basis: 100%;
  margin: 0.5em 0;
`;

const Description = styled.div`
  flex-basis: 100%;
  max-width: 600px;
`;

export const BeerList = ({ title, array }) => {
  return (
    <List>
      <Title>{title}</Title>
      <Card wide>
        <Element>
          <Name />
          <Info>
            <InfoItem />
            <InfoItem>0,3 л.</InfoItem>
            <InfoItem>0,5 л.</InfoItem>
          </Info>
        </Element>
        {array.map(beer => {
          const { id, name, alcohol, price03, price05, details } = beer;
          const country = beer.country.name;
          return (
            <Element key={id}>
              <Name>{name}</Name>
              <Info>
                <InfoItem>{alcohol}%</InfoItem>
                <InfoItem>{price03} р.</InfoItem>
                <InfoItem>{price05} р.</InfoItem>
              </Info>
              <Country>{country}</Country>
              <Description>{details}</Description>
            </Element>
          );
        })}
      </Card>
    </List>
  );
};

export const BottleList = ({ title, array }) => {
  return (
    <List>
      <Title>{title}</Title>
      {array.filter(country => country.bottle_beer.length > 0).map(country => {
        const { id, name } = country;
        return (
          <Card key={id}>
            <Category>{name}</Category>

            {country.bottle_beer.map(beer => {
              const { id, name, alcohol, net, price } = beer;
              return (
                <Element key={id}>
                  <Name>{name}</Name>
                  <Info>
                    <InfoItem>{alcohol}%</InfoItem>
                    <InfoItem>{net} л.</InfoItem>
                    <InfoItem>{price} р.</InfoItem>
                  </Info>
                </Element>
              );
            })}
          </Card>
        );
      })}
    </List>
  );
};
