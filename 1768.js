/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let l = word1.length > word2.length ? word1.length : word2.length
    let chars = ''
    for (let i = 0; i < l; i++) {
        chars += word1.charAt(i) || '' 
        chars += word2.charAt(i) || ''
    }

    return chars
};