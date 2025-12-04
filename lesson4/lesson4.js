global.name = 'window'
function Person(name) {
this.name = name
this.foo1 = function () {
//普通函数this由foo1的调用方式决定
    console.log(this.name)
}
this.foo2 = () => console.log(this.name)
//箭头函数，无法使用call
this.foo3 = function () {
    return function () {
//普通函数this由foo3的调用方式决定        
    console.log(this.name)
    }
}
this.foo4 = function () {
    return () => {
//箭头函数，无法用call，继承外层函数this
    console.log(this.name)
    }
}
}

var person1 = new Person('person1')
var person2 = new Person('person2')

person1.foo1()
//person1调用foo1,this指向person1 
person1.foo1.call(person2) 
//call绑定this到person2

person1.foo2()
//person1调用foo2,this指向person1 
person1.foo2.call(person2) 
//call绑定this到person2,但foo2是箭头函数，call无效,this指向person1

person1.foo3()()
//person1调用foo3,foo3 this指向person1,返回普通函数 this指向window
person1.foo3.call(person2)()
//call绑定foo3 this到person2,返回普通函数 this指向window
person1.foo3().call(person2) 
//call绑定普通函数 this到person2

person1.foo4()()
//person1调用foo4,foo4 this指向person1,返回箭头函数 this继承外层this,指向person1 
person1.foo4.call(person2)()
//call绑定foo4 this到person2,返回箭头函数 this指向person2
person1.foo4().call(person2) 
//call绑定箭头函数 this到person2,但call对箭头函数无效，this继承外层this,指向person1
