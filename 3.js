/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length;

  const string = s.split("");
  let substring = [string[0]];

  // console.log("string : " + string);
  // console.log("substring : " + substring);

  // console.log("loop");
  for (let i = 0; i < string.length; i++) {
    const rest = string.join("").substring(i);

    if (substring.includes(string[i])) {
      // console.log("rest : " + rest);

      if (lengthOfLongestSubstring(rest) >= substring.length) {
        substring = [string[i]];
      }
    } else {
      substring = [...substring, string[i]];
    }
  }

  // console.log("substring : " + substring);

  return substring.length;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log("---");
console.log(lengthOfLongestSubstring("bbbbb"));
console.log("---");
console.log(lengthOfLongestSubstring("pwwkew"));
console.log("---");
console.log(lengthOfLongestSubstring("dvdf"));
console.log("---");
console.log(lengthOfLongestSubstring(" "));
