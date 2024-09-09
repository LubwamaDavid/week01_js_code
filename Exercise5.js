function arrayMaxSum(arr, k) {
    if (k > arr.length) {
        return null; 
    }

   
    let maxSum = 0;
    for (let i = 0; i < k; i++) {
        maxSum += arr[i];
    }

    let currentSum = maxSum;

    
    for (let i = k; i < arr.length; i++) {
        currentSum = currentSum - arr[i - k] + arr[i]; 
        maxSum = Math.max(maxSum, currentSum); 
    }

    return maxSum;
}

console.log(arrayMaxSum([1, 2, 3, 14, 5], 2)); 
console.log(arrayMaxSum([2, 3, 5, 1, 6], 3)); 
console.log(arrayMaxSum([9, 3, 5, 1, 7], 2)); 
