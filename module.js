// http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html


var PersonModule = function(p) {
   
    
    function validateName(name) {
          if (name.length < 3)
            return false;
    
    }
    
    setAge = function(newAge) {
        if (newAge < 18)
            console.log('min 18');
        else
            p.age = newAge;
    }
    
    setName = function(newName) {
        if (validateName(newName))
            return;
        p.name = newAge;
    }
    
    return {
        setAge: setAge,
        setName: setName
    }
}

var p = new Person('Me', 20);
var pm1 = PersonModule(p);