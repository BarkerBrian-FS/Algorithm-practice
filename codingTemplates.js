//Two Pointers, Opposite ends

function twoPointer(arr){
    let left = 0;
    let right = arr.length - 1;
    let ans = 0;

    while(left < right){
        if(condition){
            left++
        }else {
            right--
        }
    }
    return ans
}

//Two Pointers two inputs, exhause both

function twoPointerTwoInput(arr1, arr2){
    let i = 0; 
    let j = 0;
    let ans = 0;

    while(i < arr1.length && j < arr2.length){
        if(condition){
            i++
        }else{
            j++
        }
    }
    while (i < arr1.length){
        //put some logic
        i++
    }

    while(j < arr2.length){
        //put some logic
        j++
    }
    return ans
}