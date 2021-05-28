//updating data in mongodb

//one record
db.items.updateOne({name:"moto 30s"},{$set: {price:2}})