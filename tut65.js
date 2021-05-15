//Syncronous or 
//----line by line execution


//Asyncronous or non blocking
// ----line by line execution not guaranteed
// ----callbacks will fire

const fs = require('fs');
let text = fs.readFile('file.txt','utf-8',(data,err)=>{
    console.log(data,err);
});
console.log('This is a message');