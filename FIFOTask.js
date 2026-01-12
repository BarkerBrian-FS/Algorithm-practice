function processTasksFifo(tasks) {
    const queue = [...tasks];
    const result = [];

    while (queue.length > 0) {
        const task = queue.shift();
        result.push(task);
    }

    return result;
}