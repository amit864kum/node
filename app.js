//  HOW TO IMPORT AND EXPORT IN NODE JS

// module.exports = {
//     x: 10,
//     y: 50,

//     //  EVEN YOU CAN ALSO ADD FUNCTION
//     z: function () {
//         return 10;
//     }

// }



// const color = require('colors');
// console.log("Hii There, My name is Amit Kumar".yellow);







// const color = require("colors");
// console.log("Error 404".red);




//      IMPORTING DATA IN NODE JS               SIMPLE API KEYS

// const data = [
//     {name: 'Amit Kumar', email: "amit@gmail.com"},
//     {name: 'Ram Kumar', email: "ram@gmail.com"},
//     {name: 'Mohan Kumar', email: "mohan@gmail.com"},
//     {name: 'Anil Kumar', email: "anil@gmail.com"}
// ] 
// module.exports = data;




















// const express = require('express');
// const { MongoClient } = require('mongodb');

// const app = express();
// const url = 'mongodb://localhost:27017';
// const dbName = 'e-comm'; // Replace with your actual database name
// const collectionName = 'products'; // Replace with your actual collection name

// // Middleware to establish MongoDB connection
// app.use(async (req, res, next) => {
//     const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

//     try {
//         await client.connect();
//         req.dbClient = client;
//         req.db = client.db(dbName);
//         next();
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// // GET route to fetch all documents from the collection
// app.get('/api/data', async (req, res) => {
//     try {
//         const collection = req.db.collection(collectionName);
//         const data = await collection.find().toArray();
//         res.json(data);
//     } catch (error) {
//         console.error('Error fetching data from MongoDB:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// // Start the Express server
// const port = 4500;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });


