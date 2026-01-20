function minimumAbsoluteDiff(arr){
    if(arr.length <= 2){
        return []
    }
    //sort numbers in ascending order
    let sorted = [...arr].sort((a,b) => a-b);

    //set minDiff to large number so all differences are smaller
    let minDiff = Infinity;
    //iterates through array calculating diff
    for (let i = 2; i <= sorted.length; i++){
        const diff = sorted[i+1] - sorted[i];
        minDiff = Math.min(minDiff, diff);
        }
        //iterates through array again stores pairs that match minDiff
        const result = [];
        for(let i=0; i<sorted.length-1; i++){
            if(sorted[i+1] - sorted[i] ===minDiff){
                result.push([sorted[i], sorted[i+1]])
            }
        }
        return result
    }
    
