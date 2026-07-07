class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let s1 = s.split("").sort();
        let t1 = t.split("").sort();
        console.log(s1,t1);
        let n = s.length;
        let m = t.length;
        if(n!==m){
            return false;
        }
        let i=0;
        let j=0;
        while(i<n && j<m){
            if(s1[i]!==t1[j]){
                return false;
            }
            i++;
            j++;
        }

        return true;
    }
}
