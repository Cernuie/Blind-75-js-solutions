var productExceptSelf = function(nums) {
    let res = new Array(nums.length).fill(1);
    let accumulated = 1 
    for (i = 0; i < res.length; i++){
        res[i] *= accumulated
        accumulated *= nums[i]
    }
    accumulated = 1
    for (i = res.length - 1; i >= 0; i--){
        res[i] *= accumulated
        accumulated *= nums[i]
    }
    return res;
}
