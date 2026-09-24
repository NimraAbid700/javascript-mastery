class User {
    constructor(username, email, password) {
        this.username = username
        this.email  = email
        this.password = password
    }

    // below is method because in class we called it a method...similar in structure to function
    encryptPassword() {
        return `${this.password}abc`
    }

    changeUserName() {
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "example@gmail.com", '12345')
console.log(chai);
console.log(chai.encryptPassword());
console.log(chai.changeUserName());

// behind the scene

function User1(username, email, password) {
    this.username = username
    this.email  = email
    this.password = password
}

User1.prototype.encryptPassword = function() {
    return `${this.password}abc`
}

User1.prototype.changeUserName = function() {
    return `${this.username.toUpperCase()}`
}

const tea = new User1('tea', 'tea@gmail.com', '123')

console.log(tea.encryptPassword());
console.log(tea.changeUserName());