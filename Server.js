import express from 'express';
const app = express();
import mongoose from 'mongoose';
const User = './models/User';

//middleware
const postsRoute = './routes/posts';
app.use ('/',postsRoute);

app.use(bodyParser.json());

//creating a route
app.get('/',(req,res)=>{
    res.send('we are on home');
})


// connect to db
mongoose.connect('mongodb+srv://Ndifreke:56QGSQBjV581BIKG@ndifrekecluster.g7obc.mongodb.net/test'
, {  useNewUrlParser: true }
,
err => {
    if(err) throw err
    else console.log('connected to DB!')
})

// listeninf to server on port 4000
app.listen(4000)