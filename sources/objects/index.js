
console.log("javascript object");

// I: the way to create an object in js
// 1: object literal
const person = {name: "vi", age: 2};
console.log(person);

// 2: keyword new
const person2 = new Object();
person2.name = "name2";
person2.age = 3;
console.log(person2);

// 3: 

// 4: using keyword Object.create()
console.log("------------------");


// II: access property of an object
const human = {name: "anhvi", age: 32, clazz: 12};
// using property
console.log(human.name);
// using 
console.log(human["name"]);
// using expression
const x = "name";
console.log(human[x]);

// loop all property ob an object
for(let y in human){
    console.log(y +"-" +human[y]);
}
console.log("------------------");


// III: object method

const human2 = {name: "anhvi", getAddress: function(){return "lam dong"}};
console.log(human2.getAddress);
console.log(human2.getAddress());

console.log("------------------");
