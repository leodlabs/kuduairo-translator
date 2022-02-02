import React, { useEffect } from "react"

export default function Comments() {
    const commentBox = React.createRef<HTMLDivElement>()

    useEffect(() => {
        const commentScript = document.createElement('script')
        const theme = 'github-dark'
        commentScript.async = true
        commentScript.src = 'https://utteranc.es/client.js'
        commentScript.setAttribute('repo', 'leodlabs/kuduro-language-dataset') // CHANGE THIS if you're just going to clone this repo and use the code. Do not test your code using my repo.
        commentScript.setAttribute('issue-term', 'pathname')
        commentScript.setAttribute('id', 'utterances')
        commentScript.setAttribute('theme', theme)
        commentScript.setAttribute('crossorigin', 'anonymous')
        if (commentBox && commentBox.current) {
          commentBox.current.appendChild(commentScript)
        } else {
          console.log(`Error adding utterances comments on: ${commentBox}`)
        }
      }, []) // eslint-disable-line
      
    return (
      <section className="comments">
        <div className="row text-center">
            <h1>Comentuairios e Sugestoeins</h1>
            <p>Se encontraires algum eirro de traduçeum, comuainte aqui embaisxo:</p>
            <div ref={commentBox} className="comments" />
        </div>
      </section>
    );
  }
  

