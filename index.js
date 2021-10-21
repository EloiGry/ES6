// let fruits = ['Apple','Orange','Banana']
// fruits = [...fruits, "Rasberry"]
// console.log(fruits)

// let fruits = ['Apple','Orange','Banana']
// fruits = ["Rasberry",...fruits]
// console.log(fruits)

// const arr1 = ['A', 'B', 'C']
// const arr2 = ['X', 'Y', 'Z']

// var array = [...arr1, ...arr2]
// console.log(array)

// let user = {
//     age: 10,
//     eyes: "vert",
//     legs: 2,
//     arms: 2,
//     hair: "long",
//     caracterstique: "gras du bide",
//     nose: "petit nez",
//     ears: "grandes oreilles",
//     glasses: true,
//     sosie: "sarkozy"
//   }
//   user = {
//     firstName: "bobby",
// 	...user
// }

// console.log(user)
//   const {
//     age,
//     eyes,
//     legs,
//     arms,
//     hair,
//     caracterstique,
//     nose,
//     ears,
//     glasses,
//     sosie
// } = user



// const numbers = [1, 2, 3, 4, 5, 6]
// const [a, b, c, d, e, f] = numbers

// const numbers = [1, 2, 3, 4, 5, 6]

// const newNumbers = numbers.filter(number => number % 2 ==! 0)
// console.log(newNumbers)

const numbers = [1, 2, 3, 4, 5, 6]
const newNumbers = numbers.map(number => number * number)
console.log(newNumbers)
