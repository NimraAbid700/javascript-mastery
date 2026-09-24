//unserscore tells ke ye normal user use nhi kr skta. Developers used it as a leading underscore (_variable) to flag a property or method as "private" or intended only for internal use within that class or module

const User = {
    _email: 'h@hc.com',
    _password: 'abc',

    get email(){
        return this._email.toUpperCase()
    }, // get means memory se le kr aana property ko or phie apni marzi se changes apply kr skty on a property

    set email(value){
       this._email = value 
    } // set said email is a property for me but not a method for me. So it said i will give u a value and you will have to store it
}

// Object.create is a factory function that you can use directly. also available in array
const tea = Object.create(User)
console.log(tea.email);
