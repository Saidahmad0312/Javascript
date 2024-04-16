function containsNearbyDuplicate(nums, k) {
    const numIndices = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num in numIndices && i - numIndices[num] <= k) {
            return true;
        }
        numIndices[num] = i;
    }

    return false;
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
