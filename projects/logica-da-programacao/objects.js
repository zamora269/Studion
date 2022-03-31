 //const name = "Diego";
//const age = 35;
//const teacher = true;

//console.log(`Oi, meu nome é ${name} e eu tenho ${age}.`);

const person = {
    name: "Diego",
    age: 35,
    teacher: true,
    sayHello: function() {
        console.log(`Oi, o  meu nome é ${this.name} e eu tenho ${this.age}`);
    },
    };

    //person.sayHello();

    Object.keys(person).map(Key => console.log(`${key}: ${person[key]});`



    
    

