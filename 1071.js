/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

function gcd(a, b) {
    return b == 0 ? a : gcd(b, a % b)
}

var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return ''
    }

    let d = gcd(str1.length, str2.length)
    return str1.substr(0, d)
};