import React, { Component } from "react";
import "./Img.css";

export default class Img extends Component {
  state = { loadedImage: false };

  handleLoadEnd = e => {
    const ev = { ...e };
    if (this.state.loadedImage) return;

    this.setState({ loadedImage: true }, () => {
      ev.target.src = this.props.image;
    });
  };

  render() {
    const { loadedImage } = this.state;
    const { image, placeholder, className } = this.props;
    return placeholder ? (
      <img
        src={placeholder}
        alt={`${image}`}
        className={`${className}${loadedImage ? "" : " Img--blur"}`}
        onLoad={this.handleLoadEnd}
      />
    ) : (
      <img src={image} alt={`${image}`} className={className} />
    );
  }
}
