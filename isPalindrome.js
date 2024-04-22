var isPalindrome = function (x) {
    return x < 0 ? false : (x === +x.toString().split("").reverse().join(""));
    // return x < 0 ? false : (x === +x.toString().split("").reverse().join(""));
}