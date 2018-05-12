import React, { Component } from "react";
import { Mainscreen } from "../../UI/landing";
import { Heading } from "../../UI/section";

class index extends Component {
  constructor() {
    super();

    this.state = {
      photos: [],
      albumId: ""
    };
  }

  componentDidMount = () => {
    const albumId = this.props.match.params.id;

    const ownerId = -347981;
    const url = "https://api.vk.com/";
    const method = "photos.get";

    const request = `${url}/method/${method}?owner_id=${ownerId}&album_id=${albumId}&photo_sizes=1&v=5.74`;

    fetch(request)
      .then(response => response.json())
      .then(data => {
        this.setState({
          photos: data.response.items
        });
        console.log(data);
      })
      .catch(err => console.log(err));
  };

  render() {
    const photos = this.state.photos;
    return (
      <div>
        <Mainscreen>
          <Heading>Test {this.albumId}</Heading>
        </Mainscreen>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              {photos.map(photo => {
                return <img id={photo.id} src={photo.sizes[2].src} alt="" />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
