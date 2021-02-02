class Person {
    //in order to get the name/software engineer we need to pass it through the parentheses
    constructor(name, softwareEngineer) {
        this.arms = 2;
        this.legs = 2;
        this.name = name;
        this.softwareEngineer = softwareEngineer;
        this.artists = [];
    }
    //this is a method
    greet() {
        console.log('Hello SEI-111');
    } 
    //make sure you do not add commas after the method
    //walk method
    walk() {
        console.log('Walking along the beach.')
    }
    //adding parameters 'food'. this below is a method with a parameter
    eat(food) {
        console.log(`Today, I am eating ${food}`);
    }
    //method working with arrays
    addArtist(artist) {
        console.log(`I like ${artist}`);
        this.artists.push(artist)
    }
}

//this is an instance of a class
//known as an object
//to add name to this person you put it inside the parantheses
//IMPORTANT: add the new keyword
const princeLeo = new Person('Leo Brooks', true);

//print attributes
console.log(princeLeo.name);
console.log(princeLeo.softwareEngineer);

//calling the methods (invoke)
princeLeo.walk();
princeLeo.eat('Dinosaur Chicken Nuggets')
//a function that we just made for prince leo. this adds a method but not to the template
//add a method on an instance
princeLeo.jump = function() {
    console.log('Weee')
}
princeLeo.jump();
princeLeo.addArtist('Rico Nasty');
princeLeo.addArtist('Yeye');

//view an attribute
console.log(princeLeo.artists)


