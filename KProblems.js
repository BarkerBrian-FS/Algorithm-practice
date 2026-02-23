//Top K frequent Elements
function topK(nums, k){
    const count = {};
    //step 1 frequency counter
    for(let num of nums){
        count[num] = (count[num]||0) +1
    }
    // step 2 sort by frequency 
    const sorted = Object.keys(count).sort((a,b) => count[b] - count[a])
    //Step 3 return top k sorted elements 
    return sorted.slice(0 , k).map(Number)
}

//Kth Largest Element in a Stream
/*
Design a class to find the kth largest integer in a stream of values, 
including duplicates. E.g. the 2nd largest from [1, 2, 3, 3] is 3. 
The stream is not necessarily sorted.
*/
class kthLargest{
    constructor(k, nums){
        this.k = k;
        this.nums = nums.sort((a,b) => b - a);
    }

    add(val){
        let i = 0;
        while(i < this.nums.length && this.nums[i] > val){
            i++
        }
        this.nums.splice(i, 0, val);
         return this.nums[this.k - 1];
    }
}

//K closest points to origin 
/*
You are given an 2-D array points where points[i] = [xi, yi] represents the coordinates of a point on an X-Y axis plane. You are also given an integer k.
Return the k closest points to the origin (0, 0).
The distance between two points is defined as the Euclidean distance (sqrt((x1 - x2)^2 + (y1 - y2)^2)).
You may return the answer in any order.
*/
function kClosest(points, k){
    //compute the distance 
    function distanceSquared(point){
        const[x,y] = point;
        return x*x + y*y;
    }
    //sort distances with closes coming first
    points.sort((a,b) => distanceSquared(a) - distanceSquared(b));
    //return k points
    return points.slice(0, k);
}

//Sum of fixed window of size k
function slidingWindowSum(nums, k){
    const result = [];
    let windowSum = 0;

    for(let i =0; i < nums.length; i++){
        //add element to sum
        windowSum += nums[i];
    }
    if(i >= k -1){
        result.push(windowSum);
        //remove element exiting window
        windowSum -= nums[ i - k + 1]
    }
    return result
}

