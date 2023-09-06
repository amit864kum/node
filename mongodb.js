
//     CONNECT OUR NODE JS WITH MONGO DB WITH SINGLE DATABASE


// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';       //   This is used to connect the Nodejs with MongoDB
// const client = new MongoClient(url);    //  This URL is passed in the mongoclient to fetch the data 
// const database = 'e-comm';

// async function getData() {      //     async and await is mandatory to get the data from the database

//     //  this is for to connect the with the mongodb
//     let result = await client.connect();    // This "client" returns promises, but sometimes it takes times to fetch the data. And that's why we use "await" but await is used only with "async" and that's why async is used with function in previous line 334

//     let db = result.db(database);   //  connect with the database

//     let collection = db.collection('products');        //      in the database, which table has to be connected. We have to specify the particular table in the database.

//     let response = await collection.find({}).toArray();     //      "find({})" method is used to collect/fetch all the data from the mongodb databse and ".toArray()" gives the result in a structured format. 
//     console.log(response);
// }
// getData(); 

















//      Read data from mongo db

// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const database = 'e-comm';

// async function dbconnect() {
//     let result = await client.connect();
//     let db = result.db(database);
//     return db.collection('products');
// }

// module.exports = dbconnect;

// // Whenever we have to have to handle the promises then we use ".then()"
// // dbconnect().then((resp) => {
// //     resp.find({ name: 'Kumar sharma' }).toArray().then((data) => {
// //         console.log(data)
// //     });
// // })
// // console.log(dbconnect())    // If we want to get the data from the database, then first we have to handle the promises...

// //              LATEST WAY TO CONNECT WITH THE MONGODB

// // const main = async () => {
// //     let data = await dbconnect();
// //     data = await data.find().toArray();
// //     console.log(data);
// // }
// // main();





























//              INSERT DATA FROM MONGODB 

const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'e-comm';

async function dbConnect() {
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('products');
}

module.exports = dbConnect;