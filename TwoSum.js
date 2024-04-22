/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = 0 
    for (let i = 0; i<nums.length; i++){
        for (let j = i+1; j < nums.length; j++){
            result = nums[i]+nums[j]
            if(result === target){
                return [i,j]
            }
        }
    }
};

// ハッシュ値として辞書に計算結果を入れておき参照して結果を返す
var twoSumRefactor = function (nums, targest) {
    const seen = {}
    for (let i = 0; i < nums.length; i++){
        const complement = target - nums[i]
        if (seen[complement] !== undefined)
            return [seen[complement],i]
    }
    seen[complement] = nums[i]
}

var twoSum = function(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in map) {
            return [map[target - nums[i]], i];
        }

        map[nums[i]] = i;
    }    
};