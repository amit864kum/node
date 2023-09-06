

// PRATICE THE CODE AS STUDIED EARLIER


// const express = require('express');
// const path = require('path');

// const app = express();
// app.get('', (req, res) => {
//     res.send(`
//     <input type="text" placeholder="enter your Name" value= "${req.query.name}">
//     <button> click me </button>
//     `)
// })
// app.get('/about', (req, res) => {
//     res.send(`
//     <input type="text" placeholder="enter your Name">
//     <button> click me </button>
//     <h1> welcome to the about page </h1>
//     `)
// });

// app.get('/contact', (req, res) => {
//     console.log('data send by the browser >>>', req.query.name)
//     res.send("hii and welcome to the contact us page, here now all the charges taken by the ")
// })

// app.listen(4500);















//      HERE WE CAN MAKE A WEBSITE USING HTML, NODE.js, AND JSON FILE


// const express = require('express');
// const path = require('path');

// const app = express();
// const filePath = path.join(__dirname,'public');
// // console.log(filePath)

// app.use(express.static(filePath));
// app.listen(4500);





















//                                  MIDDLEWARE

// const express = require('express');
// const app = express();

// app.get('',(req,res)=>{
//     res.send('welcome to middleware')
// })

// app.get('/about',(req,res)=>{
//     res.send('welcome to about middleware')
// })

// app.listen(4500);
























//      NOW WE HAVE TO CONNECT OUR NODE JS WITH MONGO DB

// const { MongoClient } = require('mongodb')
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const databse = "e-comm";

// async function getData() {
//     let result = await client.connect();
//     let db = result.db(databse);
//     let collection = db.collection('products');
//     let response = await collection.find({}).toArray();
//     console.log(response);
// }
// getData();






//                                   READ DATA FROM MONGODB

// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const database = 'e-comm';

// async function dbconnect(){
//     let result = await client.connect();
//     let db = result.db(database);
//     return db.collection('products');

// }
// dbconnect().then((res)=>{
//     res.find({name:'Ram Siya Ram'}).toArray().then((data)=>{
//         console.log(data)
//     })
// })






//                      ANOTHER WAY TO READ DATA FROM THE MONGODB

// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const database = 'e-comm';

// async function dbconnect(){
//     let result = await client.connect();
//     let db = result.db(database);
//     return db.collection('products');
// }

// const main = async ()=>{
//     let data = await dbconnect();
//     data = await data.find().toArray();
//     console.log(data)
// }
// main();





//      UPDATE DATA IN MONGODB

// const {MongoClient, ReturnDocument} = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const database = 'e-comm';

// async function dbConnect(){
//     let result = await client.connect();
//     let db = result.db(database);
//     return db.collection('products');
// };
// const updateData = async ()=>{
//     let data = await dbConnect();
//     let result = await data.updateMany(
//         {name:'node js'},
//         {$set:{name:'Jai Bajrang Bali'}}
//     )
//     if(result.acknowledged){
//         console.log('data is updated and worked successfully')
//     }
// }
// updateData();

// const main = async()=>{
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.log(data)
// }
// main();










// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const database = 'e-comm';

// let isInserted = false;

// async function dbConnect() {
//     let result = await client.connect();
//     let db = result.db(database);
//     return db.collection('products');
// }


// const insertedData = async ()=>{
//     if (!isInserted){
//         let db = await dbConnect();
//         let result = await db.insertOne(
//             {name:'amit kumar', country:'bihar'}
//         );
//         console.log('document inserted successfully');
//         isInserted = true;
//     }
//     else{
//         console.log('Document already inserted')
//     }
// }
// insertedData();


// const deleteData = async ()=>{
//     let db = await dbConnect();
//     let result = await db.deleteMany({name:'amit kumar'})
//     console.log(result)
// }
// deleteData();






// const { MongoClient } = require('mongodb');
// const fs = require('fs').promises;
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const database = 'e-comm';

// async function dbConnect() {
//     let result = await client.connect();
//     let db = result.db(database);
//     return db.collection('products');
// }

// const insertedData = async () => {
//     try {
//         await fs.access('inserted.flag');
//         console.log('Document already inserted');
//     } catch (error) {
//         let db = await dbConnect();
//         await db.insertOne({ name: 'amit kumar', country: 'India', college: 'bihar engineering college' });
//         await fs.writeFile('inserted.flag', '');
//         console.log('Document inserted successfully');
//     }
// }

// insertedData();





// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017/e-comm';
// const client = new MongoClient(url);
// // const database = 'e-comm';

// let isInserted = false;

// async function dbConnect() {
//     let result = await client.connect();
//     let db = result.db();
//     return db.collection('products')
// }

// const insertData = async () => {
//     if (!isInserted) {
//         let db = await dbConnect();
//         let result = await db.insertMany([
//             { name: 'amit kumar', college: 'bhagalpur engineering college', state: 'bihar' }
//         ])
//         console.log(`${result.insertedCount} document inserted successfully`);
//         isInserted = true;
//     }
//     else {
//         console.log('document already inserted')
//     }
// }
// insertData();


















//                                             GET METHOD BY NodeJS

// const express = require('express');
// const dbConnect = require('./mongodb');
// const app = express();

// app.get('/', async (req, res) => {
//     try {
//         let data = await dbConnect();
//         data = await data.find().toArray();
//         console.log(data);
//         res.send(data);
//     }
//     catch(error){
//         console.log(`There is a error in this line, Please check at once`, error)
//     }
// });

// const port = 4500;
// app.listen(port, ()=>{
//     console.log(`Server is running on the port , ${port}`)
// });














//                  POST METHOD BY NODE JS

// const express = require('express');
// const dbConnect = require('./mongodb');
// const app = express();

// app.use(express.json());

// app.get('/get/data', async (req, res) => {
//     try {
//         let data = await dbConnect();
//         data = await data.find().toArray();
//         console.log(data);
//         res.send(data);
//     }
//     catch(error){
//         console.log(`There is a error in this line`,error)
//     }
// });

// app.post('/get/data', async (req,res)=>{
//     console.log(req.body);
//     res.send(req.body);
// })


// const port = 5000;
// app.listen(port, ()=>{
//     console.log(`Data is fetching through the server ${port}`)
// });




















//                              GET AND PUT API METHOD WITH NODE JS

// const express = require('express');
// const { MongoClient } = require('mongodb');
// const dbConnect = require('./mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const database = 'e-comm';
// const app = express();

// app.use(express.json())

// app.get('/app/data', async (req, res) => {
//     try {
//         let data = await dbConnect();
//         data = await data.find().toArray();
//         console.log(data);
//         res.send(data)
//     }
//     catch (error) {
//         console.log('There is a error in this line')
//     }
// })

// app.post('/app/data', async (req, res) => {
//     console.log(req.body);
//     res.send(req.body);
// });

// const port = 4500;
// app.listen(port, () => {
//     console.log(`Data is fetching through the server ${port}`);
// })






// const express = require('express')
// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const database = 'e-comm';

// const app = express();

// app.use(express.json());

// async function dbConnect() {
//     let result = await client.connect();
//     let db = await result.db(database);
//     return db.collection('products');
// }

// app.get('/api/data', async (req, res) => {
//     try {
//         let result = await dbConnect();
//         let data = await result.find().toArray();
//         console.log(data);
//         res.send(data);
//     }
//     catch(error){
//         console.log(`There is a error in this line, Please check this once`);
//     }
// });

// app.post('/api/data', async (req,res)=>{
//     let result = await dbConnect();
//     console.log(req.body);
//     res.send(req.body)
// })

// app.put('/appi/data', async (req,res)=>{
//     // let result = await dbConnect();
//     // let data = await result.updateOne(
//     //     {name: req.body},
//     //     {$set: req.body}
//     // )
//     console.log(req.body)
//     res.send({result: "update"})
// })

// const port = 4500;
// app.listen(port, ()=>{
//     console.log(`Data is fetching through the server: ${port}`)
// })













































//              LET'S PLAY WITH THE MONGOOSE

// const mongoose = require('mongoose');

// const main = async ()=>{
//     await mongoose.connect('mongodb://localhost:27017/e-comm');

//     const productSchema = new mongoose.Schema({
//         name:String
//     });

//     const ProductsModel = mongoose.model('products', productSchema);
//     let data = new ProductsModel({name:'jai mata di'});
//     let result = await data.save();
//     console.log(result)
// }
// main();






// const mongoose = require('mongoose');
// isInserted = false;
// const main = async () => {
//     await mongoose.connect('mongodb://localhost:27017/e-comm');

//     const ProductsSchema = new mongoose.Schema({
//         name: String
//     });

//     if (!isInserted) {
//         const ProductsModel = new mongoose.model('products', ProductsSchema);
//         let data = new ProductsModel({ name: 'Jai Maa Saraswati ' })
//         let result = await data.save();

//         console.log(`${result.insertedCount} document inserted successfully`)
//         isInserted = true;
//         console.log(result);
//     }
//     else {
//         console.log('document is already submitted')
//     }

// }
// main();


// const mongoose = require('mongoose');

// const main = async () => {

//     await mongoose.connect('mongodb://localhost:27017/e-comm');

//     const ProductsSchema = new mongoose.Schema({
//         name: String,
//         email: String,
//         college: String,
//         contact: Number
//     });

//     const ProductsModel = new mongoose.model('products', ProductsSchema);
//     let data = new ProductsModel({ name: 'mongodb', college: 'nce chandi', contact: '1234567890' });
//     let result = await data.save();
//     console.log(result);
// }
// main();


































//                      CURD WITH MONGOOSE 


// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/e-comm');

// const ProductSchema = new mongoose.Schema({
//     name: String,
//     college: String,
//     email: String,
//     country: String
// });


// const saveInDB = async () => {
//     const Product = new mongoose.model('products', ProductSchema);
//     let data = new Product({ name: 'First Year', college: 'Nce Chandi', email: 'ncechandi@gmail.com' });
//     let result = await data.save();
//     console.log(result);
// }
// // saveInDB();


// const updateInDB = async () => {
//     try {
//         const Product = mongoose.model('products', ProductSchema);
//         let data = await Product.updateOne(
//             { name: 'First Year' },
//             { $set: { name: 'First Year First Sem' } }
//         );
//         console.log(data);
//     }
//     catch (error) {
//         console.log(`There is a error in this line, Please check this: ${error}`)
//     }

// }
// // updateInDB();

// const deleteInDB = async () => {
//     try {
//         const Product = new mongoose.model('products', ProductSchema);
//         let data = await Product.deleteMany({ name: 'First Year First Sem', name: 'First Year' });
//         console.log(data);
//     }
//     catch (error) {
//         console.log(`There is a error in this line, Please check this: ${error}`)
//     }
// }
// // deleteInDB();

// const findInDB = async ()=>{
//     const Product = mongoose.model('products', ProductSchema);
//     let data = await Product.find();
//     console.log(data);
// }
// // findInDB();






























// //                      POST DATA POSTMAN THROUGH THE MONGODB COMPASS

// const mongoose = require('mongoose');
// const express = require('express');
// mongoose.connect('mongodb://localhost:27017/e-comm');

// const productSchema = new mongoose.Schema({
//     name: String,
//     college: String,
//     country: String,
//     email: String,
//     contact: Number
// });

// const Product = new mongoose.model('products', productSchema);

// const app = express();
// app.use(express.json());


// //  //                  POST API THROUGH THE MONGOOSE

// // app.post('/api/mongoose', async (req,res)=>{
// //     let data = new Product(req.body);
// //     let result = await data.save();
// //     res.send(req.body);
// //     console.log(result);
// // })



// //  //                  GET API THROUGH THE MONGOOSE

// // app.get('/api/mongoose', async (req, res) => {
// //     try {
// //         let data = await Product.find();
// //         res.send(data);
// //     }
// //     catch (error) {
// //         console.log(`There is a error in this line, Please Check this ${error}`)
// //     }
// // })



// //  //                  DELETE API THROUGH THE MONGOOSE


// // app.delete('/api/mongoose/:_id', async (req, res) => {
// //     try {
// //         console.log(req.params);
// //         let data = await Product.deleteOne(req.params);
// //         res.send(data);
// //     }
// //     catch (error) {
// //         console.log(`There is a error in this line, Please Check this ${error}`)
// //     }
// // })

// // app.put('/api/mongoose', async(req,res)=>{
// //     let data = await Product.updateOne(
// //         {_id:'64ee2478f9aa00c252cf6d59'},
// //         {$set:{college:'nce chandi'}}
// //     );
// //     console.log(req.params);
// //     res.send(data);
// // })

// const PORT = 5000;
// app.listen(PORT, () => {
//     console.log(`Data is fetching through the server ${PORT}`);
// })





















const express = require('express');
const mongoose = require('mongoose');
const { check, validationResult } = require('express-validator');

mongoose.connect('mongodb://localhost:27017/e-comm', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const productSchema = new mongoose.Schema({
    name: String,
    college: String,
    country: String,
    email: String,
    contact: String,
});

const Product = mongoose.model('Product', productSchema);

const app = express();
app.use(express.json());

app.get('/api/search/:key', [
    check('key').isString().notEmpty(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const data = await Product.find({
            $or: [
                { name: { $regex: req.params.key, $options: 'i' } }, // Case-insensitive search
                { college: { $regex: req.params.key, $options: 'i' } },
            ],
        });
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
