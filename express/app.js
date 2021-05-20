const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 80;

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));//serving static files
app.use(express.urlencoded());

//PUG SPECIFIC STUFF
app.set('view engine', 'pug');//set template engine as pug
app.set('views',path.join(__dirname, 'views'));//set the views directory

//ENDPOINTS
app.get('/',(req, res)=>{
    const params = {'title':'pubg is best game'};
    res.status(200).render('index.pug',params);
});

app.post('/',(req,res)=>{
    let name = req.body.name;
    let age = req.body.age;
    let gender = req.body.gender;
    let address = req.body.address;
    let more = req.body.more;

    let outputToWrite = `name of the client is ${name}
                        their age is ${age}, They are ${gender}
                        Address: ${address}, more info ${more}`;
    let filename = `${name}`+`.txt`;
    fs.writeFileSync(filename,outputToWrite,'utf-8');
    const params = {'title':'Success!',
                    'message':'Your form has been submitted successfully'};
    res.status(200).render('demo.pug',params);
});

//STARTING THE SERVER
app.listen(port,()=>{
    console.log(`The express app is running on port ${port}`);
})