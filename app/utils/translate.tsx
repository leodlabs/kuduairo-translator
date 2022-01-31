  /* universal replacers (prefix | middle | sufixes) 
  
  "ome": "osme",
  "amina": "asmina",
  "bem": "boain",
  "oiro": "oairo",
  "nta": "inta",
  "ail": "oail",
  "oria": "oairia",
  "ras": "reis",
  "usa": "uisa",
  "ão": "eum",
  "dia": "doaia",
  
  */
 
const PHONEMES_TRANSLATION = {


  
  "(?<=\\s|\\!|\\?|\\.|\\,|$)(pr[i|í]n|PR[I|Í]N)(?=[a-zA-Z0-9])": "prein",
  "(?<=\\s|\\!|\\?|\\.|\\,|$)(vin|VIN)(?=[a-zA-Z0-9])": "vein",

  /* middles */
  "(?<=[a-zA-Z0-9])(ç|Ç)(?=)": "s",
  "(?<=[a-zA-Z0-9])(uro|URO)(?=[a-zA-Z0-9])": "uairo",
  "(?<=[a-zA-Z0-9])(ouc|OUC)(?=[a-zA-Z0-9])": "osc",
  "(?<=[a-zA-Z0-9])(un|UN)(?=[a-zA-Z0-9])": "uain",

  /* middles ignoring vowels or consonants */
  "(?<=[a-zA-Z0-9])(ui|UI)(?=[a-lo-zA-LO-Z0-9]+[^aeiouAEIOU])": "uin", //ignore M and N too
  
  "(?<=[a-zA-Z0-9])(is|IS)(?=[a-zA-Z0-9])": "oais",
  "(?<=[a-zA-Z0-9])(nti|NTI)(?=[a-zA-Z0-9])": "ntoai",
  /* sufixes */
  "(?<=[a-zA-Z0-9])(ouquinho|OUQUINHO)(?=\\s|\\!|\\?|\\.|\\,|$)": "osquanho",
  "(?<=[a-zA-Z0-9])(ar|AR)(?=\\s|\\!|\\?|\\.|\\,|$)": "aire",
  "(?<=[a-zA-Z0-9])(ida|IDA)(?=\\s|\\!|\\?|\\.|\\,|$)": "oaida",
  "(?<=[a-zA-Z0-9])(em|EM)(?=\\s|\\!|\\?|\\.|\\,|$)": "eim",
  "(?<=[a-zA-Z0-9])(ilha|ILHA)(?=\\s|\\!|\\?|\\.|\\,|$)": "oailha",
  "(?<=[a-zA-Z0-9])(al|AL)(?=\\s|\\!|\\?|\\.|\\,|$)": "el",
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
