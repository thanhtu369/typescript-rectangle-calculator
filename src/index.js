"use strict";
// Welcome to your TypeScript project!
Object.defineProperty(exports, "__esModule", { value: true });
class UserManager {
    users = [];
    addUser(user) {
        this.users.push(user);
        console.log(`User ${user.name} added successfully!`);
    }
    getUser(id) {
        return this.users.find(user => user.id === id);
    }
    getAllUsers() {
        return [...this.users];
    }
}
// Example usage
const userManager = new UserManager();
const sampleUser = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com"
};
userManager.addUser(sampleUser);
console.log("All users:", userManager.getAllUsers());
console.log("TypeScript is working correctly! 🎉");
//# sourceMappingURL=index.js.map