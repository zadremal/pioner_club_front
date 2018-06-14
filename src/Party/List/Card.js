import React from "react";
import styled from "styled-components";
import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";
import { colorPr } from "../../UI";
import { ButtonRightPr } from "../../UI/buttons";

const Card = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
  padding: 1em;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  transition: all 0.2s ease-out;

  &:hover {
    box-shadow: 0 0 60px #000;
  }
`;

const Heading = styled.h3`
  margin: 1em auto;
  font-family: Intro, Arial, sans-serif;
`;

const PartyDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Intro, Arial, sans-serif;
`;

const DayMonth = styled.h4`
  margin: 0;
  padding: 0.75em;
  background-color: ${colorPr};
  color: #fff;
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
  align-items: flex-end;
  justify-content: center;
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
