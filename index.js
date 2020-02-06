function mock(string) {
  let newString = "";

  for (let char of string.toLowerCase()) {
      newString += (Math.random() < 0.5) ? char.toUpperCase() : char;
  }

  if (isLowerCasedString(newString)) {
      const middleChar = Math.round(newString.length / 2)
      newString = newString.substring(0, middleChar) + newString[middleChar].toUpperCase() + newString.substring(middleChar + 1);
  }

  return newString;
}

function isLowerCasedString(string) {
  return string.split("").every(char => char.toLowerCase() === char);
}

exports.mock = mock

exports.isLowerCasedString = isLowerCasedString