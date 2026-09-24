const course = {
    coursename: "JavaScript",
    price: "999",
    courseInstructor: "Hitesh",
}

// course.courseInstructor
const {courseInstructor: instructor, price} = course; // Object destructuring is a syntax that allows us to extract properties from an object and assign them to variables. In this case, we are extracting the courseInstructor property from the course object and assigning it to a variable called courseInstructor. So, after this line of code, we will have a variable called courseInstructor that contains the value "Hitesh".

console.log(price);
// console.log(courseInstructor);
console.log(instructor);



const user = { name: "Ali", age: 25, city: "Sahiwal" };

// Traditional way
const name = user.name;
const city = user.city;

// Object destructuring
const { name, city } = user;
console.log(name); // Outputs: Ali

// Renaming Variables: If you want to assign the object's property to a variable with a different name, use a colon (:)
const { name: fullName } = user;
console.log(fullName); // Outputs: Ali

// Default Values: You can assign a fallback value just in case the property doesn't exist in the object
const { country = "Pakistan" } = user;
console.log(country); // Outputs: Pakistan

// The Rest Syntax (...)You can extract specific properties and pack the remaining ones into a brand-new object
const { name, ...rest } = user;
console.log(rest); // Outputs: { age: 25, city: "Sahiwal" }

// Object destructuring does not mutate(modify or change) the original object. It creates new variables that hold the values of the extracted properties, leaving the original object unchanged.


// Using in FunctionsObject destructuring is extremely popular for function parameters, especially in frameworks like React. It allows you to unpack only the data the function needs directly in the parameter list.
function displayUserInfo({ name, city }) {
  console.log(`${name} is from ${city}`);
}

displayUserInfo(user); // Outputs: Ali is from Sahiwal



// React destucturing Concept
const navbar = ({company, location}) => {
    console.log(company);
    console.log(location);
}

navbar({company: "Amazon", location: "India"}); // This will call the navbar function and pass an object with the properties company and location. The navbar function will then destructure the object and extract the values of company and location, which are "Amazon" and "India" respectively. So, after this line of code, we will have two variables called company and location that contain the values "Amazon" and "India" respectively.


// JSON API
//This is Json data, which is a format for storing and exchanging data. It is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. JSON stands for JavaScript Object Notation, and it is based on a subset of the JavaScript programming language. JSON data is represented as key-value pairs, where the keys are strings and the values can be any valid JSON data type (string, number, object, array, boolean, or null). JSON data is often used in web applications to exchange data between a client and a server.
{
  // This is Json data which is empty right now, but it can be filled with key-value pairs to represent data. For example, we can have a JSON object that represents a user with properties like name, age, and email. The JSON data can be used to store and exchange data in a structured format that is easy to read and write for both humans and machines.
}

// {
//     'name': "John",
//     'courseInstructor': "JS Mastery",
//     'price': "free"
// }

//Object has been declared with variable but if no variable is declared then it is called JSON data. Just curly bracket {} represents JSON data.
//In JSON data, keys are strings and values can be any valid JSON data type (string, number, object, array, boolean, or null).


//APIs can be in array format which has many curly {} brackets
[
    {},
    {},
    {},
    {}
]