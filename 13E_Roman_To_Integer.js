/**
 * @param {string} s
 * @return {number}
 */

//=================================Cách làm bản thân=================================\\
var romanToInt = function (s) {
  const romans = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (romans[s[i]] < romans[s[i + 1]]) {
      result -= romans[s[i]];
    } else {
      result += romans[s[i]];
    }
  }
  return result;
};

romanToInt("III"); // 3
romanToInt("LVIII"); // 58
romanToInt("MCMXCIV"); // 1994

//==========================Cách làm nhiều vote trên leetcode==========================\\
const symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  let value = 0;
  for (let i = 0; i < s.length; i += 1) {
    symbols[s[i]] < symbols[s[i + 1]]
      ? (value -= symbols[s[i]])
      : (value += symbols[s[i]]);
  }
  return value;
};
