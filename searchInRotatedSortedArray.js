/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//binary search, checking conditions on which half the target may be in each loop
 var search = function(nums, target) {
    let l = 0; let r = nums.length - 1;
    while (l <= r){
        let mid = Math.floor((l + r) / 2)
        if(nums[mid] === target){
            return mid
        }
        
        if(nums[l] <= nums[mid]){
            if((nums[l] > target || target > nums[mid])){
                l = mid + 1
            } else {
                r = mid - 1
            }
        } else {
            if ( nums[r] < target || target < nums[mid]){
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
    }
    return -1
};