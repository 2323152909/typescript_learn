class Person {
  public name: string = ""
  private age: number = 0

  // 封装两个方法，通过方法来访问name
  getAge(){
    return this.age
  }

  setAge(age){
    this.age = age
  }
}

const p = new Person()
console.log(p.name)
console.log(p.getAge())
p.setAge(18)

export {}