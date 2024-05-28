
// inheritance
class User {
    // declare the constructor
    constructor(userName=""){
        this._userName = userName
    }

    // setter method
    set userName(name){
        this._userName = name;
    }

}

// creating a child class of User class

class Admin extends User{

    expressYourRole(){
        return "Admin"
    }

    sayHello(){
        return `Hello admin, ${this._userName}`
    }
}



// instantiating our class instance
const admin = new Admin('Balthazar');
console.log(admin.sayHello())



