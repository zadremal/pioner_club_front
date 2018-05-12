import React, { Component } from "react";
import Card from "./Card";
import birthday from "../../assets/img/birthday.jpg";

import Section from "../../UI/section";
import { Cards, CardWrap, FirstCard, SideSection } from "./Styled";

class index extends Component {
  render() {
    return (
      <Section>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Cards>
                <FirstCard>
                  <Card
                    heading="Скидка 5000 рублей в день рождения"
                    background={birthday}
                  />
                </FirstCard>
                <SideSection>
                  <CardWrap>
                    <Card
                      heading="Скидка 5000 рублей в день рождения"
                      background={birthday}
                    />
                  </CardWrap>
                  <CardWrap>
                    <Card
                      heading="Скидка 5000 рублей в день рождения"
                      background={birthday}
                    />
                  </CardWrap>
                  <CardWrap>
                    <Card
                      heading="Скидка 5000 рублей в день рождения"
                      background={birthday}
                    />
                  </CardWrap>
                  <CardWrap>
                    <Card
                      heading="Скидка 5000 рублей в день рождения"
                      background={birthday}
                    />
                  </CardWrap>
                </SideSection>
              </Cards>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default index;
