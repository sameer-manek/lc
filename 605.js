/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let l = flowerbed.length

    for (let i = 0; i < l; i++) {
        if (flowerbed[i] === 1) {
            i += 1
            continue
        }

        let cnd = (i === 0 || flowerbed[i-1] === 0) && 
            (i === l-1 || flowerbed[i+1] === 0)

        if (cnd) {
            flowerbed[i] = 1;
            i += 1
            n -= 1
            continue
        }
    }

    return n <= 0
};