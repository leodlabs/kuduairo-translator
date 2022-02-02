const translate = async (text: any) => {
  const PAYLOAD = {
      "sentence": escapeHtml(text),
      "current_language": "pt-BR",
      "target_language": "pt-KD"
  }

  const translatedText = await fetch('https://kuduairo-api.herokuapp.com/translate/pt-to-kd', {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(PAYLOAD)
  }).then((response: any) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  }).then(data => {
    return data.translation
  })

  return translatedText;
}

const escapeHtml = (unsafe: any) => {
  return unsafe.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
}

export default translate;
