function sumNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (total, num) { return total + num; }, 0);
}
console.log(sumNumbers(1, 2, 3, 4, 5));
