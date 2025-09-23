
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["An", "Binh", "Cuong"];
let mixed: any[] = [1, "hello", true, null];

let person: [string, number] = ["John", 30];
let coordinate: [number, number] = [10, 20];

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Typescript";
userName = "John";

if(typeof userInput === "string") {
    userName = userInput;
}

enum Color {
    Red,
    Green, 
    Blue
}

enum Status {
    Pending = "PENDING",
    Approved = "APPROVED", 
    Rejected = "REJECTED"
}

let myColor: Color = Color.Red;
let currentStatus: Status = Status.Pending;

console.log("=== ARRAY ===");
console.log("Numbers:", numbers);
console.log("Names:", names);
console.log("Mixed:", mixed);

console.log("=== TUPLE ===");
console.log("Person:", person);
console.log("Coordinate:", coordinate);

console.log("=== ANY/UNKNOWN ===");
console.log("User Input:", userInput);
console.log("User Name:", userName);

console.log("=== ENUM ===");
console.log("My Color:", myColor);
console.log("Current Status:", currentStatus);