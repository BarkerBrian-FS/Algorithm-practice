/*
Given two arrays nums1 and nums2, return an array containing their intersection. Each element in the result must appear as many times as it shows in both arrays. The result can be in any order.
*/

function intersectionOfArrays(nums1, nums2) {
    // make a new map to hold numbers and count 
    const count1 = new Map();
    //iterate through nums1 and send num and count to map
    for (const num of nums1) {
        count1.set(num, (count1.get(num) || 0) + 1);
    }
    // create result arr
    const result = [];
    //iterate through nums2 checking to see if already in nums1
    for (const num of nums2) {
        if ((count1.get(num) || 0) > 0) {
            result.push(num);
            count1.set(num, count1.get(num) - 1);
        }
    }
    //return results arr
    return result;
}