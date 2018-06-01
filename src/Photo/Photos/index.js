import React, { Component } from "react";
import { Mainscreen } from "../../UI";
import { Heading } from "../../UI/section";
import Gallery from "react-photo-gallery";
import jsonp from "jsonp";

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
    const access_token = process.env.REACT_APP_VK_ACCESS_TOKEN;
    const request = `${url}/method/${method}?access_token=${access_token}&owner_id=${ownerId}&album_id=${albumId}&photo_sizes=1&v=5.74`;

    jsonp(request, null, (err, data) => {
      if (err) {
        console.error(err.message);
      } else {
        this.parsePhoto(data.response.items);
      }
    });
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
