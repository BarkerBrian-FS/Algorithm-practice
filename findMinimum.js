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

// decayed followers algorithm can use Math.pow for remaining total (base, exponent) or **
function decayedFollowers(initialFollower, fractionLostDaily, time){
    retentionRate = 1 - fractionLostDaily
    remainingTotal = initialFollower *(retentionRate ** time)
    return remainingTotal
}

// log scale problem practice
// division in push method changes num to the base provided
function logScale(data, base){
    let result = [];
    for (let i=0; i<data.length; i++){
        let num = data[i];
        result.push(Math.log(num) /  Math.log(base))
    }
    return result
}

// map method variant
function logScale(data, base) {
    return data.map(num => Math.log(num) / Math.log(base));
}

// average followers algorithm
function averageFollowers(nums){
    if (nums.length === 0){
        return None
    }
    let sum = 0;
    for (let num of nums){
        sum += num
    }
    let average  = sum / nums.length
    return average
}

