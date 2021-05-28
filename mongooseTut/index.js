// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/harrykart', { useNewUrlParser: true, useUnifiedTopology: true });


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("we're connected!");
});

const kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function () {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  }

const Kitten = mongoose.model('Kitten', kittySchema);

const cynthia = new Kitten({ name: 'cynthia' });
cynthia.speak();

cynthia.save(function (err, cynthia) {
    if (err) return console.error(err);
    cynthia.speak();
});

Kitten.find({name:"cynthia"},function(err, kitty){
    if (err) return console.log(err);
    console.log(kitty);
});