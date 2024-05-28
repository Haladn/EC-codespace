

// encapsulation

class User {
    // declare the constructor
    constructor(firstName,lastName){
        this._firstName = firstName;
        this._lastName = lastName;
    }

    // adding method 
    hello(){
        return `Hello ${this._firstName} ${this._lastName}`
    }

    // getter method

    get name(){
        return `${this._firstName} ${this._lastName}`;
    }

    // setter method
    set firstName(name){
        this._firstName = name;
    }
    
}

// instantiating our class instance
const user2 = new User('John','Doe');
console.log(user2.name)
console.log(user2.hello())
console.log('-------------------------------')

// setting the first name
user2.firstName = "Adam"
console.log(user2.name)
console.log(user2.hello())
