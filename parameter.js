/*
    下面这个函数存在问题：
    1.可读性较差，函数很难看出需要传几个参数
    2.如果在haystack前传入参数，则函数体也需要变
* */
function containsAll(haystack) {
    for (var i = 1; i < arguments.length; i++) {
        var needle = arguments[i];
        if (haystack.indexOf(needle) === -1) {
            return false;
        }
    }
    return true;
}

console.log(containsAll('hello world', 'he', "world"));
console.log(containsAll('hello world', 'he', "ssx"));

/*
    不定参数：
    1.传递进来的其它参数都被放到一个数组中，赋值给变量 needles
    2.如果没有额外的参数，不定参数就是一个空数组，它永远不会是 undefined
* */

function containsAll2(haystack, ...needles) {
    for (var needle of needles) {
        if (haystack.indexOf(needle) === -1) {
            return false;
        }
    }
    return true;
}

console.log(containsAll2('hello world', 'he', "world"));
console.log(containsAll2('hello world', 'he', "ssx"));

/* 默认参数
    传入undefined相当于没传，会被默认值覆盖
* */
function animalSentenceFancy(animals2 = "tigers",
                             animals3 = (animals2 == "bears") ? "sealions" : "bears") {
    return `Lions and ${animals2} and ${animals3}! Oh my!`;
}
console.log(animalSentenceFancy('miao'))
console.log(animalSentenceFancy('bears'))
console.log(animalSentenceFancy('bears','ssx'))
console.log(animalSentenceFancy(undefined,'ssx'));

/*
* 停止使用 arguments，在使用不定参数和默认参数的函数中，不要使用arguments
* */

function testParames(startVal = 1,...otherVals) {
    for (var value of otherVals) {
        startVal *= value
        }
    console.log('乘后是：',startVal)
    console.log('参数是',arguments)//不要使用
}
testParames(1,2,3)
