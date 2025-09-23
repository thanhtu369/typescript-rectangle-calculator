function sum1(): number {
    let a = 10;
    let b = 20;
    return a + b;
}

const sum2 = (): number => {
    let a = 10;
    let b = 20;
    return a + b;
}

console.log("Function thường:", sum1());
console.log("Arrow function:", sum2());

const addWithDefault = (a: number = 5, b: number = 10): number => a + b;

const addWithOptional = (a: number, b?: number): number => a + (b || 0);

const addWithRest = (...numbers: number[]): number => {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log("Default value (không truyền tham số):", addWithDefault());
console.log("Default value (truyền 1 tham số):", addWithDefault(15));
console.log("Optional parameter:", addWithOptional(10, 5));
console.log("Optional parameter (thiếu tham số):", addWithOptional(10));
console.log("Rest parameter:", addWithRest(1, 2, 3, 4, 5));


const hobbies: string[] = ['Sports', 'Cooking'];
const activeHobbies: string[] = ['Hiking'];

activeHobbies.push(hobbies[0]!, hobbies[1]!);
activeHobbies.push(...hobbies);
console.log(activeHobbies);
