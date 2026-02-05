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

//sliding window

function sliding (arr){
    let left = 0;
    let curr = 0;
    let ans = 0;

    for(let right = 0; right < arr.length; right++){
        //do logic here to add arr[right] to curr

        while(window_condition_broken){
            //remvove arr[left] from curr
            left++
        }
        //update ans
    }
    return ans;
}

//Build a prefix sum
function prefixSum(arr){
    let prefix = arr[0];
    for(let i = 0; i < arr.length; i++){
        prefix.push(prefix[prefix.length - 1]+ arr[i])
    }
    return prefix
}

//Efficient String Building
//arr is list of characters
function stringBuild(arr){
    let ans = [];
    for(const c of arr){
        ans.push(c)
    }
    return ans.join('')
}

function stringHelp(arr){
    let ans = '';
    for(const c of arr){
        ans += c
    }
    return ans
}

//Linked List fast and slow pointer
function fastSlow(head){
    let slow = head;
    let fast = head;
    let ans = 0;

    while(fast && fast.next){
        //do logic
        slow = slow.next;
        fast = fast.next.next;
    }
    return ans;
}

//Reversing Linked List
function reverseList(head){
    let curr = head;
    let prev = null;
    while(curr){
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    return prev;
}

//Find number os subarrays that fit criteria
function subArray(arr, k){
    let counts = new Map();
    counts.set(0 , 1);
    let ans = 0;
    let curr = 0;

    for(const num of arr){
        //do logic to change curr
        ans += counts.get(curr - k) || 0;
        counts.set(curr,(counts.get(curr)||0)+1)
    }
    return ans;
}

//Monotonic increasing stack
function monotonic(arr){
    let stack = [];
    let ans = 0;
    for(const num of arr){
        //for monotonic decreasign just flip > to <
        while(stack.length && stack[stack.length -1]> num){
            //do logic 
            stack.pop()
        }
        stack.push(num);
    }
    return ans;
}

//Binary Tree DFS (recursive)
function dfs(root){
    if(!root) return null;

    let ans = 0;
    // do logic

    dfs(root.left);
    dfs(root.right);
    return ans
}