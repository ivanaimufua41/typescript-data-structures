function twoSum(nums: number[], target: number): number[] | undefined | null {  
    let left = 0;
    let right = nums.length - 1;

    let result: number[] = [];

    if (nums.length === 0) {
        return undefined;
    }

    while(left < right) {
        let sum = nums[left] + nums[right];
        if (sum === target) {
            result = [left, right];
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