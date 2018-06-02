import React, { Component } from "react";
import Section, { Heading } from "../../UI/section";
import { Albums, Card } from "./Styled";
import jsonp from "jsonp";

class index extends Component {
  constructor() {
    super();

    this.state = {
      albums: []
    };
  }

  componentDidMount() {
    const count = 16;
    const offset = 2;
    const ownerId = -347981;
    const url = "https://api.vk.com/";
    const method = "photos.getAlbums";
    const access_token = process.env.REACT_APP_VK_ACCESS_TOKEN;
    const request = `${url}/method/${method}?access_token=${access_token}&owner_id=${ownerId}&count=${count}&offset=${offset}&need_covers=1&photo_sizes=1&v=5.74&callback=null`;

    jsonp(request, null, (err, data) => {
      if (err) {
        console.error(err.message);
      } else {
        this.setState({ albums: data.response.items });
      }
    });
  }
  render() {
    const { albums } = this.state;
    return (
      <Section>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Heading>Последние фотоотчеты</Heading>
            </div>

            <div className="col-xs-12">
              <Albums>
                {console.log(albums)}
                {albums.map(album => {
                  const { size, title, id } = album;
                  const background = album.sizes[4].src;
                  return (
                    <Card
                      key={id}
                      albumId={id}
                      background={background}
                      title={title}
                      size={size}
                    />
                  );
                })}
              </Albums>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default index;
