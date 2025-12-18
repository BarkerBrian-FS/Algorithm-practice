// Transform Array Problem
let map = function (arr, fn) {
  const result = [];

  arr.forEach((value, index) => {
    result.push(fn(value, index));
  });

  return result;
};


function map2(arr, fn) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }

  return result;
}