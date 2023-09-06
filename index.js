//                                                   HOW TO IMPORT AND EXPORT IN NODE JS

// const app = require('./app')

// //      DIRECT PRINT
// console.log(app);

// //      PRINT WITH THE STATEMENT
// console.log("the value of X is", app.x, "and the value of Y is", app.y);

// //      SINGLE VALUE PRINT
// console.log(app.x);

// //      IMPORT  PRINT FUNCTION 
// console.log(app.z);
















//                                                INTERVIEW RELATED QUESTION 

// const arr = [1, 23, 4, 5, 3, 3, 3, 6, 7, 8, 9, 0];
// //  let result = arr.filter((item) => {
// //     console.log(item);

// //      IF YOU WANT ANY PARTICULAR INTEGER VALUE THEN,

// let result = arr.filter((item) => {     // FILTER is used to get Element from the array and filter is used only in array
//     return item >= 3;
// })
// // })
// console.log(result);

























//                                   CORE MODULE IN NODE JS

// const fs = require('fs');       // CREATE a file with the help of the code
// fs.writeFileSync('hello.txt','there is a tutorial of the node js in hindi')

// //        to know the path of the file in your computer
// console.log(__dirname);
// console.log(__filename);

// const fs = require("fs");
// fs.writeFileSync('new.txt', 'hii there')

// const gs = require('fs').writeFileSync;
// gs('new.js','hii there');

























//                                  CREATING SINGLE FILE USING NODE JS

// const fs = require('fs');
// const input = process.argv;          // ARGV stands for argument vectors
// fs.writeFileSync(input[2], input[3]);





















//                  INPUT FROM COMMAND LINE
//      ADD OR REMOVE/ DELETE FILE USING COMMAND LINE IN NODE JS












//          HERE WE WANT TO CREATE 5 FILES IN THE FOLDER 
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'files')
// for (let i = 0; i < 5; i++) {

//     fs.writeFileSync(dirPath + '/hello' + i + '.txt', 'hii there are many files in this laptop and thats okay');

// }




// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'files');
// for (let i = 0; i <= 5; i++) {

//     fs.writeFileSync(dirPath + '/ram' + i + '.txt', 'This is a Rama text files...');
// }

// fs.readdir(dirPath, (err, items) => {           //  * readdir MEANS READ DIRECTORY *
//     items.forEach((items) => {
//         console.log('This is the file whose name is Lord Rama,', items);
//     })
// });






























//                 CRUD OPERATION IN NODE JS ...


//                CRETE FILE IN CRUD OPERATION

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'crud');
// const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath, 'this is one of the crud file system');





//              READ FILE IN CRUD OPERATION
// fs.readFile(filePath,'utf8',(err,item)=>{

//         console.log(item)

// });






// //              UPDATE FILE IN CRUD OPERATION

// fs.appendFile(filePath,' and file name is append ',(err)=>{
//     if(!err) console.log('file is updated');
// });










//                      RENAME FILE IN THE CRUD OPERATION

// fs.rename(filePath, `${dirPath}/amit.txt`, (err) => {
//     if (!err) console.log('file is renamed')
// });






//                      DELETE FILE IN THE CRUD OPERATION

// fs.unlinkSync(`${dirPath}/amit.txt`);































//              HERE WE HAVE TO FETCH DATA IN ANOTHER FOLDER 

// const express = require('express');
// const path = require('path');           //  "path"  helps to access the path/route/raasta of file or folder

// const app = express();          // this is because we have to make a executable code 
// const publicPath = path.join(__dirname, 'public');

// app.use(express.static(publicPath));                 //  "use" is a function of express.js
// //  'express.static' loads static file from the public folder / publicPath

// app.listen(4400);





















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

































//                                   READ DATA FROM MONGO DB 

// //          THESE LINE 384-394 CODES ARE TRANSFERED IN HTE MONGODB FILES 
// const dbconnect = require('./mongodb');
// // const { MongoClient } = require('mongodb');
// // const url = 'mongodb://localhost:27017';
// // const client = new MongoClient(url);
// // const database = 'e-comm';

// // async function dbconnect() {
// //     let result = await client.connect();
// //     let db = result.db(database);
// //     return db.collection('products');

// // }


// const main = async () => {
//     let data = await dbconnect();
//     data = await data.find().toArray();
//     console.log(data);
// }
// main();
































//                  INSERT DATA FROM MONGODB


// const{MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const database = 'e-comm';

// let isInserted = false;

// async function dbConnect(){
//     let result = await client.connect();
//     let db = result.db(database);
//     return db.collection('products')
// }

// const insertData = async ()=>{
//     if(!isInserted){
//         let db = await dbConnect();
//         let result = await db.insertMany([
//             {name:'aquaman', college: 'bhagalpur engineering college',state:'bihar'}
//         ])
//         console.log(`${result.insertedCount} Data inserted successfully`);
//         isInserted = true;
//     } 
//     else{
//         console.log('Data already inserted')
//     }
// }
// insertData();
































//                          UPDATE DATA FROM MONGODB

// const dbConnect =  require('./mongodb');
// const updateData = async ()=>{
//     let data = await dbConnect();
//     let result = await data.updateOne(
//         {name:'Kumar sharma'},{
//             $set:{name:'Ram Kumar'}
//         }
//     )
//     if(result.acknowledged){
//         console.log('data is updated')
//     }
//     // console.log(data);
// }
// updateData();




























//                                              DELETE DATA IN NODE JS

// const dbConnect = require('./mongodb');
// const deleteData = async ()=>{
//     let data = await dbConnect();
//     let result = await data.deleteOne({name:'Mongo DB'});
//     console.log(result);
//     if(result.acknowledged){
//         console.log('data deleted successfully')
//     }
// }
// deleteData()








//                  ANOTHER BETTER WAY TO DELETE DATA FROM THE MONGODB

// const dbConnect = require('./mongodb');

// const deleteData = async () => {
//     let db = await dbConnect();
//     let result = await db.deleteMany({
//         $or: [
//             { name: 'amit kumar' },
//             { name: 'aquaman' },
//             {name:'aquamanr'}
//         ]
//     });
//     console.log(`${result.deletedCount} Data deleted successfully`);
// }
// deleteData();






































//                          GET , POST, PUT AND DELETE API METHOD USING NODE JS

// const express = require('express');
// // const logger = require('morgan')
// const dbConnect = require('./mongodb');
// const app = express();

// app.get('/app/data', async (req, res) => {
//     let data = await dbConnect();
//     let result = await data.find().toArray();
//     console.log(result);
//     res.send(result);
// })

// app.use(express.json());

// app.post('/app/data', async (req, res) => {
//     let data = await dbConnect();
//     console.log(req.body);
//     res.send(req.body)
// });

// app.put('/app/data', async (res, req) => {
//     let data = await dbConnect();
//     let result = await data.updateOne(
//         { name: req.body },
//         { $set: req.body }
//     )
// });

// // app.delete('/app/data', async(req,res)=>{
// //     let data = await dbConnect();
// //     data = await data.deleteOne({name:'kumar amit'})
// //     console.log(data);
// //     res.send(data);
// // })

// const port = 4500;
// app.listen(port, async => {
//     console.log(`Data is fetching through the server ${port}`);
// });  