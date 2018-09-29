import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import MarkdownRenderer from "react-markdown-renderer";
import fetchData from "../UTILS/Fetch";
import { Mainscreen, Overlay, Description } from "../UI";
import Section, { Heading } from "../UI/section";
import Card from "../UI/PlaceInfo";
import Feature from "../UI/PlaceFeature";
import Loader from "../UI/Loader";
import { Image } from "./Styled";

import background from "./img/background.jpg";
import fishburger from "./img/fishburger.jpg";
import hamburger from "./img/hamburger.jpg";
import cheeseburger from "./img/cheeseburger.jpg";
import beer from "./img/beer.jpg";

class index extends Component {
  state = {
    price: "",
    openHours: ""
  };

  updateState = data => {
    this.setState({
      price: data[2].price,
      openHours: data[2].open_hours
    });
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
    fetchData("/api/v1/places", this.updateState);
  };

  render() {
    const { openHours } = this.state;
    return (
      <Fragment>
        <Helmet>
          <title>Пионер - бар с обширным ассортиментом пива</title>
          <link rel="canonical" href="https://pioner-club.com/craft" />
          <meta
            name="description"
            content="Разнообразные сорта пива от крафтовых пивоварен России и зарубежа. Более 40 видов бутылочного пива. Мини-бургеры по 100 рублей"
          />
          <meta
            name="keywords"
            content="крафт, крафтовое пиво, бар с крафтовым пивом, крафтовое пиво СПб, крафтовое пиво Санкт-Петербург, крафтовое пиво Петербург, купить крафтовое пиво, паб крафтового пива, бар крафтового пива, бургеры, бургеры СПб, бургеры Санкт-Петербург"
          />
        </Helmet>
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
                  помимо выходных в четверг и воскресенье, и существенно обновили
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
            {/* <div className="row">
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
                <Feature image={fishburger} imageAlt="Черная мамба" />
              </div>
              <div className="col-xs-12 col-md-4">
                <Feature image={hamburger} imageAlt="Фишбургер" />
              </div>
              <div className="col-xs-12 col-md-4">
                <Feature image={cheeseburger} imageAlt="Гамбургер" />
              </div>
            </div> */}
            <div className="row">
              <div className="col-xs-12">
                <Heading>Более 40 сортов пива</Heading>
              </div>
              <div className="col-xs-12 col-lg-6 last-xs">
                <Image
                  src={beer}
                  alt="более 40 сортов пива"
                  title="более 40 сортов пива"
                />
              </div>
              <div className="col-xs-12 col-lg-6 last-lg">
                <Card>
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
