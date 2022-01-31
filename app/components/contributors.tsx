import { useEffect, useState } from "react";

export default function Contributors() {
  const [contributors, setContributors] = useState(null);
  
  useEffect(() => {
    fetch("https://api.github.com/repos/leodlabs/kuduairo-translator/contributors").then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    }).then(data => { /* <-- data inferred as { data: T }*/
    
      data = data.map((contributor: any) => {
        
        return (
            <div className="col-lg-2 col-5">
                <div className="card">
                    <img src={contributor.avatar_url} alt={contributor.login} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">
                            {contributor.login}
                        </h5>
                        <a href={contributor.html_url} target={`_blank`} className="card-link">Siga no Githuaibe</a>
                    </div>
                </div>
            </div>
        )
      })
      setContributors(data)
    });
  }, [])

  return (
    <section className="row mt-4">
        <div className="col-12 text-center">
            <h1>Contribuidoaires</h1>
            <div className={`row justify-content-center mb-4`}>
                {
                    contributors ? contributors : 'CARREGAINDO...'
                }
            </div>

            <small className="my-4">Se contribuires no repositoairio do GitHuaibe teu noaime aparecerá aqui</small>
        </div>
    </section>
  );
}
