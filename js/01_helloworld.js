(function () {
    function greeter(person) {
        return 'Hello,' + person;
    }
    var user = 'Yee';
    console.log(greeter(user));
    // let user2:number=12
    // console.log(greeter(user2))//类型“number”的参数不能赋给类型“string”的参数
})();
(function () {
    function greeter(person) {
        return 'Hello,' + person.firstName + ' ' + person.lastName;
    }
    var user = {
        firstName: 'ye',
        lastName: 'huang'
    };
    console.log(greeter(user));
})();
(function () {
})();
