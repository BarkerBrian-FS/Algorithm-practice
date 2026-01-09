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