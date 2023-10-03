/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    var max = Math.max(...candies)
    
    for (let i in candies) {
        let q = candies[i] + extraCandies
        if (q >= max) {
            candies[i] = true
            continue
        }
        candies[i] = false
    }

    return candies
};