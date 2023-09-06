//                              START WITH MONGOOSE


// const mongoose = require('mongoose');                   //      This line is to connect with the mongoose

// const main = async () => {
//     await mongoose.connect("mongodb://localhost:27017/e-comm");     // To connect with the mongodb compass

//     //      Schemas is used to type validate means if you want to insert only string value then you can only insert the string value and other value can't be inserted because of the schemas
//     const productSchema = new mongoose.Schema({
//         name:String
//     });


// //      Modals is used to connect NodeJs with Mongodb in a structured way

// //      DIFFERENCE BETWEEN SCHEMA AND MODULES:-
// //          Database mein jitni bhi fields hoti h wo schemas hoti h takki validations apply ho ske... AUR unn schemas ko use krke nodejs aur mongodb ko connect krta h usko modules khte h...

// const ProductsModel = mongoose.model('products', productSchema);
// let data = new ProductsModel({name:'Jai Maa Saraswati', college: 'nalanda college of engineering chandi'});
// let result  = await data.save();
// console.log(result);
// }
// main();

























//                      CURD WITH MONGOOSE  all in one file



// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/e-comm');

// const ProductsSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     college: String,
//     country: String,
//     contact: Number
// });

// const Product = mongoose.model('products', ProductsSchema)


// const saveInDB = async () => {
//     let data = new Product({ name: 'none of the above' });
//     let result = await data.save();
//     console.log(result);

// }
// // saveInDB();

// const updateInDB = async () => {
//     try {
//         let data = await Product.updateOne(
//             { name: 'hdg' },
//             { $set: { name: 'jai ho' } }
//         );
//     }
//     catch (error) {
//         console.log(`There is a error in this line, Please Check this ${error}`)
//     }
//     console.log(data);

// }
// // updateInDB();

// const deleteInDB = async () => {

//     let data = await Product.deleteOne({ name: 'jai ho' });
//     console.log(data);
// }
// // deleteInDB();


// const findInDB = async () => {
//     let data = await Product.find();
//     console.log(data);
// }
// // findInDB();



































//                              Http POST SERVICE WITH MONGOOSE

// const express = require('express');
// require('./config');
// const Product = require('./products');

// const app = express();

// app.post('/api/mongoose', (req, res)=>{
//     res.send('api with mongoose')
// });

// const port = 5000;
// app.listen(port, ()=>{
//     console.log(`Server is running through the PORT: ${port}`);
// })


// const express = require('express');
// require('./config');
// const Product = require('./products');

// const app = express();
// app.use(express.json());

// app.get('/api/mongoose', async (req,res)=>{
//     try{
//         let data = await Product.find();
//         res.send(data);
//     }
//     catch(error){
//         console.log(`There is a error in this line, Please Check this: ${error}`)
//     }
// })


// app.post('/api/mongoose', async (req,res)=>{
//     let data = new Product(req.body);
//     let result = await data.save();
//     res.send(req.body);
//     console.log(result);
// })

// app.put('/api/mongoose/:_id', async(req,res)=>{
//     let data = await Product.updateOne(
//         {_id:'64f6e1cffc124d62f7731548'},
//         {$set:{email:'amitsharma@gmail.com'}}
//     )
//     console.log(req.params);
//     res.send(data)
// })


// const port = 5000;
// app.listen(port, () => {
//     console.log(`Data is fetching through the server: ${port}`);
// })






























//                          SEARCH API FOR THE MULTIPLE FIELD

const express = require('express');
require('./config');
const Product = require('./products');

const app = express();
app.use(express.json());

app.get('/api/search/:key', async (req, res) => {
    console.log(req.params.key);
    let data = await Product.find(
        {
            "$or": [
                { 'name': { $regex: req.params.key } },
                { 'college': { $regex: req.params.key } }
            ]

        }
    );
    res.send(req.body);
})

const PORT = 4500;
app.listen(PORT, () => {
    console.log(`Data is fetching through the server: ${PORT}`);
})
