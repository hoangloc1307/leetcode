/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (obj.hasOwnProperty(s[i])) {
      stack.push(obj[s[i]]);
    } else {
      if (stack.pop() !== s[i]) {
        return false;
      }
    }
  }
  return !stack.length;
};

isValid("()"); // true
isValid("()[]{}"); // true
isValid("(]"); // false
isValid("{[]}"); // true
