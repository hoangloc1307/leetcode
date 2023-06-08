/**
 * @param {string[]} strs
 * @return {string}
 */

//=================================Cách làm bản thân=================================\\
var longestCommonPrefix = function (strs) {
  const first = strs.find(
    (str) => Math.min(...strs.map((i) => i.length)) === str.length
  );

  if (!first) {
    return "";
  }
  let isOk = true;
  let index = 0;
  while (isOk && index <= first.length) {
    index++;
    isOk = strs.every((item) => item.startsWith(first.slice(0, index)));
  }
  return first.slice(0, --index);
};

longestCommonPrefix(["flower", "flow", "flight"]); // "fl"
longestCommonPrefix(["dog", "racecar", "car"]); // ""
longestCommonPrefix([""]); // ""
longestCommonPrefix(["a"]); // "a"
longestCommonPrefix(["", ""]); // ""
longestCommonPrefix(["ab", "a"]); // "a"
longestCommonPrefix(["a", "b"]); // ""

//==========================Cách làm nhiều vote trên leetcode==========================\\
// So sánh theo từng cặp item trong mảng
// flower - flow => flow - flight => fl
// dog - racecar => '' - car => ''
var longestCommonPrefix = function (strs) {
  "use strict";
  if (strs === undefined || strs.length === 0) {
    return "";
  }

  return strs.reduce((prev, next) => {
    let i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) {
      i++;
    }
    return prev.slice(0, i);
  });
};
