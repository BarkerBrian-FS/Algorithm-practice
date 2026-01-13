/*
There are n people in a line to buy tickets. Each person wants to buy a certain number of tickets, represented by tickets[i]. The ticket counter sells one ticket at a time, and each person takes 1 second to buy one ticket. After buying a ticket, if a person still needs more tickets, they go to the back of the line.

You are the person at position k (0-indexed). Calculate how many seconds it takes for you to finish buying all your tickets.

Input
tickets: a list of integers where tickets[i] is the number of tickets person i wants to buy
k: an integer representing your position in line (0-indexed)
Output
An integer representing the total time in seconds for person k to finish buying all their tickets
*/

function timeToBuy(tickets,k){
    let time = 0;
    while(tickets[k] > 0){
        for(let i=0; i < tickets.length; i++){
            if(tickets[i] > 0){
                tickets[i] --
                time ++
            }
            if(i === k && tickets[k] === 0){
                return time
            }
        }
    }
    return time
}