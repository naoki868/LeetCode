/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    trans = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }
    const num = s.split("")
    let result = 0
    for (let i = 0; i<num.length; i++){
        if (trans[num[i]] < trans[num[i+1]]){
            result = trans[num[i+1]] - trans[num[i]] + result
            i++
        }else{
            result = trans[num[i]] + result
        }
    }
    return result
};/**
* @param {string} s
* @return {number}
*/

var romanToInt = function(s) {
   trans = {
       "I":1,
       "V":5,
       "X":10,
       "L":50,
       "C":100,
       "D":500,
       "M":1000
   }
   const num = s.split("")
   let result = 0
   for (let i = 0; i<num.length; i++){
       if (trans[num[i]] < trans[num[i+1]]){
           result = trans[num[i+1]] - trans[num[i]] + result
           i++
       }else{
           result = trans[num[i]] + result
       }
   }
   return result
};