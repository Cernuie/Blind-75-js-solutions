var twoSum = function(nums, target) {
    const diffMap = new Map();
    for(i = 0; i<nums.length;i++){
        const diff = target - nums[i];
        const diffIndex = diffMap.get(diff)
        if(diffMap.has(diff)){
            return [diffMap.get(diff), i]
        } 
        diffMap.set(nums[i], i);
    }
    return
};