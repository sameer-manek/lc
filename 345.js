/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = "aeiouAEIOU"

    let b = 0;
    let e = s.length - 1

    while (b < e) {
        
        while (b < e && vowels.indexOf(s[b]) < 0) b++
        while (b < e && vowels.indexOf(s[e]) < 0) e--
    
        // swap
        s = s.split('')
        let tmp = s[b]
        s[b] = s[e]
        s[e] = tmp
        s = s.join('')

        b++
        e--
    }

    return s
};