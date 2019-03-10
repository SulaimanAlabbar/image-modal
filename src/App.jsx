import React, { Component } from "react";
import ImageModal from "./ImageModal";
import "./App.css";

export default class App extends Component {
  _mounted = false;

  state = {
    modalOpen: false
  };

  componentDidMount = () => {
    this._mounted = true;
  };

  componentWillUnmount = () => {
    this._mounted = false;
  };

  handleClick = () => {
    if (!this._mounted) return;

    this.setState(state => ({
      modalOpen: !state.modalOpen
    }));
  };

  onModalClose = () => {
    if (!this._mounted) return;

    this.setState({
      modalOpen: false
    });
  };

  render() {
    const images = [
      {
        full:
          "http://gallery-site.sulaiman-alabbar.com/images/gallery_img14_full_large.jpg",
        placeholder:
          "http://gallery-site.sulaiman-alabbar.com/images/gallery_img14_thumbnail_large.jpg"
      },
      {
        full:
          "http://gallery-site.sulaiman-alabbar.com/images/gallery_img15_full_large.jpg",
        placeholder:
          "http://gallery-site.sulaiman-alabbar.com/images/gallery_img15_thumbnail_large.jpg"
      },
      {
        full:
          "http://gallery-site.sulaiman-alabbar.com/images/gallery_img16_full_large.jpg",
        placeholder:
          "http://gallery-site.sulaiman-alabbar.com/images/gallery_img16_thumbnail_large.jpg"
      },
      {
        full:
          "http://gallery-site.sulaiman-alabbar.com/images/gallery_img17_full_large.jpg",
        placeholder:
          "http://gallery-site.sulaiman-alabbar.com/images/gallery_img17_thumbnail_large.jpg"
      }
    ];

    const { modalOpen } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <button type="button" onClick={this.handleClick}>
            Open Modal
          </button>
          {modalOpen && (
            <ImageModal images={images} onModalClose={this.onModalClose} />
          )}
        </header>
      </div>
    );
  }
}
