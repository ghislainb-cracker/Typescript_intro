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

// function wrapped<T>(value: T): T[]{
//     return [value];
// }

// console.log(wrapped("one"));


type User = {
  id: number;
  name: string;
  email: string;
}

type OptionalUser = Partial<User>

function printUser(user: OptionalUser){
    console.log(user)
}

printUser({}); 
printUser({name: "ghislain"});
printUser({email: "byimbog250@gmail.com"});
printUser({name: "ghislain", email: "byimbog250@gmail.com"});
printUser({id: 1, name: "ghislain", email: "byimbog250@gmail.com"});


// function printLength(input: string | any[]): void{
//   if(typeof input === 'string'){
//     console.log(`string length: ${input.length}`);
//   }else if(Array.isArray(input)){
//     console.log(`Array length: ${input.length}`)
//   }else{
//     console.log("Invalid datatype")
//   }
// }

function printLength(input: string | any[]): void{
  if(typeof input === 'string'){
    console.log(`string length: ${input.length}`);
  }

  console.log(`array length: ${input.length}`);
}

printLength("ghislain");
printLength([1, 2, 3, 4, 5])