// class Person {
//   name: string = ""
//   age: number = 0
// }

// const p = new Person()
// p.name = "123"

class Student {
  // 静态属性，可以直接通过"类名."的形式获取
  static time: string = "20：00"

  static attendClass(){
    console.log("去学习~")
  }
}

console.log(Student.time);
Student.attendClass()
