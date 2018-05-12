import React, { Component } from "react";

import Section, { Heading } from "../../UI/section";

import { Albums, Card } from "./Styled";
import styled from "styled-components";

export const Album = styled.div`
  position: relative;
  height: 250px;
  flex-basis: 23%;
  flex-grow: 0;
  flex-shrink: 0;
  transition: all 0.2s ease-out;
  overflow: hidden;
  background-image: url(${props => props.background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 1rem;
  cursor: pointer;
  z-index: 10;
`;

export const Title = styled.h3`
  color: #fff;
  text-align: center;
  margin-top: 20px;
  }

`;
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: all 0.2s ease-out;
  ${Album}:hover & {
    opacity: 1;
  }
`;

class index extends Component {
  constructor() {
    super();

    this.state = {
      albums: []
    };
    this.showPhotos = this.showPhotos.bind(this);
  }

  showPhotos = id => {
    console.log(id);

    const owner_id = -347981;
    const url = "https://api.vk.com/";
    const method = "photos.get";

    const request = `${url}/method/${method}?owner_id=${owner_id}&album_id=${id}&photo_sizes=1&v=5.74`;
    console.log(request);
    fetch(request)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  };

  componentDidMount() {
    const count = 8;
    const offset = 2;
    const owner_id = -347981;
    const url = "https://api.vk.com/";
    const method = "photos.getAlbums";

    const request = `${url}/method/${method}?owner_id=${owner_id}&count=${count}&offset=${offset}&need_covers=1&photo_sizes=1&v=5.74`;
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
                      background={background}
                      key={id}
                      title={title}
                      size={size}
                      onPhotoClick={() => this.showPhotos(id)}
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
{
  /* <Album
background={background}
key={id}
onClick={() => this.showPhotos(album.id)}
>
<Overlay>
  <Title>{title}</Title>
  <Title>{size} фото</Title>
</Overlay>
</Album> */
}
