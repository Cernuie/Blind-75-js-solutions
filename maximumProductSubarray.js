var maxProduct = function(nums) {
    let res = Math.max(...nums)
    let currentMin = currentMax = 1 
    for(num of nums){
        if(num === 0){
            currentMin = currentMax = 1;
        }
        const temp = currentMax
        currentMax = Math.max(currentMin * num, currentMax * num, num)
        currentMin = Math.min(num, currentMin * num, temp * num)
        res = Math.max(res, currentMax)
        }
    return res
    };