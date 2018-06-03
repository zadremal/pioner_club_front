import React from "react";
import { Heading } from "../../UI/section";
import { Link } from "react-router-dom";
import Card from "./Card";

const index = ({ albums }) => {
  return (
    <div className="container">
      {console.log(albums)}
      <div className="row">
        <div className="col-xs-12">
          <Heading>Последние фотоотчеты</Heading>
        </div>

        {albums.map(album => {
          const { size, title, id } = album;
          const background = album.sizes[4].src;
          return (
            <div key={id} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <Link
                to={{
                  pathname: `/photo/${id}`,
                  albumName: title
                }}
              >
                <Card
                  albumId={id}
                  background={background}
                  title={title}
                  size={size}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;
