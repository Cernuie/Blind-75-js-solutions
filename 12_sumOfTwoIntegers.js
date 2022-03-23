/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var getSum = function(a, b) {
     /* 
        using bitwise XOR and AND with left shift (<<)
        we use bitwise XOR to calculate adding binaries, however XOR does not account for
        carry overs (both columns in a binary being 1s).
        We loop over with AND and left shift until there are no more carry overs and bitwise XOR
        returns the desired result.
     */
    while(b !== 0){
        let temp = (a & b) << 1
        a = a ^ b
        b = temp
    }
    return a
};