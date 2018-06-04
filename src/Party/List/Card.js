import styled from "styled-components";
import React from "react";
import { ButtonRightPr } from "../../UI/buttons";
import { colorPr } from "../../UI";
import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";

const Card = styled.div`
  width: 100%;
  height: 100%;
  padding: 1em;
  transition: all 0.2s ease-out;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin-bottom: 1rem;

  &:hover {
    box-shadow: 0 0 60px #000;
  }
`;

const Heading = styled.h3`
  font-family: Intro, Arial, sans-serif;
  margin: 1em auto;
`;

const PartyDate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Intro, Arial, sans-serif;
`;

const DayMonth = styled.h4`
  color: #fff;
  background-color: ${colorPr};
  padding: 0.75em;
  margin: 0;
`;
const DayWeek = styled.h4``;

const Image = styled.img`
  max-width: 100%;
  flex-shrink: 0;
`;
const Description = styled.p``;

const Button = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: flex-end;
`;

const index = ({ heading, image, imageAlt, date, description }) => {
  return (
    <Card>
      <PartyDate>
        <DayMonth>{format(date, "D.MM", { locale: ruLocale })}</DayMonth>
        <DayWeek>{format(date, "dddd", { locale: ruLocale })}</DayWeek>
      </PartyDate>
      <Image src={image} alt={imageAlt} />
      <Heading>{heading}</Heading>
      <Description> {description} </Description>
      <Button>
        <ButtonRightPr contrast>Подробнее</ButtonRightPr>{" "}
      </Button>
    </Card>
  );
};

export default index;
