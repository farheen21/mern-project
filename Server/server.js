import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import Transaction from "./models/Transaction.js";
const PORT = 4000;
const app = express();


app.use(cors());


await mongoose.connect('mongodb+srv://expenser-project:expenser123@mern-project.2z9y0ob.mongodb.net/?retryWrites=true&w=majority')
console.log('your DB is Connected')

app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("Hellow my world")
})

app.get("/transaction" , async (req , res) => {
  const transaction = await Transaction.find({}).sort({createdAt : -1});
  res.json({data : transaction});
});



app.post("/transaction", async (req , res) => {
    const {amount , description , date} = req.body;

    const transaction = new Transaction( {
        amount , 
        description, 
        date,
    })
    await transaction.save();
    res.json({
        message: "SucessFull",
    });
})


app.listen(PORT, () => {
    console.log("Server is running Aat http://localhost:4000")
})




