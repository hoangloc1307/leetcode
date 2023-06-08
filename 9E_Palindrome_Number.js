/**
 * @param {number} x
 * @return {boolean}
 */

//=================================Cách làm bản thân=================================\\
var isPalindrome = function (x) {
  return x.toString() === x.toString().split("").reverse().join("");
};

isPalindrome(121); // true
isPalindrome(-121); // false
isPalindrome(10); // false

//==========================Cách làm nhiều vote trên leetcode==========================\\
// Đảo ngược số bằng cách:
// Lấy số cuối: origin % 10 = 121 % 10 = 1
// Đưa vào biến reverse: reverse * 10 + số vừa lấy = reverse * 10 + 1 = 0 * 10 + 1 = 1
// Cập nhật lại số ban đầu nhớ làm tròn: origin / 10 = 121 / 10 = 12.1 ~= 12

var isPalindrome = function (x) {
  let origin = x;
  let reverse = 0;
  while (origin > 0) {
    reverse = reverse * 10 + (origin % 10);
    origin = ~~(origin / 10); // ~~ tương tự Math.floor()
  }
  return x === reverse;
};
