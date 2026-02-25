//Hashmap Template
//two sum
//longest substring
//contains duplicates
//freq counting
function example(nums){
    const map = new Map();

    for(let i =0; i < nums.length; i++){
        if(map.has(nums[i])){
            return true
        }
        map.set(nums[i] , i)
    }
    return false
}

//Two pointers template
//Palindrome
//sorted arrays
//pair problems
function twoPointers(arr){
    let left = 0;
    let right = arr.length -1;

    while(left < right){
        if(condition){
            left++
        } else{
            right--
        }
    }
}

//Sliding Window Template
//longest substring
//subarray sum
//fixed variable window
function slidingWindow(arr){
    let left = 0;
    let result = 0;

    for(let right = 0; right < arr.length; right++){
        while(windowInvalid){
            left++
        }
        result = Math.max(result, right - left + 1)
    }
    return result
}

//Binary Search Template
function binarySearch(arr, target){
    let left = 0;
    let right = arr.length-1;

    while(left <= right){
        const mid = Math.floor((left + right)/2);

        if(arr[mid] === target){
            return mid
        } else if (arr[mid] < target){
            left = mid + 1;
        } else{
            right = mid - 1;
        }
    }
    return -1
}

//DFS template (Tree)
function dfs(root){
    if(!root) return;

    dfs(root.left);
    dfs(root.right);
}

//DFS template (Graph)
function dfs(node, visited, graph){
    if(visited.has(node)) return;

    visited.add(node);

    for(let neighbor of graph[node]){
        dfs(neighbor, visited, graph);
    }
}

//BFS template
function bfs(start, graph){
    const queue = [start];
    const visited = new Set([start]);

    while(queue.length){
        const node = queue.shift();

        for(let neighbor of graph[node]){
            if(!visited.has(neighbor)){
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}

//Backtracking template
function backTracking(start, path, nums, result){
    result.push([...path]);

    for(let i = start; i < nums.length; i++){
        path.push(nums[i]);

        backTracking(i + 1, path, nums, result);

        path.pop()
    }
}

//Prefix sum template
function prefixSum(nums){
    const prefix = [0];

    for(let i = 0; i < nums.length; i++){
        prefix[i + 1] = prefix[i] + nums[i];
    }
    return prefix;
}

//Monotonic Stack template
function monotonicStack(nums){
    const stack = [];

    for(let i = 0; i < nums.length; i++){
        while(stack.length && nums[i] > nums[stack[stack.length - 1]]){
            stack.pop()
        }
        stack.push(i)
    }
}

//Tree Bfs level order
function levelOrder(root){
    const result = [];
    const queue = [root];

    while(queue.length){
        const size = queue.length;
        const level = [];

        for(let i = 0; i < size; i++){
            const node = queue.shift();

            level.push(node.val);

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        result.push(level);
    }
    return result;
}

//Matrix DFS template
function dfs(grid, r, c){
    if(
        r < 0 ||
        c < 0 ||
        r >= grid.length ||
        c >= grid[0].length ||
        grid[r][c] === 0
    ) return;

    grid[r][c] = 0;

    dfs(grid, r + 1, c);
    dfs(grid, r - 1, c);
    dfs(grid, r, c + 1);
    dfs(grid, r, c - 1);
}