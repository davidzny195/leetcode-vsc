/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let newString = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

  for (let i = 0, j = newString.length - 1; i < j; i++, j--) {
    if (newString[i] !== newString[j]) return false;
  }
  return true;
};
// @lc code=end
