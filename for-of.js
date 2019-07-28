/* 遍历数组的方法 */

let myArray = [1, 2, 2]
myArray.number = 4
myArray.__proto__.test = 5


/* 方法1：for循环
优点：正确率高，兼容性好，最保守的写法,最灵活的写法。
缺点：不够简洁
*/
// let number = 0;
// for (let index = 0; index < myArray.length; index++) {
//     number += index;
//     console.log('number', number);
// }
//
// for (let index = 0; index < myArray.length; index++) {
//     if (index % 2 === 0) console.log('偶数位的数', myArray[index]);
// }
//
// for (let index = 0; index < myArray.length; index++) {
//    if (myArray[index] === 2){
//        console.log('数组包含2');
//        break;
//    }else {
//        continue;
//    }
//    if(index === myArray.length -1 ){
//        console.log('数组不包含2');
//    }
// }

/* 方法2：forEach
优点：对for循环的简洁写法。
缺点：不能中断循环！！！你不能使用 break 语句中断循环，也不能使用 return 语句返回到外层函数。
适用场景：遍历数组，无需中断循环
*/

// myArray.forEach(function (value,index) {
//     let number = 0;
//     number += index;
//     console.log('number', number);
// });
// myArray.forEach(function (value, index) {
//     if (myArray[index] === 2) {
//         console.log('数组包含2');
//         return;//并没有跳出去，导致bug
//     }
//     if (index === myArray.length - 1) {
//         console.log('数组不包含2');
//     }
// });


/*方法3：for-in，最不适合用于数组遍历的方法
    for-in的缺点：
    1.在这段代码中，赋给 index 的值不是实际的数字，而是字符串“0”、“1”、“2”，
此时很可能在无意之间进行字符串算数计算，例如：“2” + 1 == “21”，这给
编码过程带来极大的不便。

    2.作用于数组的 for-in 循环体除了遍历数组元素外，还会遍历自定义属性。举
    个例子，如果你的数组中有一个可枚举属性 myArray.name，循环将额外执行
    一次，遍历到名为“name”的索引。就连数组原型链上的属性都能被访问到。

    3.最让人震惊的是，在某些情况下，这段代码可能按照随机顺序遍历数组元素。

    适用场景：for-in 是为普通对象设计的，遍历得到字符串类型的键。

* */

// let number = 0;
// for (let index in myArray) { // 千万别这样做
//     number += index;
// }
// console.log('number', number);
//
// for (let index in myArray) { // 千万别这样做
//     console.log(myArray[index])
// }

/* for in 适用遍历对象的key */
// let obj = {name:'ssx',age:18}
// obj.__proto__.test2 = 222
// Object.defineProperty(obj,'test',{
//     value:111,
//     enumerable:false
// })
// for (let key in obj) {
//     console.log(key)
// }


/*方法4：for-of，最适合用于数组遍历的方法
   优点：集合了for 循环的所有优点，同时又简洁好看，可以正确响应 break、continue 和 return 语句
   不仅支持数组，还支持大多数类数组对象，例如 DOM NodeList 对象，也支持字符串遍历,同样支持 Map 和 Set 对象遍历。
   缺点：ES6的新语法，访问index不方便,不支持普通对象遍历。
   适用场景：for-of 循环用来遍历可迭代的对象的值，例如数组，类数组，字符串等,以及ES6的所有新类型。
* */

for (let val of myArray) {
    console.log('val', val);//val是值，不是key
}

for (let val of myArray) {
   if (val === 2){
       console.log('数组包含2');
       break;
   }
}

for (var chr of "ssx") {
    console.log(chr);
}

let words = ['hello','world','hello']
let uniqueWords = new Set(words);
console.log('uniqueWords',uniqueWords)
for (let word of uniqueWords) {
    console.log(word);
}

const map = new Map([
    [1,"one"],
    [2, "two"],
    [3, "three"]
]);

for (var [key, value] of map) {
    console.log([key, value]);
}









