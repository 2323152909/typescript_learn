// 确定一个事实：names是一个数组类型，但是数组中存放的什么类型的元素呢？
// 不好的习惯：一个数组在TypeScript开发中，最好存放的数据类型是固定的（string）
const names1: Array<string> = [] // 不推荐（react jsx中有冲突 <div></div>）
const names2: string[] = [] // 推荐

// 在数组中存放不同的类型是不好的习惯
// names.push("abc")
// names.push(123)