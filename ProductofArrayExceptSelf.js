let products = function(nums) {
    return nums.reduce((previousValue, currentValue) => 
        previousValue * currentValue
    )
}

let productExceptSelf = function(nums) {

    let retArray = new Array(nums.length).fill(0)
    for (i = 0 ; i < nums.length; i++) { 
        retArray.splice(i, 1, products(nums.filter((number) => number !== nums[i])))
    }

    return retArray
}
console.log(products([2,3,4]))
console.log(productExceptSelf([1,2,3,4]))
console.log(productExceptSelf([0,1,2,0]))