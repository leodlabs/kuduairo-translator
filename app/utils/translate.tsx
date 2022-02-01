const translate = (text, dataset) => {
  const PHONEMES_TRANSLATION = dataset;
  const PHONEMES = Object.keys(PHONEMES_TRANSLATION);
  let translatedText = text.slice();
  for (const phoneme of PHONEMES) {
    translatedText = translatedText.replace(new RegExp('^' + phoneme + '$', 'g'), function(match: string) {
      return match.match(/[A-Z]/) ? PHONEMES_TRANSLATION[phoneme].toUpperCase() : PHONEMES_TRANSLATION[phoneme];
    })
  }

  return translatedText;
}

export default translate;
