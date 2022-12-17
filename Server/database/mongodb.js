
import mongoose from 'mongoose';

async function connect() {
    await mongoose.connect('mongodb+srv://expenser-project:expenser123@mern-project.2z9y0ob.mongodb.net/?retryWrites=true&w=majority')
    console.log('your DB is Connected')
    
}


export default connect;
