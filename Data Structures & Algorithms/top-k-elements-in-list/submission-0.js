class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let map = new Map();

        for(let num of nums){
            if(map.has(num)){
                map.set(num,map.get(num)+1);
            }
            else{
                map.set(num,1);
            }
        }
        let ans = [];

        for(const [key,value] of map){
            ans.push([key,value]);
        }
        ans.sort((a,b)=>b[1]-a[1]);
        let ans1 = ans.map((a)=>a[0]);
        return ans1.slice(0,k);
        
    }
}
