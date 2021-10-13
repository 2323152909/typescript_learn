// tuple元组：多种元素的组合

// 1.数组的弊端
// const info: any[] = ['lhd', 18, 1.88]

// const infoObj = {
//   name:"lhd",
//   age:18,
//   height:1.88
// }

// const name = info[0]
// console.log(name.length);

// 2.元组的特点
const info:[string, number, number] = ['lhd', 18, 1.88]
const name = info[0]

console.log(name.length);

export {}
