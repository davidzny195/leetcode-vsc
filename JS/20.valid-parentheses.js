/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let map = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  for (let char of s) {
    // if char matches map key, push closing bracket
    if (map.hasOwnProperty(char)) {
      stack.push(map[char]);
      // else if char is closing bracket, condition will pop stack
    } else if (stack.pop() !== char) return false;
  }

  return !stack.length;
};
// @lc code=end
