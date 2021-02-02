class Person {
    //this is a method
    greet() {
        console.log('Hello SEI-111');
    } //make sure you do not add commas after the method
    //walk method
    walk() {
        console.log('Walking along the beach.')
    }
    //adding parameters 'food'. this below is a method with a parameter
    eat(food) {
        console.log(`Today, I am eating ${food}`);
    }
}

//this is an instance of a class
//known as an object
const princeLeo = Person();

//calling the methods (invoke)
princeLeo.walk();
princeLeo.eat('Dinosaur Chicken Nuggets')