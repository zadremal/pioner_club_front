import React, { Component, Fragment } from "react";

import Section, { Heading } from "../UI/section";
import {
  Mainscreen,
  Description,
  PlaceHeading,
  Schedule,
  ScheduleHeading,
  ScheduleText
} from "../UI/landing";
import Youtube from "../UI/Youtube";
import { Plan, ClubFeature } from "./Styled";
import background from "./main_background.jpg";
import plan from "./plan.jpg";

class index extends Component {
  render() {
    return (
      <Fragment>
        <Mainscreen background={background}>
          <Heading contrast>Ночной клуб Пионер</Heading>
        </Mainscreen>
        <Section>
          <div className="container">
            <div className="row">
              <div className="col-xs-7">
                <Description>
                  «ПИОНЕР» - неповторимая эклектика современного дизайна и духа
                  эпохи 70-80х годов. Все необходимые детали ретро-диско-клуба -
                  в наличии: вместительный танцпол, сцена для live-выступлений,
                  световое и музыкальное оборудование, зал на 350 мест,
                  VIP-зона.
                </Description>
                <Description>
                  Атмосферу задают красно-серые тона интерьера и узнаваемые
                  атрибуты того времени: фотографии, учебные стенды, раритетные
                  пластинки, вымпелы, портреты вождей. Расторопные официанты в
                  пионерских галстуках с удовольствием порекомендуют что-нибудь
                  из широкого ассортимента алкогольных и безалкогольных
                  напитков, коктейлей и холодных закусок.
                </Description>
                <PlaceHeading>План зала</PlaceHeading>
                <Plan src={plan} />
              </div>
              <div className="col-xs-5 center-xs">
                <PlaceHeading>Мы открыты</PlaceHeading>
                <ScheduleHeading>Клуб</ScheduleHeading>
                <Schedule>
                  <ScheduleText>пятница, суббота</ScheduleText>
                  <ScheduleText>с 22:00 до 06:00</ScheduleText>
                </Schedule>
                <ScheduleHeading>Караоке</ScheduleHeading>
                <Schedule>
                  <ScheduleText>четверг, воскресенье</ScheduleText>
                  <ScheduleText>с 23:00 до 03:00</ScheduleText>
                  <ScheduleText>пятница, суббота</ScheduleText>
                  <ScheduleText>с 23:00 до 06:00</ScheduleText>
                </Schedule>
                <ScheduleHeading>Бар</ScheduleHeading>
                <Schedule>
                  <ScheduleText>ежедневно</ScheduleText>
                  <ScheduleText>с 18:00 до 03:00</ScheduleText>
                </Schedule>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <Youtube videoId="7VC-hPemn30" />
        </Section>
        <Section>
          <div className="container">
            <div className="row">
              <div className="col-xs-5 center-xs">
                <PlaceHeading>каждые выходные</PlaceHeading>
                <ClubFeature>
                  бесплатный розлив алкоголя от барменов
                </ClubFeature>
                <ClubFeature>
                  посвящение в Пионеры и пионерская линейка
                </ClubFeature>
                <ClubFeature>шоу-программа и выступления персонала</ClubFeature>
              </div>
              <div className="col-xs-7">
                <Description>
                  Специальными гостями вечеринок диско-зала выступают
                  вокально-инструментальные ансамбли и известные ди-джеи.
                  Полуночным апогеем является торжественный вынос знамени и
                  исполнение гимна СССР. Восторг и энергетику этого действа
                  невозможно передать словами – лучше увидеть. И, вопреки
                  известной фразе, не один раз увидеть. Диско-зал «ПИОНЕР» - это
                  лучшее место для настроения пионерской молодости и
                  комсомольской юности. Мы говорим: «нет» – ностальгии и «да» –
                  приятным воспоминаниям и новым впечатлениям!
                </Description>
                <Description>
                  Ретро-клуб "ПИОНЕР"- единственное место в Петербурге, где
                  ощущения ушедшей молодости вновь оживают. Приглашаем Вас
                  окунуться в атмосферу безудержного веселья, поверьте, мы
                  делаем всё, чтобы Вы хотели возвращаться к нам снова и снова!
                  Вас ждут яркие огни ретро-диско-клуба и зажигательные мелодии
                  пионерской молодости. Вдохните воздух нового СССР, воплощенный
                  в музыку свободы и перемен, и получите новые эмоции от любимых
                  мотивов!
                </Description>
              </div>
            </div>
          </div>
        </Section>
      </Fragment>
    );
  }
}

export default index;
