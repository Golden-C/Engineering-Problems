// interface Person {
//   username: string
//   age: number
//   friends: string[]
//   isBillionaire: boolean
//   greetUser: string
// }

//console.log(compareStrings)

function reverse(num: number): string {
  const sign: number = Math.sign(num);
  const strNum: string = Math.abs(num).toString();
  const newNum: number = Number(strNum.split("").reverse().join(""));

  return newNum.toString().padEnd(strNum.length, "0");
}
