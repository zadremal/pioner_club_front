import React, { Component } from "react";
import Section from "../UI/section";
import Photos from "./Photos";
import Albums from "./Albums";
import { Route } from "react-router-dom";
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
        throw new Error(err);
      } else {
        this.setState({ albums: data.response.items });
      }
    });
  }
  render() {
    const { albums } = this.state;
    const path = this.props.match.path;
    return (
      <Section>
        <Route path={`${path}/:id`} component={Photos} />
        <Route
          exact
          path={`${path}`}
          render={() => <Albums albums={albums} />}
        />
      </Section>
    );
  }
}

export default index;
