import translate from "~/utils/translate";
import handshake from '~/images/handshake.png'
import Contributors from "~/components/contributors";
import Blurb from "~/components/blurb";
import Footer from "~/components/footer";
export default function Index() {

  const onTranslateClick = () => {
    const portugueseText = document.getElementById("portuguese-text").value;

    document.getElementById("kuduro-text").value = translate(portugueseText);
  }

  return (
    <>
    <div className="container h-100">
      <div className="row justify-content-center">
        <header className="col-lg-12 text-center">
          <h1>Kuduairo Translator</h1>
          <img src={handshake} alt="Aperto de mãos entre Braseil e Angoaila" className="img-fluid handshake mb-3" />
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
          <button className="btn btn-block btn-light mt-2" onClick={onTranslateClick}>Traduzoaire!</button>
        </section>
        <section className="col-lg-5">
          <div className="form-group">
            <label htmlFor="kuduro-text" className="input-label">Tradução em Kuduairo:</label>

            <textarea
              id="kuduro-text"
              name="kuduro-text"
              className="form-control"
              onChange={(e) => e.preventDefault()}
              rows={13}
              value=""
            />
          </div>
        </section>
        <hr className="mt-4"/>
        <Blurb/>
        <hr className="mt-4"/>
        <Contributors/>
      </div>
    </div>
    <Footer/>
    </>
  );
}
