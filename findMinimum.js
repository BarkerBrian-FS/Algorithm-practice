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

// follower count algorithm practice
function getFollowerCount(follower_count, influencer_type, num_months){
    if (influencer_type == 'fitness'){
        return follower_count * 4 ** num_months}
    else if (influencer_type == "cosmetic"){
        return follower_count * 3 ** num_months}
    else{
        return follower_count * 2 ** num_months}
}

//Logarithm practice get influencer score
function getInfluencerScore(followerCount, averageEngagement) {
    if (followerCount <= 0) {
        return 0; // avoid errors with log(0) or negative numbers
    }
    return averageEngagement * Math.log2(followerCount);
}