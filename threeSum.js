/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
     /*solve question like 2 sum II
        First sort the array in ascending order, then move pointers -- left and right --
        adding the sums of the left value, the middle value 
        which moves from left to right, and the right value.
        All the while remembering to eliminate any duplicates by looping and checking the next elements
     */
    let ans = [];
    nums.sort((a, b) => a - b)
    if(nums.length <= 2) {
        return ans
    }
    for(let i = 0; i < nums.length - 2; i++){
        let l = i+1; let r = nums.length - 1
        if(i === 0 || nums[i] > nums[i - 1]){
            while(l < r){
                if(nums[i] + nums[l] + nums[r] === 0){
                    ans.push([nums[i], nums[l], nums[r]])
                    l += 1
                    r -= 1
                while(l < r && nums[r + 1] === nums[r]){
                    r -= 1
                    }
                }else if(nums[i] + nums[l] + nums[r] < 0){
                    l += 1 
                }else {
                    r -= 1
                }
            } 
        }
    }
    
    return ans
};