/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = ["a","e","i","o","u"];
    let i = 0, j = s.length-1;
    s = s.split("");
    while(i < j)
    {

        const oneVowel = vowels.includes(s[i]);
        const secondVowel = vowels.includes(s[j]);
        if(oneVowel && secondVowel)
        {
            const temp = s[i];
            s[i] = s[j];
            s[j] = temp;
            i++;
            j--;
        }
        else if(oneVowel && !secondVowel)
        {
            j--;
        }
        else
        {
           i++;
           
        }
    }

    return s.join("");
};

console.log(reverseVowels("hello"));