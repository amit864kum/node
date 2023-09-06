//                                    HERE WE CAN MAKE API MONGOOSE WITH NODE JS



// const mongoose = require('mongoose');
// const productsSchema = new mongoose.Schema({
//     name: String,
//     college: String,
//     email: String,
//     country:String,
//     contact: Number
// });

// module.exports = mongoose.model('products', productsSchema);



const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:String,
    college:String,
    country:String,
    email:String,
    contact:Number
});

module.exports = mongoose.model('products', productSchema);
