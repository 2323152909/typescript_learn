class Person{
  name: string
  age: number

  constructor(name: string, age: number){
    this.name = name
    this.age = age
  }

  eating(){
    console.log("eating")
  }
}

class Student extends Person {
  sno: number

  constructor(name: string, age: number, sno: number){
    super(name, age)
    this.sno = sno
  }

  // 函数重写
  eating(){
    // 调用父类的方法
    super.eating()
    console.log("student eating");
  }

  studing(){
    console.log("studing");
  }
}

// class Teacher extends Person {
//   title: string = ""

//   teaching(){
//     console.log("teaching")
//   }
// }

const stu = new Student("coderlhd", 18, 100)

stu.name = "coderlhd"
stu.age = 18
console.log(stu.name);
console.log(stu.age);
stu.eating()
stu.studing()

