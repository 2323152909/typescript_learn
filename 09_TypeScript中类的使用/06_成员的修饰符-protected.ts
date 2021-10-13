// protected：在类的内部和子类中可以访问
class Person {
  protected name: string = "coderlhd"
}

class Student extends Person{
  getName(){
    return this.name
  }
}

const p = new Student()
console.log(p.getName());

export {}