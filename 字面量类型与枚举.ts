// 联合类型就是一组类型的可用集合
interface Res {
  code: 10000 | 10001 | 50000;
  status: "success" | "failure"; // 字面量类型
}

declare var res: Res;

// 枚举和对象的区别就是 双向映射和单向映射(仅是数字)
