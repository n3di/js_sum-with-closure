'use strict';

/**
 * @return {function}
 */
function makeRobotAccountant() {
  // Licznik wywołań, początkowo 0
  let callCount = 0;

  // Funkcja zwracana przez makeRobotAccountant
  return function(a) {
    return function(b) {
      callCount++;

      // Sprawdzamy, czy to czwarte lub kolejne wywołanie
      if (callCount > 3 && callCount % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return a + b;
      }
    };
  };
}

module.exports = makeRobotAccountant;
