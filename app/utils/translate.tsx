const PHONEMES_TRANSLATION = {
  /* universal replacers (prefix | middle | sufixes) */
  
  "ome": "osme",
  "amina": "asmina",
  "bem": "boain",
  "undo": "uaindo",
  "ista": "oaista",
  "oiro": "oairo",
  "nta": "inta",
  "ail": "oail",
  "uem": "ueim",
  "oria": "oairia",
  "ras": "reis",
  "usa": "uisa",
  "ão": "eum",
  "dia": "doaia",
  
  /* middles */
  "(?<=[a-zA-Z0-9])(ç|Ç)(?=[a-zA-Z0-9])": "s",
  "(?<=[a-zA-Z0-9])(ur|UR)(?=[a-zA-Z0-9])": "uair",
  "(?<=[a-zA-Z0-9])(ouc|OUC)(?=[a-zA-Z0-9])": "osc",
  
  "(?<=[a-zA-Z0-9])(is|IS)(?=[a-zA-Z0-9])": "oais",
  "(?<=[a-zA-Z0-9])(nti|NTI)(?=[a-zA-Z0-9])": "ntoai",
  /* sufixes */
  "(?<=[a-zA-Z0-9])(ouquinho|OUQUINHO)(?=\\s|\\!|\\?|\\.|\\,|$)": "osquanho",
  "(?<=[a-zA-Z0-9])(ar|AR)(?=\\s|\\!|\\?|\\.|\\,|$)": "aire",
  "(?<=[a-zA-Z0-9])(ida|IDA)(?=\\s|\\!|\\?|\\.|\\,|$)": "oaida"
};

const PHONEMES = Object.keys(PHONEMES_TRANSLATION);

const translate = (text) => {
  let translatedText = text.slice();
  for (const phoneme of PHONEMES) {
    translatedText = translatedText.replace(new RegExp(phoneme, 'g'), function(match: string) {
      return match.match(/[A-Z]/) ? PHONEMES_TRANSLATION[phoneme].toUpperCase() : PHONEMES_TRANSLATION[phoneme];
    })
  }

  return translatedText;
}

export default translate;
