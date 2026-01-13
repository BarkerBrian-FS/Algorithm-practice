/*
The Josephus Problem is a classic elimination game. There are n people standing in a circle, numbered from 0 to n-1. Starting from person 0, you count k people around the circle. The kth person is eliminated and leaves the circle. Then, continue counting k people from the next person, and eliminate the kth person. This continues until only one person remains. Find the position (0-indexed) of the last remaining person.

Input
n: an integer representing the number of people in the circle (1 ≤ n ≤ 500)
k: an integer representing the elimination count (1 ≤ k ≤ n)
Output
An integer representing the 0-indexed position of the winner (the last person remaining)
*/

function findWinner(n, k){
    const queue = Array.from({length: n}, (_, i) => i);
    while(queue.length > 1){
        for(let i=0; i < k-1; i++){
            queue.push(queue.shift());
        }
        queue.shift()
    }
    return queue[0]
}