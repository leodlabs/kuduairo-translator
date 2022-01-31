const PHONEMES_TRANSLATION = {
  "uro": "uairo",
  "ome": "osme",
  "amina": "asmina",
  "bem": "boain",
  "undo": "uaindo",
  "ouco": "osco",
  "ouquinho": "osquanho",
  "ntira": "ntoaira",
  "ista": "oaista",
  "oiro": "oairo",
  "nta": "inta",
  "ail": "oail",
  "uem": "ueim",
  "oria": "oairia",
  "ras": "reis",
  "usa": "uisa",
  "ç": "s",
  "ão": "eum",
  "lar": "laire",
  "dia": "doaia",
  "vida": "voaida",
  "dida": "doaida"
}

const PHONEMES = Object.keys(PHONEMES_TRANSLATION);

const translate = (text: String) => {
  let translatedText = text.slice();
  for (const phoneme of PHONEMES) {
    translatedText = translatedText.replace(new RegExp(phoneme, 'g'), PHONEMES_TRANSLATION[phoneme])
  }

  return translatedText;
}

export default translate;
