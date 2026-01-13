/*
You are managing a printer queue where print jobs are processed in FIFO (First In, First Out) order. Each job takes a certain number of pages to print. Given a list of jobs with their page counts, calculate the completion time for each job.

Input
jobs: a list of integers where each integer represents the number of pages in a print job
Output
A list of integers representing the completion time for each job (cumulative time when each job finishes)
*/

function simulatePrinter(jobs){
    const queue = [...jobs];
    const completionTimes = [];
    let currentTime = 0;

    while (queue.length > 0){
        const pages = queue.shift();
        currentTimes += pages;
        completionTimes.push(currentTime)
    }
    return completionTime

}