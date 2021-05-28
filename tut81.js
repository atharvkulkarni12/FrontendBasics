//inserting data in mongodb
use harrycart
db.items.insertOne({name:"Samsung 30s", price:22000, rating: 4.5, qty: 220, sold:98})
db.items.insertMany([
{name:"moto 30s", price:20000, rating: 4.0, qty: 150, sold:120},{name:"Realme 30s", price:122000, rating: 3.0, qty: 20, sold:8}])