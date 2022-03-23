/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    let res = new Array(n+1).fill(0);
    let power = 1
    for (let i = 1; i <= n; i++){
        //if (i & i-1) bitwise comparison
        if(i === power * 2){
            power = i
        }
        res[i] = 1 + res[i - power]
    }
    
    return res
};