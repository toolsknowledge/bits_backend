const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");


const app = express();

app.use(express.json());

const bitsClient = mongodb.MongoClient;


app.get("/get_tutorials",(req,res)=>{
    bitsClient.connect("mongodb+srv://admin:admin@03reactjs9am.7kkvt.mongodb.net/bits?retryWrites=true&w=majority",(err,connection)=>{
            if(err) throw err;
            else{
                const db = connection.db("bits");
                db.collection("tutorials").find().toArray((err,array)=>{
                    if(err) throw err;
                    else{
                        res.send(array);
                    }
                })
            }
    });
});


app.listen(8080,()=>{
    console.log("server running on port no.8080");
});




