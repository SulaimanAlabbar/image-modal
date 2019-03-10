import React, { Component } from "react";
import Img from "../Img";
// import Img from "react-image";
import CloseIcon from "./close.svg";
import "./ImageModal.css";

export default class ImageModal extends Component {
  state = {
    modalClose: false
  };

  handleModalClose = () => {
    this.setState({ modalClose: true });
  };

  onFadeOutEnd = e => {
    if (e.animationName === "fadeOut") {
      this.props.onModalClose();
    }
  };

  render() {
    const { modalClose } = this.state;
    const { images } = this.props;

    return (
      <div className="ImageModal--container">
        <Img
          image={images[3].full}
          placeholder={images[3].placeholder}
          className={`ImageModal--modal${
            modalClose ? " ImageModal--close" : ""
          }`}
        />
        <div
          className={`ImageModal--shade${
            modalClose ? " ImageModal--close" : ""
          }`}
          onClick={this.handleModalClose}
          onAnimationEnd={this.onFadeOutEnd}
        />
        <img
          src={CloseIcon}
          alt="Close"
          onClick={this.handleModalClose}
          className={`ImageModal--closeModal${
            modalClose ? " ImageModal--close" : ""
          }`}
        />
      </div>
    );
  }
}

// proptypes

// images: [
//   {
//     image: url,
//     placeholder: url,
//   },
//   {
//     image: url,
//     placeholder: url,
//   },
//   {
//     image: url,
//     placeholder: url,
//   },
// ]
