import React, { Component } from "react";
import "./Img.css";

export default class Img extends Component {
  _mounted = true;

  state = { fullImageLoaded: false };

  imageRef = React.createRef();

  componentDidMount = () => {
    this._mounted = true;
  };

  componentWillUnmount = () => {
    this._mounted = false;
  };

  componentDidUpdate = prevProps => {
    if (prevProps.image !== this.props.image) {
      this.imageRef.current.dataset.imagetype = "placeholder";
    }
  };

  handleLoadEnd = e => {
    const ev = { ...e };
    if (e.target.dataset.imagetype === "placeholder") {
      if (!this._mounted) return;
      this.setState({ fullImageLoaded: false }, () => {
        ev.target.src = this.props.image;
        ev.target.dataset.imagetype = "full";
      });
    } else if (e.target.dataset.imagetype === "full") {
      if (!this._mounted) return;
      this.setState({ fullImageLoaded: true });
    }
  };

  render() {
    const { fullImageLoaded } = this.state;
    const { image, placeholder, alt, className, ...props } = this.props;

    const imgAlt = this.props.alt ? this.props.alt : `${image}`;

    return placeholder ? (
      <img
        src={placeholder}
        alt={imgAlt}
        className={`${className}${fullImageLoaded ? "" : " Img--blur"}`}
        onLoad={this.handleLoadEnd}
        data-imagetype="placeholder"
        ref={this.imageRef}
        {...props}
      />
    ) : (
      <img src={image} alt={imgAlt} className={className} {...props} />
    );
  }
}

Img.defaultProps = {
  placeholder: false
};
