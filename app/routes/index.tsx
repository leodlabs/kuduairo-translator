import { useState } from "react";
import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import ReactHowler from "react-howler";
import translate from "~/utils/translate";
import handshake from "~/images/handshake.png";
import Contributors from "~/components/contributors";
import Blurb from "~/components/blurb";
import Footer from "~/components/footer";
import {isMobile} from 'react-device-detect';
import audio from "~/audio/transition.mp3";

export const loader: LoaderFunction = async () => {
  let contributors = [];
  try {
    const response = await fetch(
      "https://api.github.com/repos/leodlabs/kuduairo-translator/contributors"
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    contributors = await response.json();
  } catch (error) {
    console.error("Error fetching contributors", error);
  }

  return { contributors };
};

export default function Index() {
  const [translatedText, setTranslatedText] = useState<string>("");
  const { contributors } = useLoaderData();
  const [ transitionPlaying, setTransitionPlaying ] = useState<boolean>(false)
  const [ audioPlaying, setAudioPlaying ] = useState<boolean>(false)
  const [ submitText , setSubmitText ] = useState<string>("Traduzuaire");
  const [ firstClick, setFirstClick ] = useState<boolean>(true);

  const changeBodyBackground = () => {
    if(!firstClick) return

    document.body.classList.remove('wrapper-boring')
    document.body.classList.add('wrapper')
    setTransitionPlaying(true)
  }

  const handleTranslate = (event: any) => {
    event.preventDefault();

    changeBodyBackground()
    setAudioPlaying(firstClick)
    setFirstClick(false)

    setSubmitText("Traduzuaindo")
    setTranslatedText('Fazoaindo cieincia...');

    const portugueseText = event.target.elements["portuguese-text"].value;

    translate(portugueseText).then(data => {
      setTranslatedText(data)
      setSubmitText("Traduzuaire")
    })
  };

  const vaporwave = () => {
    if(isMobile) return
    return (
      <>
        <div className="top-plane"></div>
        <div className="bottom-plane"></div>
      </>
    )
  }

  return (
    <>
     
      <div className="container h-100">
        <div className="row justify-content-center">
          <header className="col-lg-12 text-center">
            <h1>Kuduairo Translator</h1>
            <img
              src={handshake}
              alt="Aperto de mãos entre Braseil e Angoaila"
              className="img-fluid handshake mb-3"
            />
            <ReactHowler src={audio} playing={audioPlaying} html5/>
          </header>
        </div>
        <form className="row justify-content-center" onSubmit={handleTranslate}>
          <section className="col-lg-5">
            <div className="form-group">
              <label htmlFor="portuguese-text">Texto em Português:</label>
              <textarea
                id="portuguese-text"
                name="portuguese-text"
                className="form-control"
                placeholder="Escreva seu texto a ser traduzido para o Kuduairo"
                rows={10}
              />
            </div>
          </section>
          <section className="col-lg-2 my-auto text-center">
            <button type="submit" className="btn btn-block btn-light mt-2">
              {submitText}
            </button>
          </section>
          <section className="col-lg-5">
            <div className="form-group">
              <label htmlFor="kuduro-text" className="input-label">
                Tradução em Kuduairo:
              </label>

              <textarea
                id="kuduro-text"
                name="kuduro-text"
                className="form-control"
                onChange={(e) => e.preventDefault()}
                rows={10}
                value={translatedText}
              />
            </div>
          </section>
          <hr className="mt-4" />
          <Blurb />
          <hr className="mt-4" />
          <Contributors contributors={contributors} />
        </form>
      </div>
      <Footer />
      { transitionPlaying ? vaporwave() : '' }
    </>
  );
}
