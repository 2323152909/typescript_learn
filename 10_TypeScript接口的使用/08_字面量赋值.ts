interface IPerson {
  name: string
  age: number
  height: number
}

// const info = {
//   name: "why",
//   age: 18,
//   height: 1.88,
//   address: "重庆市"
// }

// freshness擦除
// const p: IPerson = info
 
// console.log(info)
// console.log(p)


function printInfo(person: IPerson){
  // 不能取address，虽然看起来有，但实际上没有
  // console.log(person.address)
  console.log(person.name)
}

// 这个代码会报错
// printInfo({
//   name: "why",
//   age: 18,
//   height: 1.88,
//   address: "重庆市"
// })


const info = {
  name: "why",
  age: 18,
  height: 1.88,
  address: "重庆市"
}

printInfo(info)