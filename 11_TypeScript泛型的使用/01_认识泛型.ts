// 类型参数化

// 在定义函数时，我不决定这些参数的类型
// 而是让调用者一参数的形式告知，我这里的函数参数应该是什么类型
function sum<Type>(num1: Type): Type {
  return num1;
}

// 调用方式一：明确传入的类型
sum<number>(20);
sum<{name: string}>({name: "lhd"});
sum<any[]>(["abc"]);

// 调用方式二：类型推导
sum(50)
sum("abc")
