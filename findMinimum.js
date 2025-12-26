function findMinimum(nums) {
  if (nums.length === 0) {
    return null;
  }

  let minimum = Infinity;

  for (let num of nums) {
    if (num < minimum) {
      minimum = num;
    }
  }

  return minimum;
}