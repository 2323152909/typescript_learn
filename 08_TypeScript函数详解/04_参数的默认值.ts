// 必传参数 - 有默认值参数 - 可选参数
// function foo(x: number = 20, y: number){
//   console.log(x, y);
// }

// foo(undefined, 20)

function foo(x: number, y: number = 20){
  console.log(x, y);
}

foo(20)