import React, { Component, Fragment } from "react";
import { Mainscreen, Overlay, Description } from "../UI";
import Section, { Heading } from "../UI/section";
import { Image } from "./Styled";
import Card from "../UI/PlaceInfo";
import Feature from "../UI/PlaceFeature";
import MarkdownRenderer from "react-markdown-renderer";
import Loader from "../UI/Loader";

import background from "./craft_background.jpg";
import fishburger from "./fishburger.jpg";
import hamburger from "./hamburger.jpg";
import cheeseburger from "./cheeseburger.jpg";
import beer from "./beer.jpg";

class index extends Component {
  state = {
    price: "",
    openHours: ""
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
    const apiServer = process.env.REACT_APP_API_SERVER;
    const fetchUrl = `${apiServer}/api/v1/places/`;
    fetch(fetchUrl)
      .then(response => response.json())
      .then(data =>
        this.setState({
          price: data[2].price,
          openHours: data[2].open_hours
        })
      )
      .catch(err => console.log("Looks like there was an error", err));
  };

  render() {
    const { openHours } = this.state;
    return (
      <Fragment>
        <Mainscreen background={background}>
          <Overlay />
          <Heading contrast>Крафт бургер бар</Heading>
        </Mainscreen>
        <Section>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-lg-7 first-lg">
                <Description>
                  В конце прошлого года мы пересмотрели формат нашего бара,
                  расположенного на первом этаже, и решили немного расширить его
                  функционал. Уверены что в этом формате он понравится Вам ещё
                  больше - мы сохранили Караоке, стали открывать свои двери
                  каждый день, а не только на выходных, и существенно обновили
                  меню.
                </Description>

                <Description>
                  Самое важное изменение - многократное расширение ассортимента
                  пива - как на кране, так и бутылочного. Теперь мы сотрудничаем
                  с российскими крафтовыми пивоварнями, а так же привозим
                  интересные сорта из других стран. Ждём Вас на дегустацию - у
                  нас можно найти много интересных сортов и новых вкусовых
                  ощущений.
                </Description>
              </div>
              <div className="col-xs-12 col-lg-5 center-xs first-xs">
                {openHours ? (
                  <Card heading="мы открыты">
                    <MarkdownRenderer markdown={openHours} />
                  </Card>
                ) : (
                  <Loader />
                )}
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <Heading>Бургеры по 100 рублей</Heading>
                <Description>
                  Какая лучшая закуска к бутылочке хорошего пива? Правильно,
                  бургер! Но простым бургером уже никого не удивить, поэтому
                  встречайте: авторские мини-бургеры от нашего шефа. Мы
                  уменьшили их диаметр с 10-12 сантиметров в классических
                  бургерах до 8-и, научились выпекать булочки сами (так как
                  нигде таких просто нет), и сделали 6 разных бургеров:
                  классический, фишбургер, чизбургер, чикенбургер, веганский, и
                  черная мамба.
                </Description>
                <Description>
                  Но что самое приятное - что с небольшим размером в комплекте
                  идет небольшая цена - 100 рублей за бургер. Можно брать сеты
                  по несколько разных бургеров, и платить как за один в
                  классических бургерных. Уверены, вы оцените!
                </Description>
              </div>
              <div className="col-xs-12 col-md-4">
                <Feature image={fishburger} imageAlt="Мини-фишбургер" />
              </div>
              <div className="col-xs-12 col-md-4">
                <Feature image={hamburger} imageAlt="Мини-Гамбургер" />
              </div>
              <div className="col-xs-12 col-md-4">
                <Feature image={cheeseburger} imageAlt="Мини-Чизбургер" />
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-lg-6 first-lg">
                <Image src={beer} alt="более 40 сортов пива" />
              </div>
              <div className="col-xs-12 col-lg-6 first-xs">
                <Card heading="Более 40 сортов пива">
                  <Description>
                    Новый ассортимент разливного и бутылочного пива придется по
                    душе как любителям насыщенного эля, так и ценителям легкого
                    лагера. Собрали лучшее из таких стран как Бельгия, Чехия ,
                    Германия, Англия, а так же добавили продукции отечественного
                    производства и небольших пивоварен. Суммарно получилось
                    более 40 сортов, но эта цифра не является постоянной, так
                    как мы регулярно обновляем своё меню и привозим новинки.
                  </Description>
                </Card>
              </div>
            </div>
          </div>
        </Section>
      </Fragment>
    );
  }
}

export default index;
