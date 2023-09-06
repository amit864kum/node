//                            API WITH MONGODB

// const express = require('express');
// const dbConnect = require('./mongodb');
// const app = express();

// app.get('/', async (req, res) => {
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.log(data);
//     res.send(data)
// });
// app.listen(5000, ()=>{
//     console.log('open ')
// });


const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

app.use(express.json());

app.get('/get/data', async (req, res) => {
    try {
        let data = await dbConnect();
        data = await data.find().toArray();
        console.log(data);
        res.send(data);
    }
    catch (error) {
        console.log('There is a bug in this line please correct this', error);
        console.log(error.msg)
    }
});

app.post('/get/data', (req, res) => {
    console.log(req.body);
    res.send(req.body)
})

const port = 4500;
app.listen(port, () => {
    console.log(`server is running on the port ${port}`);
});
