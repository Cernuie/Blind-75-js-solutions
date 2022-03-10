//two methods, one using a hashmap, one using sets

// var containsDuplicate = function(nums) {
//     let numsMap = new Map();
//     for (let i = 0; i < nums.length; i++){
//         if(numsMap.has(nums[i])){
//             return true
//         } else {
//             numsMap.set(nums[i], i)
//         }
//     }
//     console.log(numsMap)
//     return false
// };


var containsDuplicate = function(nums) {
    let numsSet = new Set(nums)
    
    return(numsSet.size < nums.length)
}