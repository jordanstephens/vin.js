var Vin = {};

(function() {
  Vin.isValid = function isValid(string) {
    var vinString = string.toUpperCase();
    return verifyPattern(vinString) && verifyCheckDigit(vinString);
  }

  function verifyPattern(string) {
    var pattern = /^[^\WIOQ]{17}$/;
    return !!pattern.test(string);
  }

  function verifyCheckDigit(string) {
    return calculateCheckDigit(string) === charAsInt(string[8]);
  }

  function calculateCheckDigit(string) {
    var sum = 0,
        multiplier,
        checkDigit,
        weights = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2],
        transliterations = {
          A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8,
          J: 1, K: 2, L: 3, M: 4, N: 5,       P: 7,       R: 9,
                S: 2, T: 3, U: 4, V: 5, W: 6, X: 7, Y: 8, Z: 9
        };

    for (var i = 0; i < string.length; i++) {
      if (isNumericCharacter(string[i])) {
        multiplier = charAsInt(string[i]);
      } else {
        multiplier = transliterations[string[i]]
      }

      sum += multiplier * weights[i];
    }

    checkDigit = sum % 11;

    return checkDigit === 10 ? "X" : checkDigit;
  }

  function isNumericCharacter(character) {
    return !isNaN(charAsInt(character));
  }

  function charAsInt(character) {
    return parseInt(character, 10);
  }
})();

