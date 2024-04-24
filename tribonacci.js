/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    tribo=[0,0,1]
    if(n==0) return 0
    for (let i = 3; i<=n; i++){
        tribo[i] = tribo[i-3]+tribo[i-2]+tribo[i-1]
    }
    return tribo[tribo.length-1]+tribo[tribo.length-2]+tribo[tribo.length-3]
};