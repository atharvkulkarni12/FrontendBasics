//deleting data from mongodb

//delete one matching record
db.items.deleteOne({price:22000})

//delete all matching records
db.items.deleteMany({price:22000})
