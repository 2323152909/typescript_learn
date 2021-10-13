class Person {
  // 1.只读属性可以在构造器中赋值，赋值之后就不可以再修改
  // 2.属性本身不能修改，但是如果他是对象类型，对象中的属性是可以修改的
  readonly name: string
  readonly friend?: Person
  age?: number
  constructor(name: string, friend?: Person){
    this.name = name
    this.friend = friend
  }
}

const p = new Person("lhd", new Person("curry"))
console.log(p.name)
console.log(p.friend)

// 不可以直接修改friend
// p.friend  = new Person("kobe")
if(p.friend){
  p.friend.age = 18
}
// p.name = "123"
