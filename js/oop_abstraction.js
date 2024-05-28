
// abstract class
//first declaring an abstract User class

class User{
    constructor(userName){
        if(this.constructor === User){
            throw new TypeError("can not instantiate abstract instance directly")
        }

        this._userName= userName;
    }

    stateYourRole(){
        throw new Error("Method 'stateYourRole' must be implemented in subclasses ")
    }

    set userName(name){
        throw new Error("Method 'userName' setter must be implemented in subclasses")
    }

    get userName(){
        throw new Error("Method 'userName' getter mus be implemented in subclasses ")
    }
}

// declaring subclasses of User abstract class

class Admin extends User{
    
    stateYourRole(){
        return "admin";
    }

    set userName(name){
        this._userName = name;
    }

}

//another subclass
class Viewer extends User{

    stateYourRole(){
        return "viewer";
    }

    set userName(name){
        this._userName = name;
    }


}

// creating objects

const admin = new Admin();

admin.userName = "Balthazar";
console.log(admin.stateYourRole());

const viewer = new Viewer();
viewer.userName = "Melchior";
console.log(viewer.stateYourRole());