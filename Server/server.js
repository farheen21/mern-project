import  express  from "express";
import mongoose from 'mongoose';
import cors from 'cors';
const PORT = 4000;
const app = express();

app.get("/" , (req , res) => {
    res.send("Hellow my world")
})

app.use(cors) ; 
await mongoose.connect('mongodb+srv://expenser-project:expenser123@mern-project.2z9y0ob.mongodb.net/?retryWrites=true&w=majority')
console.log('your DB is Connected')

app.listen(PORT, () => {
    console.log("Server is running Aat http://localhost:4000")
})




