function crystalBalls(building){
    const n = building.length;
    const step = Math.floor(Math.sqrt(n));
    let i = step

    //Drop first ball in square root of n steps
    while(i < n && !building[i]){
        i += step;
    }

    //Use second ball to do linear search
    let start = i - step + 1;
    let end = Math.min(i, n-1);

    for(let j = start; j <= end; j++){
        if(building[j]){
            //floor where ball breaks
            return j
        }
    }
    //ball never broke
    return -1;
}