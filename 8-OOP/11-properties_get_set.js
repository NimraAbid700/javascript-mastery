function User(email, password) {
    this._email = email;
    this._password = password

    // function behaves dusally..its also object and its also function
    // defineProperty is a property of getters and setters
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
        this._email = value}
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
        this.password = value}
    })
}

const chai = new User('chai@chai.com', "chai")

console.log(chai.email);
console.log(chai.password);