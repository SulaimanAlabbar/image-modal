import React, { Component } from "react";
import ImageModal from "./ImageModal";
import images from "./images.json";
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
              // startingImageIndex={2}
              onModalClose={this.onModalClose}
            />
          )}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            facere reprehenderit, fugit sit dolorum facilis quos deleniti a
            inventore. Minus amet corrupti numquam rerum perferendis, mollitia
            nihil saepe nemo eligendi praesentium dolore distinctio labore dicta
            esse enim? Ducimus corporis laboriosam, harum fugiat nam, dicta amet
            quibusdam unde quia sequi aliquam necessitatibus libero, cumque
            nesciunt nisi temporibus hic deleniti! Possimus ipsum perferendis
            doloribus id delectus qui error, totam explicabo necessitatibus
            accusamus laboriosam quis laborum inventore quod voluptates dolorem
            consequatur aut rerum, enim praesentium dolore provident excepturi
            ad optio? Mollitia odit voluptates reiciendis vel quam doloribus
            libero natus ducimus adipisci autem itaque accusantium nam minima
            dolorum numquam, laudantium reprehenderit praesentium possimus!
            Sequi facilis enim, delectus voluptatibus, at hic illum ut sit
            dignissimos labore fuga illo, ratione perferendis? Vel odit tempore
            architecto maxime repudiandae labore? Ab, blanditiis doloribus eius
            a facilis, alias temporibus molestias aliquid quia voluptatum
            voluptas! Tenetur deserunt qui cupiditate quibusdam est a provident
            similique nesciunt fugiat voluptatem, dolore quis ipsa culpa?
            Assumenda qui dicta consequatur autem dolor iste. Accusamus quas
            numquam nobis voluptates cum placeat pariatur quo totam! Dolorem
            obcaecati rerum sapiente, quam consequuntur placeat dignissimos
            impedit, porro, earum deleniti praesentium? Reiciendis hic neque
            expedita quibusdam aliquid odit nemo, impedit repellendus id optio
            quaerat accusamus doloremque quos voluptates dolore sit aut ad ab
            eius soluta? Quis, est sunt? Fugiat, consequuntur dolores dicta eos
            est reprehenderit recusandae soluta blanditiis perspiciatis amet
            eius vel tenetur labore cupiditate. Laborum, atque dignissimos.
            Suscipit, similique atque eos praesentium corrupti soluta deleniti
            inventore excepturi illo saepe. Delectus ab, unde esse dolorem
            voluptates tempore nihil laborum sed modi non? Dolores neque
            blanditiis, voluptatibus vero omnis esse saepe assumenda ex
            distinctio beatae molestias et eligendi error quia sapiente
            consequuntur maiores voluptatum itaque est! Quo nisi cum iure
            placeat voluptatum natus, commodi dolor ipsa animi perspiciatis
            corporis, ducimus quidem fuga quibusdam neque! At ex maxime nihil
            repudiandae corrupti perspiciatis minima in pariatur rerum dolorem!
            Atque quia quos impedit accusamus itaque maiores similique
            doloremque mollitia id soluta aliquid, quidem, ullam magni earum est
            illo tenetur natus consequatur quasi deserunt reprehenderit dolorem
            quas fugit! Sequi fugiat tenetur excepturi earum molestiae vero
            nihil non adipisci, sed ea cumque aliquam vel facilis aspernatur.
            Veniam, delectus. Porro iure provident asperiores debitis totam nam
            repudiandae rem possimus architecto eveniet veniam quae eos
            voluptatem, qui nemo similique excepturi optio inventore enim
            tenetur culpa consequuntur, numquam quaerat. Quidem aliquam
            reprehenderit id saepe sunt quae excepturi at, repellendus itaque
            velit facilis obcaecati alias laudantium magnam ipsa voluptatum
            cumque numquam quas molestias ut beatae. Modi quod, dolores
            reiciendis eum incidunt tenetur quam eius dolor, voluptates aperiam
            distinctio, tempore voluptate voluptatibus ipsum laborum dolorum
            consectetur. Architecto voluptate, ad vero dolore doloremque placeat
            tempora pariatur, nam impedit sunt, fuga tempore? Delectus
            inventore, fuga incidunt facere eos quia beatae voluptate nam
            quibusdam amet? Nobis illum nulla dolorem quia dolorum! Vel
            blanditiis, quasi atque ipsam eaque omnis! Illum esse quos,
            necessitatibus rerum sunt iure voluptatum. Consequatur nostrum ea
            ratione, iste, ex non culpa nesciunt tenetur nam assumenda magnam,
            maiores dolor pariatur sunt unde eum numquam atque ipsa totam
            voluptatum debitis. Id illum vitae possimus esse debitis quas modi
            alias ad voluptate facilis repellendus, culpa asperiores sunt
            exercitationem, quibusdam ipsum assumenda fuga! Tenetur ratione
            laborum optio dolores atque eum sapiente, enim repellendus a unde
            voluptas quo. Fuga eum velit tenetur sapiente mollitia aliquam autem
            perferendis blanditiis non facere dolores, exercitationem laborum
            dolorem rerum reprehenderit cumque, animi placeat sequi! Inventore
            harum est molestiae quos nisi suscipit et aut dolorum, adipisci
            doloribus tempora, ex veritatis ullam unde ea quae placeat tenetur
            corrupti quod quia maxime aspernatur at, magni sapiente? Rerum et
            amet accusamus soluta ipsum iure adipisci cum nobis pariatur, itaque
            quos, natus magni iusto minus? Obcaecati laudantium aperiam, quaerat
            voluptatem impedit cumque ut ducimus fugiat, minima magni eius esse!
            Tempore modi laudantium quidem incidunt at debitis ad ducimus,
            similique sed cupiditate iusto tempora nostrum neque mollitia, sint
            pariatur quod facilis nisi. Esse perferendis officia repudiandae
            mollitia culpa earum quibusdam eveniet quos, quam excepturi.
            Sapiente suscipit, incidunt placeat facilis minus quis quas tenetur,
            obcaecati cum ducimus blanditiis sint ea nisi porro quos, soluta
            voluptatem ratione accusamus est distinctio nam ab error. Maxime,
            similique architecto, neque odio exercitationem ipsa dolorum
            doloribus expedita perspiciatis corporis inventore necessitatibus
            sequi consequatur tempore dolore non sapiente molestiae libero
            labore fugit ad reprehenderit perferendis esse? Ab eum sed commodi
            fugit consequatur, in nisi iste quos sint nobis quod, autem nemo
            illum ipsa aliquam laboriosam ex aperiam asperiores? Illum inventore
            esse non minus beatae quae quisquam accusantium, error architecto
            quidem accusamus voluptatibus deleniti voluptatem, qui possimus
            expedita aperiam explicabo id quos optio, consequuntur consectetur.
            Accusantium, laudantium magni. Non perspiciatis est tenetur? Dolore
            doloribus officia velit odio explicabo. Vel deleniti fugit, veniam
            eius voluptatum rem accusantium possimus temporibus officia sit! Sed
            suscipit enim at beatae praesentium veritatis labore recusandae
            architecto natus deleniti, error cumque ipsum illum maxime tempora
            vero magnam iste aspernatur maiores ex in saepe incidunt impedit
            obcaecati. Doloremque ut excepturi temporibus, laboriosam dolores
            repellendus nostrum, quos molestiae nihil est quaerat, aut ducimus
            blanditiis saepe eos laborum nam aliquid iure. In vel dolores
            consequuntur eum ducimus inventore perferendis suscipit. Rem, soluta
            fugiat quibusdam praesentium adipisci, sunt repellendus blanditiis
            nobis et necessitatibus beatae ad voluptate impedit illo hic fugit
            ipsa unde nulla voluptatibus assumenda eveniet? Dolorem iusto
            voluptas sit harum, eveniet eaque laudantium maiores sint itaque
            molestias officia dolore sunt quaerat quibusdam vel est, quo eos,
            blanditiis aliquid! Deserunt laudantium error doloribus, dicta illo
            in nisi itaque porro culpa provident nulla incidunt rem sequi
            cupiditate quidem vero laborum reiciendis aliquid iste
            necessitatibus esse! Repellat et harum rem laborum! Vero corporis
            mollitia ipsa ad dolorem provident! Nam possimus blanditiis
            reprehenderit accusantium repellat repellendus sequi, dolorum
            doloremque quos assumenda eveniet delectus voluptatum explicabo
            unde! Molestias impedit dolor, nulla atque est deleniti dolorem
            praesentium consequatur error. Et necessitatibus debitis asperiores
            id repellat veniam fugiat deserunt pariatur perferendis aspernatur
            deleniti eum nulla fugit in, explicabo dolore possimus. Fugiat quos
            aperiam iure ea totam enim odio facere animi, nemo blanditiis sed
            maxime est ab sunt similique? Omnis ipsa autem cumque iure ad, sed
            fugit et nisi placeat incidunt a quam, mollitia, sit aspernatur
            suscipit voluptatem optio facere! Earum eligendi nulla, porro
            dolorem aliquam reiciendis, cum expedita praesentium, illum corrupti
            minus labore iusto rem unde aut voluptate. Quibusdam tenetur quasi,
            modi voluptates recusandae quo tempore vitae illum corrupti? Ratione
            tempora magni enim laudantium autem saepe deleniti dolor animi,
            nostrum aperiam amet maiores reiciendis totam ea iure voluptatibus
            quibusdam quidem natus minus incidunt fuga earum voluptates.
            Possimus, atque aspernatur voluptas minima tempore et reiciendis.
            Assumenda laborum deleniti at quia optio exercitationem beatae earum
            cupiditate iure, pariatur aspernatur. Iusto molestias architecto
            illo placeat. Ipsum minus unde earum eaque expedita omnis est
            praesentium incidunt? Numquam nihil corrupti ea repellendus quasi
            quibusdam dolor id quae itaque? A laudantium iste et aut impedit in
            eum facilis, quam debitis optio, eius illo perferendis iure corrupti
            libero maiores at aspernatur! Quaerat ex corrupti unde quas
            voluptatum natus similique ipsam impedit id, voluptate laborum iure
            magnam animi magni pariatur debitis rem reprehenderit, numquam
            officiis atque. Iure a aliquid assumenda sunt ipsum, voluptatibus
            facere neque eaque eius. Facilis, nisi fugit rerum enim maiores
            sequi tempora dolore commodi ab possimus tenetur quasi repellendus
            harum sit exercitationem nesciunt atque. Debitis deleniti nostrum
            harum ea, necessitatibus corrupti sed, soluta velit cupiditate
            perspiciatis iure dolorem sequi rerum tenetur explicabo, culpa et
            neque labore eligendi similique modi officia eius at. Quidem tenetur
            debitis excepturi expedita in quas esse saepe qui numquam corrupti
            earum quam aut asperiores odit, sed ullam exercitationem totam
            voluptatem placeat, nihil eligendi! Veniam magni, eaque nostrum sit
            a iure, maxime quaerat explicabo dolorum harum ad, error modi. Odit
            odio aliquid doloremque sunt inventore libero facere, repudiandae
            eligendi laboriosam accusantium. Nihil maiores corporis eius
            temporibus et molestiae vel consequuntur, cum ipsum quisquam commodi
            nobis cupiditate voluptates doloribus nemo iure. Vel fugiat
            repudiandae possimus deserunt, aspernatur tempora rem expedita.
            Dolore facilis et, quis a assumenda fugiat, fugit aliquid beatae
            quaerat aspernatur natus iste iure reprehenderit officiis molestiae
            autem, omnis voluptate incidunt impedit ipsum eius distinctio ea
            vero inventore! Aut atque cumque ad fuga repudiandae cupiditate
            ratione vitae, voluptatibus vel sunt doloribus autem iusto porro.
            Laborum corrupti labore corporis vero, perferendis exercitationem
            non. Nobis repellendus maxime sequi est, repellat dolores tenetur
            commodi provident deleniti quaerat voluptatum dolore dolor, harum
            veniam, odio non expedita? Nihil eos voluptatum illo magni
            blanditiis cupiditate suscipit quia dignissimos mollitia aperiam
            beatae autem, exercitationem alias, eum, voluptate odit deserunt
            officiis dolorum! Ea, magni unde facere, earum ab atque nam repellat
            eius eligendi consequuntur expedita aut eum autem aspernatur
            recusandae qui quidem accusantium at pariatur error corporis quaerat
            labore dolor? Libero nesciunt voluptas illum molestiae nihil enim
            quae repudiandae tenetur, quisquam eum adipisci veniam ipsum?
            Voluptate cupiditate eaque ea, nam cumque reiciendis fuga
            exercitationem quos, corporis deserunt consectetur placeat eveniet!
            Provident, perferendis? Voluptate cum ab esse? Deleniti quaerat
            vitae sint ipsa quidem quasi aliquam dolorum. Asperiores nostrum
            nesciunt aperiam voluptas quisquam corporis quae veniam ullam earum
            perspiciatis eveniet expedita, ut dolores omnis hic, eos laudantium
            fugit nobis eligendi perferendis at eaque. Numquam quas id iste quod
            optio, quaerat recusandae quam voluptate et. Modi nisi dolore quam
            harum quas fugit architecto possimus numquam ex eum adipisci,
            aperiam autem recusandae natus omnis assumenda distinctio cupiditate
            ipsam maxime. Quibusdam, quas repellendus amet accusamus totam
            facilis. Dignissimos, repudiandae? Nostrum nihil voluptates eveniet,
            vero atque repellat adipisci, error nobis deleniti ipsam suscipit
            totam et officia ipsa magni eaque provident eligendi non! Quaerat ut
            quas sequi possimus molestiae similique, dolorem eos ab beatae modi
            nostrum voluptatibus perferendis impedit praesentium unde, dolore
            blanditiis fugit sit recusandae. Minima saepe ut laudantium fugiat
            exercitationem iure! Commodi ratione facere alias sequi eum modi
            beatae, itaque voluptas nostrum reiciendis dolore, quaerat, quis
            tempore in deleniti. Itaque, repellat maxime laboriosam sunt, neque
            perspiciatis molestiae voluptatibus tenetur praesentium excepturi
            harum ipsum, autem in consectetur quam. Asperiores voluptas cum
            consequatur exercitationem atque dolor rerum nesciunt quo, veritatis
            tempora, explicabo aperiam deleniti odit, in laboriosam ex cumque
            modi obcaecati voluptatibus omnis! Ex ullam iure dolore itaque rerum
            nihil nostrum inventore similique, at sapiente eaque animi eveniet
            culpa, doloremque reprehenderit? Obcaecati nisi a maiores optio
            accusamus, aperiam, ea eaque laboriosam vero, nam amet architecto
            quas. Tempora et laborum earum quod deserunt quibusdam. Optio modi
            officiis aspernatur beatae vel, nisi dolores quaerat quae, soluta
            similique saepe pariatur aut alias praesentium quam! Harum quaerat
            cum enim asperiores dolorum. Corporis nemo et magnam architecto ad
            velit sint accusantium officiis atque dolorum quos saepe minima
            laudantium modi voluptatem quis cumque, mollitia labore eius sed
            quod cum consectetur exercitationem iste. Officia beatae eveniet
            delectus, nam magnam quas quo earum nulla dolore, eaque accusantium
            cupiditate, aut quasi doloribus alias laudantium quae a sapiente
            itaque architecto laboriosam. Asperiores provident, modi molestiae
            laborum saepe in consequatur laudantium? Quibusdam nesciunt corrupti
            quas blanditiis accusamus, dolorum iusto nihil facilis laudantium
            assumenda veritatis ratione reprehenderit consequuntur optio id
            repellat doloribus odio vero deserunt expedita laboriosam sunt!
            Repudiandae id natus optio velit ex itaque asperiores ratione,
            soluta totam, sint officia mollitia nulla quos sequi quaerat quia
            tempora culpa recusandae blanditiis voluptatem at. Repellendus modi,
            eaque veniam perferendis odio placeat. Rerum ipsum deleniti odio et,
            quia incidunt hic, iure fugit earum accusantium dolores numquam
            velit, optio eaque distinctio reprehenderit debitis ipsa quod harum.
            Fugiat quo doloribus eos ut id quaerat praesentium molestiae
            explicabo, itaque quam corrupti error nemo aspernatur? Veniam eius
            maiores aut deleniti inventore laudantium quod voluptates, culpa
            molestiae amet odit deserunt architecto fugiat iure distinctio
            voluptatum aspernatur ducimus. Ipsam qui vero veritatis esse,
            aliquam eligendi blanditiis exercitationem perspiciatis quas velit
            officia praesentium quia commodi deleniti explicabo! Distinctio at
            dolor excepturi consectetur magni non, exercitationem ea libero
            soluta nisi voluptas, iste, tempora rem dolorum ab ullam velit
            labore nihil delectus corrupti nostrum ducimus fuga repellendus.
            Quis minus beatae voluptatum officiis rem aperiam nobis! Cum
            reprehenderit quibusdam, doloribus commodi, porro minus quis
            molestiae quisquam quidem quas voluptas officiis soluta nobis
            reiciendis accusantium quam. Libero iusto quisquam quae, illum
            officiis optio amet ipsam nam enim? Officiis necessitatibus iure
            omnis ducimus, ipsam vel? Blanditiis exercitationem fugiat qui
            molestias minima sapiente ex neque!
          </p>
        </header>
      </div>
    );
  }
}
