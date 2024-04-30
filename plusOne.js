/**
 * @param {number[]} digits
 * @return {number[]}
 */
// Numberが大きい数字を処理できなくなるのでダメだったパターン
var plusOne = function(digits) {
    let result =  digits.join('')
    result = Number(result) + 1
    result = result.toString()
    result = result.split('').map((num)=>Number(num))
    return result
};



// [9,9]だった場合に一度目の処理で結果がおかしくなる
var plusOne = function(digits) {
    let last = digits[digits.length-1]
    if(digits[0]==9){
        return [1,0]
    }
    if(last + 1 <= 10){
        digits[digits.length-1] = last +1 
        return digits
    }else{
        digits[digits.length-1] = 0
        digits[digits.length-2] = digits[digits.length-2]+1
        return digits
    }
};

for(let i = 0; i<digits.length-1; i--){
    digits[i]++
    if(digits[i]>9){
        digits[i]=0
    }else{
        return digits
    }
    digits.unshift(1)
    return digits
}