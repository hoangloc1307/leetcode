/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//=================================Cách làm bản thân=================================\\
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j];
      }
    }
  }
};

twoSum([2, 11, 7, 15], 9); //[0, 2]
twoSum([3, 2, 4], 6); //[1, 2]
twoSum([3, 3], 6); //[0, 1]

//==========================Cách làm nhiều vote trên leetcode==========================\\
// Lưu các số đã duyệt qua và index của nó vào 1 object.
// Trong mỗi lần lặp kiểm tra xem có key bằng target - số hiện tại không.
// Nếu có thì lấy index của key đó và index số hiện tại.
// Néu không thì lưu số hiện tại và index nó vào object.

var twoSum = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    // Kiểm tra xem target trừ số thứ i đã tồn tại trong obj hay chưa
    if (obj[target - nums[i]] !== undefined) {
      // Nếu có thì trả về index của giá trị đã tồn tại trong obj
      return [obj[target - nums[i]], i];
    } else {
      // Nếu không thì lưu index của số đó vào obj
      obj[nums[i]] = i;
    }
  }
};
