function buyAndSell(prices){
    //edge case to end function if less than 2 prices
    if(prices.length < 2) return 0;
    //set minPrice to first in array
    let minPrice = prices[0];
    //set maxProfit to 0 to compare later
    let maxProfit = 0;
    //loop through prices 
    for(let i =0; i < prices.length; i++){
        //check current price against minPrice
        if(prices[i] < minPrice){
            //if lower make minPrice
            minPrice = prices[i];
        }else {
            //find currentProfit with formula
            const currentProfit = prices[i] - minPrice;
            //if currentProfit greater than max 
            if(currentProfit > maxProfit){
                //change max to current
                maxProfit = currentProfit;
            }
        }

    }
    //return the answer
    return maxProfit;
}