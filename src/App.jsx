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
            <ImageModal
              images={images}
              thumbnails
              onModalClose={this.onModalClose}
            />
          )}
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
            recusandae voluptate nobis, minus esse aspernatur numquam ullam
            nihil quidem non a quaerat corrupti porro dolores iusto dolor,
            corporis sed quas voluptatem? Amet voluptate accusantium id
            temporibus aspernatur animi obcaecati hic expedita dolorem
            reiciendis ea qui dolor dolorum, a, eius, culpa laborum. Natus
            quidem incidunt explicabo consequuntur reiciendis dolore obcaecati
            nihil, accusantium quis, libero assumenda, labore eius commodi
            dolorem iure asperiores quia hic in odio magnam molestias. Sint
            deserunt ad soluta! Ipsum veniam omnis esse suscipit quae quia,
            delectus ipsa dolores unde illo earum. Quasi placeat maxime
            similique nam eaque quaerat. Similique ratione veritatis quod
            repellat voluptatum ipsum est consequatur doloribus? Quia dolorum
            aperiam eaque distinctio nobis, ut, accusantium a facilis ex est
            quaerat consequuntur similique tenetur, vero voluptates harum
            necessitatibus corporis animi commodi. Fuga provident ducimus, sit
            magni explicabo omnis nobis aliquam doloribus veniam amet earum!
            Porro perferendis sunt consequuntur, sit at aut quae ipsam quo rem,
            ullam eius mollitia reiciendis labore sequi nemo consequatur, natus
            distinctio? Molestias iure veniam necessitatibus ut ipsa soluta quod
            esse aliquid distinctio nam laudantium, voluptate explicabo? Esse
            atque excepturi optio, quidem ipsum asperiores placeat odit quae
            incidunt maiores quis. Animi reprehenderit itaque repellendus,
            tempore odio similique, rem ipsa officia aliquid culpa ducimus
            magnam deserunt omnis voluptatibus molestiae quibusdam architecto
            impedit, perferendis accusamus quod ex. Nulla natus maxime ratione
            dolorem debitis aspernatur accusantium voluptas laborum quam cumque?
            Pariatur facere, repudiandae repellat distinctio consequuntur
            obcaecati sequi suscipit ab doloremque maxime. Repellendus veritatis
            accusantium veniam, corrupti tempora et consectetur sed incidunt
            doloremque eveniet modi autem nobis repudiandae eum sapiente amet
            molestias deserunt neque nemo totam error ex quia? Expedita possimus
            aperiam vel veritatis sapiente tempora aspernatur hic dolor totam
            corporis! Fugit a blanditiis perspiciatis delectus cupiditate
            voluptatibus, quasi ea odit dolor aliquid magni ducimus odio ipsam
            exercitationem quidem quo voluptates velit eos non repellendus vel
            architecto. Numquam, quaerat facilis corrupti dignissimos ducimus
            enim qui autem quas. Atque ratione, rem a et quidem ipsam numquam
            porro perferendis, expedita itaque laborum assumenda recusandae hic
            laudantium quis laboriosam animi sapiente. Ab impedit cum molestiae
            cumque amet odit praesentium molestias soluta fuga dolorem, facilis
            quasi asperiores nam ea enim fugiat accusantium aspernatur
            exercitationem non et. Assumenda similique velit accusantium eveniet
            omnis iure dolorem maiores doloremque nulla, numquam necessitatibus
            libero odio. Veniam praesentium tempora consequatur aperiam commodi
            amet provident cupiditate, ex quam illo at ipsum totam harum minima
            quas dolorum quo! Quis officia nulla quibusdam vero quidem repellat
            delectus ipsam qui, ut maiores libero nobis eum ex explicabo ratione
            quae reiciendis odit, voluptatem repellendus quaerat. Ratione,
            officia delectus. Minus veniam recusandae ratione nobis vero quaerat
            laborum iste ullam officia, culpa alias molestias. Laborum in
            aliquam porro est ullam ea labore maiores? Possimus id, eos veniam,
            temporibus adipisci aperiam autem rem vel, eius explicabo optio
            quas. Veniam alias quaerat nesciunt. Blanditiis eos veniam est
            voluptas laborum unde nihil corrupti error consequuntur repudiandae,
            qui fugiat explicabo illum quas quisquam asperiores animi nemo, nam
            vero dolore tenetur architecto odio perferendis? Voluptates,
            officiis! Explicabo, inventore magnam?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
            recusandae voluptate nobis, minus esse aspernatur numquam ullam
            nihil quidem non a quaerat corrupti porro dolores iusto dolor,
            corporis sed quas voluptatem? Amet voluptate accusantium id
            temporibus aspernatur animi obcaecati hic expedita dolorem
            reiciendis ea qui dolor dolorum, a, eius, culpa laborum. Natus
            quidem incidunt explicabo consequuntur reiciendis dolore obcaecati
            nihil, accusantium quis, libero assumenda, labore eius commodi
            dolorem iure asperiores quia hic in odio magnam molestias. Sint
            deserunt ad soluta! Ipsum veniam omnis esse suscipit quae quia,
            delectus ipsa dolores unde illo earum. Quasi placeat maxime
            similique nam eaque quaerat. Similique ratione veritatis quod
            repellat voluptatum ipsum est consequatur doloribus? Quia dolorum
            aperiam eaque distinctio nobis, ut, accusantium a facilis ex est
            quaerat consequuntur similique tenetur, vero voluptates harum
            necessitatibus corporis animi commodi. Fuga provident ducimus, sit
            magni explicabo omnis nobis aliquam doloribus veniam amet earum!
            Porro perferendis sunt consequuntur, sit at aut quae ipsam quo rem,
            ullam eius mollitia reiciendis labore sequi nemo consequatur, natus
            distinctio? Molestias iure veniam necessitatibus ut ipsa soluta quod
            esse aliquid distinctio nam laudantium, voluptate explicabo? Esse
            atque excepturi optio, quidem ipsum asperiores placeat odit quae
            incidunt maiores quis. Animi reprehenderit itaque repellendus,
            tempore odio similique, rem ipsa officia aliquid culpa ducimus
            magnam deserunt omnis voluptatibus molestiae quibusdam architecto
            impedit, perferendis accusamus quod ex. Nulla natus maxime ratione
            dolorem debitis aspernatur accusantium voluptas laborum quam cumque?
            Pariatur facere, repudiandae repellat distinctio consequuntur
            obcaecati sequi suscipit ab doloremque maxime. Repellendus veritatis
            accusantium veniam, corrupti tempora et consectetur sed incidunt
            doloremque eveniet modi autem nobis repudiandae eum sapiente amet
            molestias deserunt neque nemo totam error ex quia? Expedita possimus
            aperiam vel veritatis sapiente tempora aspernatur hic dolor totam
            corporis! Fugit a blanditiis perspiciatis delectus cupiditate
            voluptatibus, quasi ea odit dolor aliquid magni ducimus odio ipsam
            exercitationem quidem quo voluptates velit eos non repellendus vel
            architecto. Numquam, quaerat facilis corrupti dignissimos ducimus
            enim qui autem quas. Atque ratione, rem a et quidem ipsam numquam
            porro perferendis, expedita itaque laborum assumenda recusandae hic
            laudantium quis laboriosam animi sapiente. Ab impedit cum molestiae
            cumque amet odit praesentium molestias soluta fuga dolorem, facilis
            quasi asperiores nam ea enim fugiat accusantium aspernatur
            exercitationem non et. Assumenda similique velit accusantium eveniet
            omnis iure dolorem maiores doloremque nulla, numquam necessitatibus
            libero odio. Veniam praesentium tempora consequatur aperiam commodi
            amet provident cupiditate, ex quam illo at ipsum totam harum minima
            quas dolorum quo! Quis officia nulla quibusdam vero quidem repellat
            delectus ipsam qui, ut maiores libero nobis eum ex explicabo ratione
            quae reiciendis odit, voluptatem repellendus quaerat. Ratione,
            officia delectus. Minus veniam recusandae ratione nobis vero quaerat
            laborum iste ullam officia, culpa alias molestias. Laborum in
            aliquam porro est ullam ea labore maiores? Possimus id, eos veniam,
            temporibus adipisci aperiam autem rem vel, eius explicabo optio
            quas. Veniam alias quaerat nesciunt. Blanditiis eos veniam est
            voluptas laborum unde nihil corrupti error consequuntur repudiandae,
            qui fugiat explicabo illum quas quisquam asperiores animi nemo, nam
            vero dolore tenetur architecto odio perferendis? Voluptates,
            officiis! Explicabo, inventore magnam?
          </p>
        </header>
      </div>
    );
  }
}
