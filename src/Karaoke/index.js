import React, { Component, Fragment } from "react";
import {
  Mainscreen,
  Description,
  Schedule,
  ScheduleHeading,
  ScheduleText
} from "../UI";
import { Card, CardText, CardWrap } from "./Styled";
import Section, { Heading } from "../UI/section";
import { ButtonRightPr } from "../UI/buttons";
import backvocal from "./backvocal.jpg";
import mics from "./mics.jpg";
import songs from "./songs.jpg";

import background from "./karaoke_background.jpg";

class index extends Component {
  render() {
    return (
      <Fragment>
        <Mainscreen background={background}>
          <Heading contrast children="Караоке" />
        </Mainscreen>
        <Section>
          <div className="container">
            <div className="row">
              <div className="col-xs-7">
                <Description>
                  Караоке-бар «...» - одно из лучших мест для отдыха и
                  развлечений. Авторский дизайн и всегда дружеская обстановка!
                  Уже на входе вас встретит внимательный персонал и сопроводит в
                  мир, наполненный яркими красками. В «...» установлено только
                  лучшее оборудование, что позволит вам получить максимум
                  удовольствия. Гостей также приятно удивит богатый репертуар: в
                  списке песен как российские, так и зарубежные хиты. Кроме
                  того, караоке-бар предлагает большой выбор крафтового пива,
                  так и более крепких напитков и коктейлей. Наши бармены с
                  удовольствием расскажут Вам про любой сорт и помогут сделать
                  правильный выбор. Профессиональные повара не заставят гостей
                  томиться в ожидании, попробуйте наши сеты из авторских
                  мини-бургеров и оригинальные закуски к пиву! По четвергам и
                  воскресеньем вы можете петь свои любимые песни абсолютно
                  бесплатно! В баре проводятся трансляции спортивных матчей.
                  Банкеты, корпоративы и частные мероприятия!
                </Description>
              </div>

              <div className="col-xs-5 center-xs">
                <ScheduleHeading>Мы открыты</ScheduleHeading>
                <Schedule>
                  <ScheduleText>четверг, воскресенье</ScheduleText>
                  <ScheduleText>с 23:00 до 03:00</ScheduleText>
                  <ScheduleText>пятница, суббота</ScheduleText>
                  <ScheduleText>с 23:00 до 06:00</ScheduleText>
                </Schedule>
                <ScheduleHeading>Стоимость песни</ScheduleHeading>
                <Schedule>
                  <ScheduleText>пятница, суббота</ScheduleText>
                  <ScheduleText>200 &#8381;</ScheduleText>
                  <ScheduleText>четверг, воскресенье</ScheduleText>
                  <ScheduleText>БЕСПЛАТНО</ScheduleText>
                </Schedule>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <CardWrap>
                  <Card background={backvocal}>
                    <CardText>Бэк-вокал в арранжировках</CardText>
                  </Card>

                  <Card background={songs}>
                    <CardText>Более 40000 песен</CardText>
                  </Card>

                  <Card background={mics}>
                    <CardText>Микрофоны SurePro</CardText>
                  </Card>
                </CardWrap>
              </div>
              <div className="col-xs-12 center-xs">
                <ButtonRightPr contrast>Забронировать столик</ButtonRightPr>
              </div>
            </div>
          </div>
        </Section>
      </Fragment>
    );
  }
}

export default index;
