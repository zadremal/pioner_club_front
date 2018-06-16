import React from "react";
import styled from "styled-components";

const Youtube = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  padding-top: 56.25%;
  background-image: url(${props => props.background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Play = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 80px;
  padding: 0;
  background: none;
  border: none;
  transform: translateX(-50%) translateY(-50%);
  cursor: pointer;
  outline: none;

  &:hover .svg-icon {
    fill: #ff0000;
  }

  &:active .svg-icon {
    fill: #d7143a;
  }

  &:focus .svg-icon {
    outline: none;
  }

  &:focus {
    box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.8);
    outline: none;
  }
`;

const Icon = styled.svg`
  height: 100%;
  transition: 0.2s ease-out;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
`;

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showButton: true,
      showVideo: false
    };

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick = () => {
    this.setState({
      showButton: false,
      showVideo: true
    });
  };

  render() {
    const videoId = this.props.videoId;
    const showVideo = this.state.showVideo;
    const showButton = this.state.showButton;
    const videoUrl =
      "https://www.youtube.com/embed/" + videoId + "?rel=0&autoplay=1";
    const backgroundUrl =
      "https://img.youtube.com/vi/" + videoId + "/hqdefault.jpg";
    return (
      <Youtube background={backgroundUrl}>
        {showButton && (
          <Play onClick={this.onButtonClick}>
            <Icon
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
            >
              <g>
                <path
                  className="youtube-video svg-icon"
                  fill="#F44336"
                  d="M490.24,113.92c-13.888-24.704-28.96-29.248-59.648-30.976C399.936,80.864,322.848,80,256.064,80
		c-66.912,0-144.032,0.864-174.656,2.912c-30.624,1.76-45.728,6.272-59.744,31.008C7.36,138.592,0,181.088,0,255.904
		C0,255.968,0,256,0,256c0,0.064,0,0.096,0,0.096v0.064c0,74.496,7.36,117.312,21.664,141.728
		c14.016,24.704,29.088,29.184,59.712,31.264C112.032,430.944,189.152,432,256.064,432c66.784,0,143.872-1.056,174.56-2.816
		c30.688-2.08,45.76-6.56,59.648-31.264C504.704,373.504,512,330.688,512,256.192c0,0,0-0.096,0-0.16c0,0,0-0.064,0-0.096
		C512,181.088,504.704,138.592,490.24,113.92z"
                />
                <polygon fill="#FAFAFA" points="192,352 192,160 352,256 	" />
              </g>
            </Icon>
          </Play>
        )}
        {showVideo && (
          <Iframe
            title="feedback4"
            src={videoUrl}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen="true"
            controls="false"
          />
        )}
      </Youtube>
    );
  }
}
