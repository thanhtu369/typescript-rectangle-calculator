function sum1() {
    var a = 10;
    var b = 20;
    return a + b;
}
var sum2 = function () {
    var a = 10;
    var b = 20;
    return a + b;
};
console.log("Function thường:", sum1());
console.log("Arrow function:", sum2());
var addWithDefault = function (a, b) {
    if (a === void 0) { a = 5; }
    if (b === void 0) { b = 10; }
    return a + b;
};
var addWithOptional = function (a, b) { return a + (b || 0); };
var addWithRest = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (sum, num) { return sum + num; }, 0);
};
console.log("Default value (không truyền tham số):", addWithDefault());
console.log("Default value (truyền 1 tham số):", addWithDefault(15));
console.log("Optional parameter:", addWithOptional(10, 5));
console.log("Optional parameter (thiếu tham số):", addWithOptional(10));
console.log("Rest parameter:", addWithRest(1, 2, 3, 4, 5));
var hobbies = ['Sports', 'Cooking'];
var activeHobbies = ['Hiking'];
activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push.apply(activeHobbies, hobbies);
console.log(activeHobbies);
