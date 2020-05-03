function greeter(person) {
    return 'Hello,' + person;
}
var user = 'Yee';
console.log(greeter(user));
var user2 = 12;
console.log(greeter(user2)); //类型“number”的参数不能赋给类型“string”的参数
