(function(){
    function greeter(person:string){
        return 'Hello,'+person
    }
    let user:string='Yee'
    console.log(greeter(user))
    
    // let user2:number=12
    // console.log(greeter(user2))//类型“number”的参数不能赋给类型“string”的参数
    
})()
;(function(){
    interface Person{
        firstName:string
        lastName:string
    }
    function greeter(person:Person){
        return 'Hello,' + person.firstName+' '+person.lastName
    }
    let user={
        firstName:'ye',
        lastName:'huang'
    }
    console.log(greeter(user))
})();

(function(){

})()