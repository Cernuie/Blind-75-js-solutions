/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    //A binary search question
    //By defining l and r being the bounds of the array, we can check if the array is sorted
    //and then split the partitions based on that
    
    let l = 0
    let r = nums.length - 1
    let res = nums[0]
    while(l <= r){
        //we update the returned number based on if it's less than it's boundaries or middle
        if (nums[l] < nums[r]){
            res = Math.min(res, nums[l])
        }
        let mid = Math.floor((l + r) / 2)
        
        res = Math.min(res, nums[mid])
        //then we check if the middle number is greater than the middle, if it is we take the right half of the array
        //else we take the left half
        if(nums[mid] >= nums[l]){
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return res
};

