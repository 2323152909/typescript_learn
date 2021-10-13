function makeArea(shape: Shape) {
  return shape.getArea();
}

// 抽象类
abstract class Shape{
  // 抽象方法（抽象方法必须在抽象类中定义，并且在子类中必须有实现）
  abstract getArea();
}

class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    super()
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(20, 30);

class Circle extends Shape {
  private radius: number;

  constructor(radius: number) {
    super()
    this.radius = radius;
  }

  getArea() {
    return this.radius * this.radius * 3.14;
  }
}

const circle = new Circle(10);

console.log(makeArea(rectangle));
console.log(makeArea(circle));

