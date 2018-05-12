import React, { Component } from "react";
import { Mainscreen } from "../../UI/landing";
import { Heading } from "../../UI/section";
import Gallery from "react-photo-gallery";

class index extends Component {
  constructor() {
    super();

    this.state = {
      photos: [],
      albumId: ""
    };
    this.parsePhoto = this.parsePhoto.bind(this);
  }

  parsePhoto = obj => {
    const photoArray = [];
    obj.forEach(photo => {
      const image = {
        src: photo.sizes[3].src,
        width: photo.sizes[3].width,
        height: photo.sizes[3].height
      };
      photoArray.push(image);
    });
    this.setState({
      photos: photoArray
    });
  };

  componentDidMount = () => {
    const albumId = this.props.match.params.id;

    const ownerId = -347981;
    const url = "https://api.vk.com/";
    const method = "photos.get";

    const request = `${url}/method/${method}?owner_id=${ownerId}&album_id=${albumId}&photo_sizes=1&v=5.74`;

    fetch(request)
      .then(response => response.json())
      .then(data => this.parsePhoto(data.response.items))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Mainscreen>
          <Heading>Test {this.albumId}</Heading>
        </Mainscreen>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Gallery photos={this.state.photos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
