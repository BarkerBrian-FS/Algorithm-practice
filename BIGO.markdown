# Big O Notation Cheat Sheet

## Calculation not dependent on input size O(1)

## One loop - O(n) 

## Two nested loops - O(n2)

## Input size reduce by half - O(logn)

## Sum of arithmatic sequence (first_element + last_element) * number_of_element / 2

## Geometric Sequence first_element * (1 - ratio^number_of_elements) / (1 - ratio)

## Calculate Modulo 
function mod(x, y) 
{
  while (x >= y) {
    x -= y
  }
  return x
}

## Constant Time examples O(1)
# Hashmap lookup
# Array access and update
# Pushing and popping elements from a stack
# Finding and applying math formula
# Typically for n > 10⁹

## O (logN) examples logarithmic
# Binary search or variant
# Balanced binary search tree lookup
# Processing the digits of a number

## O(n) examples 
# Going through array/linked list
# Two pointers
# Some types of greedy
# Tree/graph traversal
# Stack/Queue

for (let i = 1; i <= N; i++) {
  // constant time code
}

var i = 0;
while (i < N) {
  // constant time code
  i++;
}

for (let i = 1; i < 5 * N + 17; i++) {
  // constant time code
}

for (let i = 1; i < N + 538238; i++) {
  // constant time code
}

## O(N log(N)) Examples
# Sorting 
# Quick Sort
# Divide and Conquer

## O(N^2) Quadratic Examples
# Nested loops, e.g., visiting each matrix entry
# Many brute force solutions

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    // constant time code
  }
}

for (let a = 1; a <= N; a++) {
  for (let j = a; j <= N; j++) {
    // constant time code
  }
}

## O(2^N) Examples
# Combinatorial problems, backtracking, e.g. subsets
# Often involves recursion and is harder to analyze time complexity at first sight

function Fib(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return Fib(n - 1) + Fib(n - 2);
}

## O(N!) 