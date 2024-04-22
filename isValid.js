/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    for (let i =0; i< s.length; i++){
        if(s[i]==='('){
            stack.push(')')
        }else if(s[i]==='{'){
            stack.push('}')
        }else if(s[i]==='['){
            stack.push(']')
        }else{
           if(stack.pop() !== s[i]) {
            return false
           }
        }
    }
    // 配列の中身が空だったらtrueを返す。elseでstack.pop()で配列が空の状態になる。
    // 値が入った状態であればペアが見つかっていない。値がなければ
    return !stack.length; 
};