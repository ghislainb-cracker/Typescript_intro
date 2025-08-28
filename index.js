// const data: string = "my name is ghislain"
// console.log(data)
function printUser(user) {
    console.log(user);
}
printUser({});
printUser({ name: "ghislain" });
printUser({ email: "byimbog250@gmail.com" });
printUser({ name: "ghislain", email: "byimbog250@gmail.com" });
printUser({ id: 1, name: "ghislain", email: "byimbog250@gmail.com" });
function printLength(input) {
    if (typeof input === 'string') {
        console.log("string length: ".concat(input.length));
    }
    else if (Array.isArray(input)) {
        console.log("Array length: ".concat(input.length));
    }
    else {
        console.log("Invalid datatype");
    }
}
printLength("ghislain");
printLength([1, 2, 3, 4, 5]);
