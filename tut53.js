// console.log("this is tutorial 53")
function greet(name, greetText="Greetings from JavaScript"){
    let name1 = "Name1";//local scope
    console.log(greetText + " " +name);
    console.log(name+" is a good boy");
}
function sum(a,b,c){
    let d = a+b+c;
    return d;
}
let name = "harry";
let name1 = "Shubham";
let name2 = "Roham";
let name3 = "Shyam";
// console.log(name+" is a good boy");
// console.log(name1+" is a good boy");
// console.log(name2+" is a good boy");
// console.log(name3+" is a good boy");
let greetText = "Good Morning";
greet(name,greetText);
greet(name1,greetText);
greet(name2,greetText);
greet(name3);
console.log(sum(1,2,3));