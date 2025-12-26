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


//audience followers practice

function get_estimated_spread(audiences_followers){
    if(audiences_followers.length === 0){
        return 0
    }
    let total_followers = 0
    for (followers in audiences_followers){
        total_followers += followers
    }
    let average_audience_followers = total_followers / audiences_followers.length
        let estimated_spread = average_audience_followers * (audiences_followers.length ** 1.2)
        return estimated_spread
}