let sum = (x: number, y: number): number => { return x + y; }
let speech = (output: any): void => {
    console.log("Result:" + output);
}

speech(sum(5, 12));
console.log(speech(sum(8, 5)));

let something: void = undefined;
function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}

function AddandHandle(x: number, y: number, cb:(num:number)=>void){
    const result = x + y;
    cb(result);
}

AddandHandle(10, 20, (result) => { console.log(result); });
