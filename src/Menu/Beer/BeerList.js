import React from "react";
import styled from "styled-components";

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Title = styled.h3`
  font-family: Intro, Arial, Helvetica, sans-seriif;
  flex-basis: 100%;
  margin: 1em 2%;
  font-size: 2em;
`;

export const Card = styled.div`
  flex-basis: ${props => (props.wide ? "100%" : "50%")};
  padding: 2%;
`;
export const Category = styled.h3`
  text-transform: uppercase;
  font-size: 1.5em;
`;

export const Element = styled.div`
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0.5rem 0;
  padding: 0.5rem 0;
  &:nth-child(2n) {
    background-color: #ebebeb;
  }
`;
export const Name = styled.div`
  flex-basis: 50%;
  font-weight: 700;
`;

export const Info = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: space-around;
`;
export const InfoItem = styled.div`
  flex-basis: 32%;
`;

const Country = styled.div`
  flex-basis: 100%;
  margin: 0.5em 0;
`;

const Description = styled.div`
  flex-basis: 100%;
  max-width: 600px;
`;

export const BeerList = props => {
  return (
    <List>
      <Title>{props.title}</Title>
      <Card wide>
        <Element>
          <Name />
          <Info>
            <InfoItem />
            <InfoItem>0,3 л.</InfoItem>
            <InfoItem>0,5 л.</InfoItem>
          </Info>
        </Element>
        {props.array.map(beer => {
          return (
            <Element>
              <Name>{beer.name}</Name>
              <Info>
                <InfoItem>{beer.alcohol}%</InfoItem>
                <InfoItem>{beer.price03} р.</InfoItem>
                <InfoItem>{beer.price05} р.</InfoItem>
              </Info>
              <Country>{beer.country.name}</Country>
              <Description>{beer.details}</Description>
            </Element>
          );
        })}
      </Card>
    </List>
  );
};

export const BottleList = props => {
  return (
    <List>
      <Title>{props.title}</Title>
      {props.array
        .filter(country => country.bottle_beer.length > 0)
        .map(country => {
          return (
            <Card>
              <Category>{country.name}</Category>

              {country.bottle_beer.map(beer => {
                return (
                  <Element>
                    <Name>{beer.name}</Name>
                    <Info>
                      <InfoItem>{beer.alcohol}%</InfoItem>
                      <InfoItem>{beer.net} л.</InfoItem>
                      <InfoItem>{beer.price} р.</InfoItem>
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
