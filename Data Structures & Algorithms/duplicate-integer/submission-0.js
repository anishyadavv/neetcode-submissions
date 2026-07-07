class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        let n = nums.length;

        let arr = Array(n).fill(0);

        for(let i=0;i<n;i++){
            if(arr[nums[i]]==-1){
                return true;
            }
            else{
            arr[nums[i]] = -1;
         }
        }
        return false;

    }
}
