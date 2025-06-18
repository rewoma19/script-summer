function frontDoorResponse(line) {
  const firstLetterOfLine = line.trim()[0];
  return firstLetterOfLine;
}

function frontDoorPassword(word) {
  const trimmedWord = word.trim();
  const capitalizedFirsLetter = trimmedWord[0].toUpperCase();
  const restOfWordInLowercase = trimmedWord.slice(1).toLowerCase();
  const frontPassword = capitalizedFirsLetter + restOfWordInLowercase;
  return frontPassword;
}

function backDoorResponse(line) {
  const trimmedLine = line.trim();
  const lastLetterOfLine = trimmedLine[trimmedLine.length - 1];
  return lastLetterOfLine;
}

function backDoorPassword(word) {
  const trimmedWord = word.trim();
  const titledTrimmedWord =
    trimmedWord[0].toUpperCase() + trimmedWord.slice(1).toLowerCase();
  const politePhrase = titledTrimmedWord + ", please";
  return politePhrase;
}
