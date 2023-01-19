 // 1. Way to print in  Javascript
 //  console.log("Hello World");
 //  alert("me");
 //  document.write("This is document Write");

 // 2. Java Script Cosole API
 //  console.log("Hello World", 4 + 6, "Another log");
 //  console.warn("This is Warning");
 //  console.error("This is Error")

 // 3.Variables in JavaScript
 // What are Variables? - Containers to store data values

 //  var number1 = 56;
 //  var number2 = 34;
 //  console.log(number1 + number2)

 // 4.Comments
 // 1. Single Lined Comment
 // 2. Multilined Comment 
 /*
 Mutli 
 line
 comment
 */

 // 5/ Data Types In JavaScript
 /*There are two types of data types in JavaScript:
 1.Primitive Datatype: number,string,undefined,null,boolean,symbol
 2.Reference Datatype: Array and Object*/

 // 1. Primitive Datatypes:
 // Numbers
 //  num1 = 455;
 //  num2 = 56.7;
 //  console.log(num1 - num2);

 //  Strings
 //  var str1 = "This is a String";
 //  var str2 = "This is also another string";
 //  console.log(str1);

 // Booleans
 //  var a = true;
 //  var b = false;
 //  console.log(a, b)

 // Undefined
 //  var und = undefined;
 //  var und
 //  console.log(und)

 // Null
 //  var n = null;
 //  var n =
 //  console.log(n);

 // 2.Reference Datatypes:
 // Array
 //  var arr = [1, 2, 3, 4, 5]
 //  console.log(arr)

 // Objects
 //  var marks = {
 //      ravi: 34,
 //      shubham: 67,
 //      kundan: 99
 //  }
 //  console.log(marks);

 // Operators
 // Arithmatic Operators
 //  var a = 100;
 //  var b = 56;
 //  console.log("The value of a + b is", a + b);
 //  console.log("The value of a - b is", a - b);
 //  console.log("The value of a * b is", a * b);
 //  console.log("The value of a / b is", a / b);
 //  console.log("The value of a % b is", a % b);

 // Assignment Operator
 //  var c = b;
 //  c += 2;
 //  c -= 2;
 //  c *= 2;
 //  c /= 2;
 //  console.log(c);

 // Comparison Opertor
 //  var x = 34;
 //  var y = 56;
 //  console.log(x == y);
 //  console.log(x === y);
 //  console.log(x <= y);
 //  console.log(x >= y);
 //  console.log(x > y);
 //  console.log(x < y);

 // Logical Operator
 // Logical and
 //  console.log(true && true);
 //  console.log(true && false);
 //  console.log(false && true);
 //  console.log(false && false);

 // Logical or
 //  console.log(true || true);
 //  console.log(true || false);
 //  console.log(false || true);
 //  console.log(false || false);

 // Loigical not
 //  console.log(!false)
 //  console.log(!true)

 // Functions
 //  function avg(a, b) {
 //      c = (a + b) / 2;
 //      return c;
 //  }
 // DRY = Do not repeat yourself
 //  c1 = avg(4, 6);
 //  c2 = avg(14, 16);
 //  console.log(c1, c2);

 // Conditional statements 
 // Single if statement
 //  var age = 14;
 //  if (age >= 18) {
 //      console.log("You can drive a car");
 //  }

 // if-else statement
 //  if (age > 18) {
 //      console.log("You can drive a car");
 //  } else {
 //      console.log("you cannot drive a car")
 //  }

 // if - else ladder
 //  age = 35;
 //  if (age > 32) {
 //      console.log("you are kid");
 //  } else if (age > 18) {
 //      console.log("You are teenager")
 //  } else {
 //      console.log("You are underage")
 //  }

 //  For Loop
 //  var arr = [1, 2, 3, 4, 5, 6, 7];
 //  for (var i = 0; i < arr.length; i++) {
 //      console.log(arr[i]);
 //  }


 //  var arr = [5, 4, 3, 2, 1];
 //   for (var i = 1; i < arr.length; i++) {
 //      console.log(arr[i]);
 //  }

 // forEach
 //  arr.forEach(fuction(element) {
 //      console.log(element);
 //  })

 //  let - use in the place of var 
 // let j = 0;
 // Constant - use for declare any variable as a default constant
 // const ac = 0;

 // While Loop
 //  let j = 6;
 //  while (j < arr.length) {
 //      console.log(arr[j]);
 //      j++;
 //  }

 // do while

 //  do {
 //      console.log(arr[j])
 //  } while (j > arr.length);

 // Break and Contine Statement
 //  var arr = [1, 2, 3, 4, 5, 6, 7];
 //  for (var i = 0; i < arr.length; i++) {
 //      if (i == 2) {
 //          break;

 //      }
 //      if (i == 3) {
 //          continue;
 //      }
 //      console.log(arr[i]);

 //  }

 // Array Methods

 //  let myArr = ["Fan", "Camera", 34, null, true];
 //  console.log(myArr.length);- Print the length of array
 //  myArr.pop(); - Remove the last element from the array
 //  myArr.push("Fruit") - add the element at the last of array
 //  myArr.shift(); - Remove the first element of the array
 //  myArr.unshift("mango"); - Add the element at first position of array
 //  myArr.toString(); - Convert the array element in the form of string
 //  let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]
 //  arr.sort(); - Print the array in the sorting form
 //  myArr.reverse(); - Print the array in the reverse form
 //  console.log(myArr);

 // String Methods in JavaScript
 //  let myLovelyString = "Rohan is a good boy Rohan Rohan."
 //  console.log(myLovelyString.length)- Counts the length of the String.
 //  console.log(myLovelyString.indexOf("good")); - it defines the indexing of the given element and it takes first element as default when it repats
 //  console.log(myLovelyString.lastIndexOf("good")); - it defines the indexing of the given element and it takes last element as default when it repats
 //  console.log(myLovelyString.slice(1, 4));- slicing the string from given index to n-1 index.
 //  d = myLovelyString.replace("Harry", "Rohan");
 //  console.log(myLovelyString.replace("Rohan", "Harry")) - replace the given element with another one  and it works on only firstly occured element.


 // Date Methods
 //  let myDate = new Date();
 //  console.log(myDate);
 //  console.log(myDate.getTime()); It prints the time in seconds. 
 //  console.log(myDate.getFullYear()); - It prints the full year
 //  console.log(myDate.getDay()); - It prints the no of current day
 //  console.log(myDate.getMinutes()); - It prints the minutes from current time
 //  console.log(myDate.getHours());- It prints the hours from current time.


 // DOM Manipulation
 // let elem = document.getElementById("click").style.border = "2px solid red"; - target element from document by its id
 //  let elem = document.getElementsByClassName("container");
 //  elem[0].style.background = "yellow"
 //  elem[0].classList.add("text-success"); - add the class in the given document
 //  elem[0].classList.remove("text-success"); -  remove the class in the given document
 //  elem[0].classList.add("bg-primary");
 //  elem[0].classList.add("text-success");
 //   elem[0].innerHTML; 
 //  d = elem[0].innerText;
 //  createdElement = document.createElement('h1');
 //  createdElement.innerText = "This is a heading. "
 //  elem[0].appendChild(createdElement);
 //  createdElement2 = document.createElement('p');
 //  createdElement2.innerText = "This is a paragraph. "
 //  elem[0].replaceChild(createdElement2, createdElement);
 // removeChild(element) --> remove an element

 // Selecting using Query
 //  sel = document.querySelector(".container"); -return only first element when its repeat
 //  console.log(sel);
 //  sel = document.querySelectorAll(".container");
 //  console.log(sel); - return  all elements of given name of element 




 //  Event Listener
 //  function clicked() {
 //      console.log("This button was clicked");
 //  }
 //  window.onload = function() {
 //      console.log("The document was loaded.");
 //  }

 //  firstContainer.addEventListener('click', function() {
 //      console.log("Clicked on Container");
 //  })

 //  firstContainer.addEventListener('mouseover', function() {
 //      console.log("Mouse in Container");
 //  })

 //  firstContainer.addEventListener('mouseout', function() {
 //      console.log("Mouse out of  Container");
 //  })

 //  firstContainer.addEventListener('mouseup', function() {
 //      console.log("Mouse up when clicked on Container");
 //  })

 //  firstContainer.addEventListener('mousedown', function() {
 //      console.log("Mouse down when clicked on Container");
 //  })


 //  firstContainer.addEventListener('click', function() {
 //      document.querySelectorAll(".container")[0].innerHTML = "<b> We have clicked </b>";
 //      console.log("Clicked on Container");
 //  })

 //  let preHTML = document.querySelectorAll(".container")[0].innerHTML;
 //  firstContainer.addEventListener('mouseup', function() {
 //      document.querySelectorAll(".container")[0].innerHTML = preHTML;
 //      console.log("Mouse up when clicked on Container");
 //  })

 //  firstContainer.addEventListener('mousedown', function() {
 //      document.querySelectorAll(".container")[0].innerHTML = "<b> We have clicked</b>"
 //      console.log("Mouse down when clicked on Container");
 //  })


 //  Arrow Function
 //  function summ(a, b) {
 //      return a + b;
 //  }

 //  summ = (a, b) => {
 //      return a + b;
 //  }

 // SetTimeout and setinterval
 //  logKaro = () => {
 //          document.querySelectorAll(".container")[0].innerHTML = "<b>set interval fired</b>"
 //          console.log("I am your log")
 // }
 //  setTimeout(logKaro, 5000);
 //  clr = setTimeout(logKaro, 5000);
 //  setInterval(logKaro, 2000);
 //  clr = setInterval(logKaro, 2000);
 //   clearInterval(clr);
 //   use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

 //  Local Storage
 //  localStorage.setItem("name", "Kundan"); //use to set given element in local storage of user machine
 // localStorage.getItem("name"); //use to get the value related to given key in local storage of user machine
 // localStorage.clear(); //use to clear all the element in local storage of user machine

 // JOSN(JavaScript Objet Notation)
 //  obj = { name: "Rohan", length: 1, a: { this: "that" } }; //The JSON standard requires double quotes and will not accept single quotes,
 //  jso = JSON.stringify(obj); // convert the given object or variable in JSON string
 //  //  typeof(jso); // identify the type of the given element
 //  console.log(jso);

 //  parsed = JSON.parse(`{ "name": "Rohan", "length": 1, "a": { this: "that" }}`);
 //  console.log(parsed); // Conveting the JSON string in js object .

 //  Template Litrals - Backticks
 //  a = 34;
 //  console.log(`This is my ${a}`);