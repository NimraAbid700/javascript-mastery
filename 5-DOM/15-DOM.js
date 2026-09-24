// The Document Object Model (DOM) is a programming interface for web documents. It represents an HTML or XML page as a tree of objects, enabling programming languages like JavaScript to dynamically read, alter, and update the document's content, style, and structure without reloading the page.

// In browser, window is an object which has document with window.document or we can also access it directly with document.

// console.log(document);   gives html page info
// console.dir(document);    gives all other info which is not showing

// document.getElementById("firstHeading").innerHTML="<h1>Chai aur Code</h1>"

// DOM selectors NodeList and HTMLCollection

//document.getElementById('title').getAttribute('id');
// document.getElementById('title').getAttribute('class');

// document.getElementsByClassName('heading');

// document.querySelector('h1');
// document.querySelector('h2');
// document.querySelector('#title');
// document.querySelector('.heading');
// document.querySelector('input');
// document.querySelector('input[type="password"]');

// const myul = document.querySelector("ul");
// const turnGreen = myul.querySelector("li");
// turnGreen.style.backgroundColor = "green";
// turnGreen.style.padding = "10px";

// turnGreen.innerText = 'five';


// const tempList = document.querySelectorAll('li');
// tempList[0].style.color = 'black';
// tempList.forEach(function (l) { 
//     l.style.backgroundColor = 'yellow'
// })



// const List = document.getElementsByClassName('list-item')
// const myConvertedArray = Array.from(List)
// myConvertedArray.forEach(function(li) {
//     li.style.color = 'orange';
// })