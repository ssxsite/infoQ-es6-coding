/*
    把对象或者数组的值或者键赋值给变量更加简洁
* */

/* 之前写法 */
let someArray = [1,2,3]
// let first = someArray[0],second = someArray[1],third = someArray[2];
// console.log(first,second,third)

/* 解构写法
   1.可在赋值语句前加入 var、let 或 const 关键字
   2.可以对任意深度的嵌套数组进行解构
   3.可以在对应位留空来跳过被解构数组中的某些元素
   4.可以通过“不定参数”模式捕获数组中的所有尾随元素
   5.对象解构
   6.解构基础数据类型会报错或者都是 undefined
   7.解构也可以赋值为默认值
* */
const [first,second,third] = someArray;
// let [first,second,third] = someArray;
console.log(first,second,third)

var [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo);
// 1
console.log(bar);
// 2
console.log(baz);
// 3


// let [,,third] = ["foo", "bar", "baz"];
// console.log(third);

var [head, ...tail] = [1, 2, 3, 4];
console.log(tail);


function* fibs() {
    var a = 0;
    var b = 1;
    while (true) {
        yield a; [a, b] = [b, a + b];
    } }
let [first1, second1, third1, fourth1, fifth1, sixth1] = fibs();
console.log(first1, second1, third1, fourth1, fifth1, sixth1);


let robotA = { name: "Bender" };

let { name:namaA } = robotA;
let { name } = robotA;
console.log(namaA,name)

let complicatedObj = {
    arrayProp: [
        "Zapp",
        { second: "Brannigan" } ]
};
// let { arrayProp:[,{second}] } = complicatedObj
console.log(second)



/* 下列会报错：因为 JavaScript 语法通知解析引擎将任何以{开始的语句解析为一个块语句 */
let blowUp;
// { blowUp } = { blowUp: 10 };//报错

({ blowUp } = { blowUp: 10 })
console.log('blowUp',blowUp)


// let { tes1 } = null;
// let { tes2 } = undefined;
// let { tes3 } = 3;
// let { tes4 } = '4444444444';
let { tes5 } = false;
console.log('tes5',tes5)







let [missing = true] = [];
let [missing2] = [];
console.log(missing,missing2);
let { message: msg = "Something went wrong" } = {name:'ssx'};
console.log(msg);




/* 利用解构设置函数参数 */
function testFun({data,time,like = 'pingguo'}) {
    console.log('data,time,like',data,time,like)
}
let arg = {
    time:new Date(),
    data:{id:1}
}
testFun(arg)














