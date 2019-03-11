import React, { Component } from "react";
import PropTypes from "prop-types";
import Img from "../Img";
import CloseIcon from "./close.svg";
import NextIcon from "./next.svg";
import PrevIcon from "./prev.svg";
import "./ImageModal.css";

export default class ImageModal extends Component {
  _mounted = false;

  _timeout = false;

  state = {
    modalClose: false,
    arrowsHiding: false,
    arrowsHidden: true,
    currentImageIndex: false
  };

  componentDidMount = () => {
    this._mounted = true;

    this.setState({
      currentImageIndex: this.props.startingImageIndex
    });
  };

  componentWillUnmount = () => {
    this._mounted = false;
  };

  handleModalClose = () => {
    if (!this._mounted) return;
    this.setState({ modalClose: true });
  };

  onFadeOutEnd = e => {
    if (e.animationName === "fadeOut") {
      this.props.onModalClose();
    }
  };

  onArrowsFadeOutEnd = e => {
    if (e.animationName === "fadeOut") {
      if (!this._mounted) return;
      this.setState({ arrowsHidden: true });
    }
  };

  handleMouseMove = () => {
    clearTimeout(this._timeout);
    if (!this._mounted) return;
    this.setState({ arrowsHidden: false, arrowsHiding: false }, () => {
      this._timeout = setTimeout(() => {
        if (!this._mounted) return;
        this.setState({ arrowsHiding: true });
      }, 1000);
    });
  };

  handleImageIndexChange = newIndex => {
    if (!this._mounted) return;
    this.setState({ currentImageIndex: newIndex });
  };

  handleNextImage = () => {
    if (!this._mounted) return;

    this.setState(state => ({
      currentImageIndex: state.currentImageIndex + 1
    }));
  };

  handlePrevImage = () => {
    if (!this._mounted) return;

    this.setState(state => ({
      currentImageIndex: state.currentImageIndex - 1
    }));
  };

  render() {
    const {
      currentImageIndex,
      modalClose,
      arrowsHiding,
      arrowsHidden
    } = this.state;
    const { images, thumbnails } = this.props;

    if (typeof currentImageIndex === "boolean")
      return <div style={{ display: "none" }} />;

    return (
      <div className="ImageModal--container">
        <div className="ImageModal--modal">
          <Img
            image={images[currentImageIndex].full}
            placeholder={
              images[currentImageIndex].placeholder
                ? images[currentImageIndex].placeholder
                : images[currentImageIndex].full
            }
            className={`ImageModal--modalImage${
              arrowsHidden ? " ImageModal--hideCursor" : ""
            }${modalClose ? " ImageModal--close" : ""}`}
            onMouseMove={this.handleMouseMove}
            onAnimationEnd={this.onFadeOutEnd}
          />
          <img
            src={PrevIcon}
            alt="Previous"
            onClick={this.handlePrevImage}
            className={`ImageModal--arrow ImageModal--prevImage${
              arrowsHidden || currentImageIndex === 0 ? " ImageModal--hide" : ""
            }${modalClose || arrowsHiding ? " ImageModal--close" : ""}`}
            onAnimationEnd={this.onArrowsFadeOutEnd}
            onMouseMove={this.handleMouseMove}
          />
          <img
            src={NextIcon}
            alt="Next"
            onClick={this.handleNextImage}
            className={`ImageModal--arrow ImageModal--nextImage${
              arrowsHidden || currentImageIndex === images.length - 1
                ? " ImageModal--hide"
                : ""
            }${modalClose || arrowsHiding ? " ImageModal--close" : ""}`}
            onAnimationEnd={this.onArrowsFadeOutEnd}
            onMouseMove={this.handleMouseMove}
          />
          {thumbnails && (
            <div
              className="ImageModal--thumbnails"
              onMouseMove={this.handleMouseMove}
            >
              {images.map((image, index) => (
                <img
                  src={image.placeholder}
                  alt={`${image.full}`}
                  key={`${image.full}`}
                  onClick={() => this.handleImageIndexChange(index)}
                  className={`ImageModal--thumbnails--image${
                    currentImageIndex === index
                      ? " ImageModal--thumbnails--currentImage"
                      : ""
                  }${arrowsHidden ? " ImageModal--hide" : ""}${
                    modalClose || arrowsHiding ? " ImageModal--close" : ""
                  }`}
                  onAnimationEnd={this.onArrowsFadeOutEnd}
                />
              ))}
            </div>
          )}
        </div>
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
          onAnimationEnd={this.onFadeOutEnd}
        />
      </div>
    );
  }
}

ImageModal.defaultProps = {
  thumbnails: false,
  startingImageIndex: 0
};

ImageModal.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.exact({
      full: PropTypes.string.isRequired,
      placeholder: PropTypes.string
    })
  ).isRequired,
  onModalClose: PropTypes.func.isRequired,
  startingImageIndex: PropTypes.number,
  thumbnails(props, propName, componentName) {
    if (typeof props[propName] !== "boolean") {
      return new Error(
        `'${propName}' supplied to '${componentName}' needs to be a boolean.`
      );
    }
    if (props[propName] && typeof props.images[0].placeholder === "undefined") {
      return new Error(
        `'${propName}' can only be supplied to '${componentName}' if the objects of prop 'images' have a placeholder property.`
      );
    }
    return null;
  }
};
