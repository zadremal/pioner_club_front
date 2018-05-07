import React, { Component } from "react";
import Section, { Heading } from "../../UI/section";
import Card from "./Card";
import { Afisha, AfishaItem } from "./Styled";
import { colorDark } from "../../UI/";

import thursday from "../../assets/img/thursday.jpg";
import friday from "../../assets/img/friday.jpg";
import saturday from "../../assets/img/saturday.jpg";

class index extends Component {
  render() {
    return (
      <Section background={colorDark}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Heading contrast children="На этой неделе" />
            </div>
            <div className="col-xs-12">
              <Afisha>
                <AfishaItem>
                  <Card
                    background={thursday}
                    date="четверг, 08.05"
                    heading="ночи караоке"
                    details="Ночи становятся жарче! Этой осенью, каждый ЧЕТВЕРГ и
                      ВОСКРЕСЕНЬЕ мы ждём вас, чтобы зажечь вместе! Для вас: -
                      БЕСПЛАТНЫЙ ВХОД всю ночь! - КАРАОКЕ - БЕСПЛАТНО! -
                      Виски-кола и ром-кола - 3 по цене 2х! - АКЦИЯ для
                      именинников - Скидка 50%!; - АКЦИЯ для мальчишников и
                      девичников; Дарим 5.000 рублей на счёт!; . Предложение по
                      акциям ограничено. Не является публичной офертой."
                  />
                </AfishaItem>
                <AfishaItem>
                  <Card
                    background={friday}
                    date="пятница, 09.05"
                    heading="ТАНЦЕВАЛЬНЫЙ РАЙ"
                    details="Эта МУЗЫКА будет жить ВЕЧНО! Каждую пятницу - вечеринка
                      90-х! Самые лучшие хиты, под которые можно не только
                      танцевать, но и подпевать! Проверено временем...
                      присоединяйся! Для вас: - Откровенные GO-GO танцы -
                      Виски-кола и ром-кола - 3 по цене 2х! - Вкуснейшие кальяны
                      - Караоке-бар - АКЦИЯ на коктейли и шоты - 2 по цене 1! -
                      АКЦИЯ для именинников -;Скидка 50%! - АКЦИЯ для
                      мальчишников и девичников ;Дарим 5.000 рублей на счёт! -
                      АКЦИЯ ;Меняем браслет другого клуба на коктейль
                      Виски-кола!"
                  />
                </AfishaItem>
                <AfishaItem>
                  <Card
                    background={saturday}
                    date="суббота, 09.05"
                    heading="ТАНЦЕВАЛЬНЫЙ РАЙ"
                    details="В субботу - вечеринка ТАНЦЕВАЛЬНЫЙ РАЙ! Сборник лучших
                      танцевальных хитов! Для вас: - Откровенные GO-GO танцы - Виски-кола и ром-кола - 3 по цене 2х! - Вкуснейшие кальяны
                      - Караоке-бар - АКЦИЯ на коктейли и шоты - 2 по цене 1! -
                      АКЦИЯ для именинников - &quot;Скидка 50%!&quot; - АКЦИЯ для
                      мальчишников и девичников &quot;Дарим 5.000 рублей на счёт!&quot; -
                      АКЦИЯ &quot;Меняем браслет другого клуба на коктейль
                      Виски-кола!&quot; Предложение по акциям ограничено. Не является
                      публичной офертой."
                  />
                </AfishaItem>
              </Afisha>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default index;
