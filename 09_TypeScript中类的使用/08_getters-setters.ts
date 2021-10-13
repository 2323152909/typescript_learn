class Person {
  private _name: string
  constructor(name: string){
    this._name = name
  }

  // 访问器setter/getter
  set name(name){
    this._name = name
  }
  get name(){
    return this._name
  }
}

const p = new Person("lhd")
p.name = "curry"
console.log(p.name);