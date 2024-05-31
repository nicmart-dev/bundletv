import "./Package.scss";
import genreIcon from "../assets/icons/small-drama.svg";
import themeIcon from "../assets/icons/small-heart.svg";
import channelIcon from "../assets/icons/small-bigplay-square.svg";
import hdChannelIcon from "../assets/icons/small-film1.svg";
import streamingIcon from "../assets/icons/small-cast.svg";
import netflixImg from "../assets/images/img-netflix.png";

export default function Package() {
  function Selection({ name }) {
    return <div className="package__selection">{name}</div>;
  }
  return (
    <>
      <div className="package">
        <div className="package__top">
          <h2 className="package__title">The Package</h2>
          <p className="package__price">
            $<span className="package__price-num">70</span>/mo.
          </p>
        </div>
        <div className="package__middle">
          <p className="package__content-title">consist of</p>
          <div className="package__sections">
            <div className="package__section">
              <div className="package__section-title">
                <img src={genreIcon} alt="genre icon" />
                <p className="package__section-title-text">Genere</p>
              </div>
              <div className="package__selections">
                <Selection name={"Action"} />
                <Selection name={"Animation"} />
                <Selection name={"Horror"} />
                <Selection name={"Triller"} />
              </div>
            </div>
            <div className="package__section">
              <div className="package__section-title">
                <img src={themeIcon} alt="heart icon" />
                <p className="package__section-title-text">Themes</p>
              </div>
              <div className="package__selections">
                <Selection name={"News"} />
                <Selection name={"Sports"} />
              </div>
            </div>
            <div className="package__section">
              <div className="package__section-title">
                <img src={channelIcon} alt="channel icon" />
                <p className="package__section-title-text">Channels</p>
              </div>
              <div className="package__selections">
                <Selection name={"ABC"} />
                <Selection name={"Aptn"} />
                <Selection name={"Faith"} />
                <Selection name={"TravelXP"} />
                <Selection name={"ABC"} />
                <Selection name={"Aptn"} />
                <Selection name={"Faith"} />
                <Selection name={"TravelXP"} />
              </div>
            </div>
            <div className="package__section">
              <div className="package__section-title">
                <img src={hdChannelIcon} alt="hd channel icon" />
                <p className="package__section-title-text">HD Channels</p>
              </div>
              <div className="package__selections">
                <Selection name={"ABC"} />
                <Selection name={"Aptn"} />
                <Selection name={"Faith"} />
                <Selection name={"TravelXP"} />
                <Selection name={"Aptn"} />
                <Selection name={"Faith"} />
                <Selection name={"TravelXP"} />
              </div>
            </div>
            <div className="package__section">
              <div className="package__section-title">
                <img src={streamingIcon} alt="streaming icon" />
                <p className="package__section-title-text">Streaming</p>
              </div>
              <div className="package__selections">
                <div className="package__streaming-selection">
                  <img
                    className="package__streaming-img"
                    src={netflixImg}
                    alt="Netflix"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="package__buttom">
          <button className="package__btn package__btn--customize">
            Customize
          </button>
          <button className="package__btn package__btn--submit">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
