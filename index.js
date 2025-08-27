// const data: string = "my name is ghislain"
// console.log(data)
// function add(num1: number, num2: number): number{
//     return num1 + num2
// }
// console.log(add(2,5));
// function formatId(want: number | string): string{
//     return want.toString();
// }
// console.log(formatId(2));
// interface User {
//     id: number,
//     name: string,
//     email: string
// }
// function printUser(user: User){
//     console.log(`User ${user.id}: ${user.name} (${user.email})`);
// }
// const user1: User = {
//     id: 2025,
//     name: "Ghislain Byimbo",
//     email: "byimbog250@gmail.com"
// }
// printUser(user1);
function wrapped(value) {
    return [value];
}
console.log(wrapped("one"));
