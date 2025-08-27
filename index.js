// const data: string = "my name is ghislain"
// console.log(data)
function printUser(user) {
    console.log(user);
}
printUser({}); // Empty object
printUser({ name: "ghislain" }); // Only name
printUser({ email: "byimbog250@gmail.com" }); // Only email
printUser({ name: "ghislain", email: "byimbog250@gmail.com" }); // Name and email
printUser({ id: 1, name: "ghislain", email: "byimbog250@gmail.com" }); // All properties
