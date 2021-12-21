/*
This function is used to find a subarray within an array. It is using a pointer pattern.
We set a pointer at the beginning and the end. We have 3 conditions to check for:
    if the sum of both pointers is greater than the target we move the end pointer closer to the beginning of the array
    if the sum of both pointers is less than the target we move the left index up one
    if the sum is equal to the target return the index positions
    
    We set a condition if the nums param is an empty array (might have to account for undefined/null if the input allows either)
    This only works on sorted arrays
*/

const twoSum = (nums: number[], target: number): number[] | undefined => {
    let left = 0;
    let right = nums.length - 1;

    let result: number[] = [];

    if (nums.length === 0) {
        return undefined;
    }

    while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum === target) {
            result = [nums[left], nums[right]];
            break;
        }

        if (sum > target) {
            right -= 1;
        }

        if (sum < target) {
            left += 1;
        }
    }

    return result;
};

export default twoSum;
