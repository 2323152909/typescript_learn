// 当前foo函数，在被其他地方调用时，没有做任何的参数校验
// 1 > 没有对类型进行校验
// 2 > 没有对是否传入参数进行校验
function foo(message){
  console.log(message.length);
}

foo("Hello World")
foo("你好啊，廖浩东")

foo()

// 永远执行不到
console.log("渲染机界面成千上万行的JavaScript代码需要执行，去渲染界面");
