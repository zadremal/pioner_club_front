import React, { Component } from "react";
import { Button, Icon, Breadcrump } from "./Styled";
import Gallery from "react-photo-gallery";
import jsonp from "jsonp";
import backArrow from "./back.svg";
import Measure from "react-measure";
import Lightbox from "react-images";

class index extends Component {
  constructor() {
    super();

    this.state = {
      photos: [],
      albumId: "",
      width: -1,
      currentImage: 0
    };
    this.parsePhoto = this.parsePhoto.bind(this);
    this.goBack = this.goBack.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

  parsePhoto = obj => {
    const photoArray = [];
    obj.forEach(photo => {
      let image = {};
      image.src = photo.sizes[8].src;
      image.width = photo.sizes[8].width;
      image.height = photo.sizes[8].height;
      image.srcSet = [];
      photo.sizes.forEach(size => {
        const sizeLink = `${size.src} ${size.width}w`;
        image.srcSet.push(sizeLink);
      });
      image.sizes = [
        "(min-width: 320px) 50vw,(min-width: 768px) 33.3vw, (min-width: 992px) 25vw, 100vw"
      ];
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
    const { photos, width } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Button onClick={this.goBack}>
              <Icon src={backArrow} />
            </Button>
            <Breadcrump>альбомы / </Breadcrump>
            <Breadcrump>{this.props.location.albumName}</Breadcrump>
          </div>
          <div className="col-xs-12">
            <Measure
              bounds
              onResize={contentRect =>
                this.setState({ width: contentRect.bounds.width })
              }
            >
              {({ measureRef }) => {
                if (width < 1) {
                  return <div ref={measureRef} />;
                }
                let columns = 2;

                if (width >= 576) {
                  columns = 3;
                }
                if (width >= 992) {
                  columns = 4;
                }
                return (
                  <div ref={measureRef}>
                    <Gallery
                      photos={photos}
                      onClick={this.openLightbox}
                      columns={columns}
                    />
                    <Lightbox
                      images={photos}
                      backdropClosesModal={true}
                      onClose={this.closeLightbox}
                      onClickPrev={this.gotoPrevious}
                      onClickNext={this.gotoNext}
                      currentImage={this.state.currentImage}
                      isOpen={this.state.lightboxIsOpen}
                    />
                  </div>
                );
              }}
            </Measure>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
