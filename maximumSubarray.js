var maxSubArray = function(nums) {
    let globalMax = Number.NEGATIVE_INFINITY
    let curSum = 0
    for (let i = 0; i < nums.length; i++){
        if(curSum < 0) {
            curSum = 0
        }
        curSum += nums[i]
        globalMax = Math.max(curSum, globalMax)
    }
    return globalMax
};