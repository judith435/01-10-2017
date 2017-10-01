function Person(name, age) {
    if (typeof name === 'string') {
        
    }
    if (typeof age === 'number') {
        
    }

    this.name = name;
    this.age = age;
}

// Person class Objct
var p1 = new Person('Me', 21);
console.log(p1);

var p2 = new Person('Me2', 21);
console.log(p2);

// Anonymous Object
var p3 = {age2: 18, name2: 'Me'};
console.log(p3);

