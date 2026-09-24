class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password) {
        super(username) // In JavaScript, the super keyword is used to access and call functions on an object's parent class. It is a fundamental part of Class inheritance that allows child classes to inherit and extend the behavior of a base class.
        this.email = email
        this.password = password
    }

    addCourse(username) {
        console.log(`A new couse added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "example@gmail.com", '12345')
chai.addCourse()
chai.logMe()

const masalaChai = new User('masalaChai')
masalaChai.logMe()

console.log(chai === masalaChai);
console.log(chai === Teacher);
console.log(chai instanceof User);
console.log(chai instanceof Teacher);
console.log(masalaChai instanceof User);
console.log(masalaChai instanceof Teacher);