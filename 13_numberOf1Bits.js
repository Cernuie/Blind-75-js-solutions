/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    let res = 0
    while(n){
        n = (n) & (n - 1)
        res += 1 
    }
    return res
};

var hammingWeight = function(n) {
    
    let numOne = 0;
      
    while(n){
        numOne += n % 2
        //n = n >> 1
        n = parseInt(n/2)
    }
    
    return numOne
};
