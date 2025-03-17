// 找到字符串中，第一个不重复字符，如果不存在，则返回-1；存在的话，返回这个字符的序号；
// 例子：
// s = leetcode  return 0;
// s = love leetcode return 2;
// s = aabb return -1;

function firstNotRepeat (str: string) {
    const arr = str.split('');
    arr.forEach((item, index) => {
        if (arr.indexOf(item) === arr.lastIndexOf(item)) {
            return index;
        } else {
            return -1;
        }
    });
};

console.log(firstNotRepeat('leetcode'));
console.log(firstNotRepeat('love leetcode'));
console.log(firstNotRepeat('aabb'));
