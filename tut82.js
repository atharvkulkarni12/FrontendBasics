//searching data in mongodb

//this query will return all records with ratings equal to 3.5
db.items.find({rating:3})
db.items.find({rating:{$gte:3}})

//and operator
db.items.find({rating:{$gte:3}, price:{$gt:4000}})

//or operator
db.items.find({ 
    $or:[{rating: {$lt: 3.5}}, {price:{$gt: 114000}}] 

})

//projection with filter
db.items.find({rating: {$gt: 3.5}}, {rating: 1})