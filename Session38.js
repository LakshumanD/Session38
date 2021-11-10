//find all information
db.Product.find({})


// find the product price which are 400 to 800
db.Product.find({
    product_price:{$gte:400,$lte:800}
},{product_price:1,_id:0})

//Find the product price which are not between 400 to 600
db.Product.find({
    product_price:{$not:{$gte:400,$lte:600}}
},
{product_price:1,_id:0})

//List the four product which are grater than 500 in price 
db.Product.find({
    product_price:{$gt:500}
}).limit(4)

//Find the product name and product material of each products
db.Product.find({
},{product_name:1,product_material:1,_id:0})

//Find the product with a row id of 10
db.Product.find({id:"10"
})

//Find only the product name and product material
db.Product.find({
},{product_name:1,product_material:1,_id:0})

//Find all products which contain the value of soft in product material 
db.Product.find({product_material:{$in:["Soft"]}})

//Find products which contain product color indigo  and product price 492.00
db.Product.find({
    $or: [{product_price:492},{product_color:"indigo"}]
})

//Delete the products which product price value are same
db.Product.find({},{product_price:1})
   .sort({_id:1})
   .forEach(function(it) { 
         db.getCollection("Product").remove(
             { 
                 _id:{
                 $gt:it._id}
                 ,product_price:it.product_price});
      
   });
   