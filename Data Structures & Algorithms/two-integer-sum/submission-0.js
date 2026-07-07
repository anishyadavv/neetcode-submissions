class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let map = new Map();
        let n = nums.length;
        let ans = [];
        for(let i=0;i<n;i++){
            if(map.has(nums[i])){
                ans = [map.get(nums[i]),i];
                break;
            }
            else{
                map.set(target-nums[i],i);
            }
        }
        return ans;
    }
}
