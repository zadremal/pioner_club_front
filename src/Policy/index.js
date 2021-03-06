import React, { Component } from "react";
import { Description } from "../UI";
import Section, { Heading } from "../UI/section";

class index extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <Section>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Heading>Политика конфиденциальности</Heading>
            </div>
            <div className="col-xs-12">
              <ol>
                <li>
                  <Description>
                    Настоящая Политика составлена в соответствии с действующим
                    законодательством РФ, в том числе в соответствии с
                    Федеральным законом от 27 июля 2006 года № 152- ФЗ «О
                    персональных данных», и призвана надлежащим образом
                    урегулировать отношения, возникающие между физическим или
                    юридическим лицом-пользователем сайта ночного клуба Пbонер
                    www.pioner-club.com (далее по тексту – Администрация).
                  </Description>
                </li>
                <li>
                  <Description>
                    Все термины и определения, которые встречаются в тексте
                    настоящей Политики, должны трактоваться в соответствии с
                    договором-оферты, с текста которого пользователь
                    перенаправлен на интернет-страницу с настоящей Политикой, а
                    в случае отсутствия определения в тексте Политики - в
                    соответствии с Законом «О персональных данных», иными
                    действующими нормативными актами РФ и деловым оборотом.
                  </Description>
                </li>

                <li>
                  <Description>
                    Принимая настоящую Политику, пользователь выражает свое
                    безоговорочное согласие на предоставление Администрации:
                    3.1. персональной информации (включая ее обработку):<br />
                    - Фамилия, имя<br />
                    - Электронная почта (недоступна для всеобщего пользования)<br />
                    - Номер мобильного телефона (недоступен для всеобщего
                    пользования)<br />
                    - предоставление автоматической информации, такой как:<br />
                    - IP-адрес<br />
                    - Текстовые фрагменты данных о пользователе (cookie)<br />
                    - Браузер или иной программы, с помощью которой пользователь
                    получает доступ к Сайту<br />
                    - данные в URL<br />
                    - HTTP-аутентификация<br />
                    Предоставление иной информации, которая необходима
                    Администрации для организации доступа пользователя к Сайту.<br />
                  </Description>
                </li>
                <li>
                  <Description>
                    Любая информация, которая предоставляется пользователем для
                    целей использования Сайта, должна быть актуальной и
                    достоверной. Администрация исполняет свои обязательства в
                    соответствии с той информацией, которая им известна, и не
                    будет нести ответственность, если ненадлежащее исполнение
                    было вызвано несвоевременным уведомлением пользователя об ее
                    изменении.
                  </Description>
                </li>
                <li>
                  <Description>
                    Администрация не распространяет информацию о пользователе
                    третьим лицам, кроме случаев, когда от пользователя получено
                    соответствующее согласие на такие действия, или
                    предоставление информации разрешено действующим
                    законодательством РФ, и при этом согласие пользователя на ее
                    предоставление не требуется в соответствии с применимым
                    законом.
                  </Description>
                </li>
                <li>
                  <Description>
                    Администрация оставляет за собой право проверять данные,
                    предоставленные пользователем, однако, в случае если
                    персональная и иная информация, предоставленная
                    пользователем, является недостоверной, пользователь
                    самостоятельно несет все связанные с этим неблагоприятные
                    последствия.
                  </Description>
                </li>
                <li>
                  <Description>
                    Администрация не будет нести ответственность за информацию,
                    которая предоставлена пользователем по его желанию
                  </Description>
                </li>
                <li>
                  <Description>
                    Администрация принимает все меры для защиты персональной
                    информации пользователя от неправомерного или случайного
                    доступа, уничтожения, копирования, распространения.
                  </Description>
                </li>
                <li>
                  <Description>
                    Администрация вправе в одностороннем порядке в любой момент
                    изменить текст настоящей Политики, предварительно уведомив
                    об этом пользователя. Принимая текст настоящей Политики,
                    пользователь дает свое согласие на все последующие к ней
                    изменения.
                  </Description>
                </li>
                <li>
                  <Description>
                    Настоящая Политика не распространяется на сервисы, сайты и
                    так далее третьих лиц, не имеющих юридического и
                    фактического отношения к Администрации. Пользователь
                    самостоятельно урегулирует вопросы предоставления информации
                    о себе с такими лицами.
                  </Description>
                </li>
                <li>
                  <Description>
                    Персональная информация хранится в течение срока действия
                    договора пользователя с Администрацией.
                  </Description>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default index;
