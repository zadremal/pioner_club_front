import React, { Component } from "react";

import Section, { Heading } from "../../UI/section";

import { Albums, Card } from "./Styled";

class index extends Component {
  constructor() {
    super();

    this.state = {
      albums: []
    };
  }

  componentDidMount() {
    const count = 8;
    const offset = 2;
    const ownerId = -347981;
    const url = "https://api.vk.com/";
    const method = "photos.getAlbums";

    const request = `${url}/method/${method}?owner_id=${ownerId}&count=${count}&offset=${offset}&need_covers=1&photo_sizes=1&v=5.74`;
    console.log(request);
    fetch(request)
      .then(response => response.json())
      .then(data => {
        this.setState({ albums: data.response.items });
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
