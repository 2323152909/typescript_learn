// Point: x/y -> 对象类型
// {x:number, y: number, z?: number}
function printPoint(point: { x: number; y: number; z?: number }) {
  console.log(point.x);
  console.log(point.y);
  point.z && console.log(point.z);
}

printPoint({ x: 123, y: 321 });
printPoint({ x: 123, y: 321, z: 111 });

export {};
