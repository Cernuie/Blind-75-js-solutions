/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
     //sliding window with left and right pointers
     //increment the left/right by checking which one is larger than the other
     //area is calculated by taking min of left and right and multiplying it by their length
    let l = 0; let r = height.length - 1
    let response = Math.min(height[0], height[r]);
    while(l < r){
        let area = (r - l) * Math.min(height[l], height[r])
        if(area > response){
            response = area
        }
        if(height[l] < height[r]){
            l++
        } else {
            r--
        }
    }
    return response
};