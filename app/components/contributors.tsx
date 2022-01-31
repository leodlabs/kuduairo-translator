function Contributor({ avatar_url, login, html_url }) {
  return (
    <div className="col-lg-2 col-5">
      <div className="card">
        <img src={avatar_url} alt={login} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{login}</h5>
          <a href={html_url} target="_blank" className="card-link">
            Siga no GitHusb
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Contributors({ contributors = [] }) {
  return (
    <section className="row mt-4">
      <div className="col-12 text-center">
        <h1>Contribuidoaires</h1>
        <div className={`row justify-content-center mb-4`}>
          {contributors.length > 0
            ? contributors.map((contributor) => (
                <Contributor key={contributor.html_url} {...contributor} />
              ))
            : "CARREGAINDO..."}
        </div>

        <small className="my-4">
          Se contribuires no repositoairio do GitHusb teu noaime aparecerá aqui
        </small>
      </div>
    </section>
  );
}
