import kuduairoGif from "~/images/kuduairo.gif";
import Marquee from "react-fast-marquee";

export default function Blurb() {
  return (
    <section className="row mt-4 blurb-container">
      <div className="col-12 text-center">
        <div className={`row justify-content-center align-items-center mb-4`}>
          <div className="col-lg-8 blurb-description">
            <Marquee gradient={false} speed={200}>
              <h1 className="mb-4">AAAAAAAIII MINHA VOAIDA</h1>
            </Marquee>
            <p className="blurb-paragraph">
              Kuduruaistas de todas as iduaides se reuniram para codificaire
              esta oitava maravuailha do muaindo: o tradutoire oficiel de
              Portugueis Brasileirio para a lingua do Kuduairo. O tradutoire
              mais 💯% namayer para usuairios de angola, namibia, congo demo
              cratico e talveis do Brazil
            </p>
          </div>
          <div className="col-lg-4 align-items-center">
            <img
              src={kuduairoGif}
              alt="Gisfe do Kuduairo"
              className="img-fluid blurb-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
