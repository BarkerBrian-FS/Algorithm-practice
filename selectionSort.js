function selectionSort(nums) {
    const n = nums.length;

    for (let i = 0; i < n - 1; i++) {
        // Assume the minimum is the first unsorted element
        let minIndex = i;

        // Check the rest of the array to find the true minimum
        for (let j = i + 1; j < n; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum with the first unsorted element
        if (minIndex !== i) {
            [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
        }
    }

    return nums;
}