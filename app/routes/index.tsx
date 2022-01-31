import translate from "~/utils/translate";

export default function Index() {
  const onTranslateClick = () => {
    const portugueseText = document.getElementById("portuguese-text").value;

    document.getElementById("kuduro-text").value = translate(portugueseText);
  }

  return (
    <div className="homepage">
      <h1 className="title">Kuduairo Translator</h1>

      <div className="content">
        <div className="input-container">
          <label htmlFor="portuguese-text" className="input-label">Texto em Português:</label>

          <textarea
            id="portuguese-text"
            name="portuguese-text"
            className="input"
            placeholder="Escreva seu texto a ser traduzido para o Kuduairo"
          />
        </div>

        <div className="input-container">
          <label htmlFor="kuduro-text" className="input-label">Tradução em Kuduairo:</label>

          <textarea
            id="kuduro-text"
            name="kuduro-text"
            className="input"
            onChange={(e) => e.preventDefault()}
            value=""
          />
        </div>
      </div>

      <button className="translate-button" onClick={onTranslateClick}>Traduzoaire!</button>
    </div>
  );
}
