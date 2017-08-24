let addStudent = require("./addStudent");

function demo() {
    // return [1,2,3,45,6,7,8,9,10,11].slice(1,6);
    return [1,2,3,].reduce((a,b) => a+b);

    // return "sdfsdfsdffs".split("s").length - 1;
    return ("1as2a3".replace(/a/g, ""));
}

console.log(demo())
// console.log(["as","ass","151"].slice(1,3))
//
// console.log(addStudent("张三,15615,三班,数学:82,语文:102")[0].score)

`张三,1561,三班,数学:80,语文:90,编程:100`
`李四,1562,三班,数学:100,语文:80,编程:90`