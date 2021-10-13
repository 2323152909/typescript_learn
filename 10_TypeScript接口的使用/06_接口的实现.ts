interface ISwim {
  swimming: () => void
}

interface IEat {
  eating: () => void
}

// const a:ISwim = {
//   swimming(){}
// }

// function foo(swim: ISwim){


// }

// foo(a)
// foo({
//   swimming(){}
// })

// 类实现接口
class Animal {
  action(){}
}

// 继承：只能实现单继承
// 实现：实现接口，类可以实现多个接口
class Fish extends Animal implements ISwim, IEat{
  swimming(){
    console.log("fish swimming")
  }

  eating(){
    console.log("fish eating")
  }
}

class Person implements ISwim {
  swimming(){
    console.log("Person swimming")
  }
}

// 编写一些公共的API：面向接口编程
function swimAction(swimable: ISwim){
  swimable.swimming()
}

// 1.所有实现了接口的类对应的对象，都是可以传入的
swimAction(new Fish())
swimAction(new Person())

swimAction({swimming: function(){}})
