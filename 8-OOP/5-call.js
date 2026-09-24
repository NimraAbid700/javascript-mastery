function setUserName(username) {
    // complex DB calls
    this.username = username
    console.log('called');
}

function createUser(username, email, password) {
    setUserName.call(this, username) //.call to hold reference
    this.email =  email
    this.password = password
}

const chai = new createUser("chai", "example@gmail.com", '12345')
console.log(chai);