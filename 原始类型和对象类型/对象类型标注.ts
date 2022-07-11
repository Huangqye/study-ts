// interface 和 readonly
interface Me {
  readonly name: string;
  age: number;
}
const obj: Me = {
  name: "h",
  age: 18,
};

obj.name = "2";

// type与interface 知道就行
// interface 对象、类的结构
// type 函数签名(函数)、一组联合类型、一个工具类型等抽离成一个完整独立的类型
// 随便用，要整齐

// 装箱类型 Boxed Types 知道就行 任何情况下都不要用它
// Object、Boolean、Number、String、Symbol

// 拆箱类型 Unboxed Types 知道就行
// 以String为例, 包括undefined、null、void

// object解决Object类型的错误使用，它代表所有非原始类型的类型，即数组、对象与函数类型

// {} 字面量、白纸(不能进行任何赋值操作),代表任何非null/undefined/void的值


