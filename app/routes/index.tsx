import { useState } from "react";
import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";

import translate from "~/utils/translate";
import handshake from "~/images/handshake.png";
import Contributors from "~/components/contributors";
import Blurb from "~/components/blurb";
import Footer from "~/components/footer";
import audio from "~/audio/nofear.mp3";
import AudioPlayer from "~/components/audio-player";

export const loader: LoaderFunction = async () => {
  let contributors = [];
  let dataset = [];

  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/leodlabs/kuduro-language-dataset/main/dataset.json"
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    dataset = await response.json();
    
  } catch(error) {
    console.error("Error fetching dataset", error);
  }

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

  return { contributors, dataset };
};

export default function Index() {
  const [translatedText, setTranslatedText] = useState<string>("");
  const { contributors, dataset } = useLoaderData();

  const handleTranslate = (event) => {
    event.preventDefault();
    const portugueseText = event.target.elements["portuguese-text"].value;
    setTranslatedText(translate(portugueseText, dataset));
  };

  return (
    <>
      <div className="container h-100">
        <form className="row justify-content-center" onSubmit={handleTranslate}>
          <header className="col-lg-12 text-center">
            <h1>Kuduairo Translator</h1>
            <img
              src={handshake}
              alt="Aperto de mãos entre Braseil e Angoaila"
              className="img-fluid handshake mb-3"
            />
            <AudioPlayer />
          </header>
          <section className="col-lg-5">
            <div className="form-group">
              <label htmlFor="portuguese-text">Texto em Português:</label>
              <textarea
                id="portuguese-text"
                name="portuguese-text"
                className="form-control"
                placeholder="Escreva seu texto a ser traduzido para o Kuduairo"
                rows={13}
              />
            </div>
          </section>
          <section className="col-lg-2 my-auto text-center">
            <button type="submit" className="btn btn-block btn-light mt-2">
              Traduzoaire!
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
                rows={13}
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
    </>
  );
}
