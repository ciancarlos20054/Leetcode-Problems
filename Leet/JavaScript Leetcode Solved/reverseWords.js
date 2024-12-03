/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    s = s.trim().split(/\s+/g);

    let res = "";

    for(let i = s.length - 1; i > 0; i--)
    {
        res += s[i] + " ";
    }

    return res + s[0];
};

console.log(reverseWords("a good   example"));