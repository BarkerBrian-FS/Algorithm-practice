function getCounter(arr){
    //create hash map to store number and count
    const counter = new Map();
    //iterate through numbers in arr
    for(const num of arr){
        //check if map has number
        if(counter.has(num)){
            //update the count or num to increase by 1
            counter.set(num, counter.get(num)+1)
        }else{
            //set the count of num to 1
            counter.set(num, 1)
        }
    }
    //return the counter
    return counter
}