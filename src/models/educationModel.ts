import mongoose from 'mongoose';


const educationSchema = new mongoose.Schema({
    title : {
        type:String,
        required:true
    },
    org : {
        type:String,
        required:true
    },
    department : {
        type:String,
        required:true
    },
    degree : {
        type:String,
        required:true
    },
    fromDate : {
        type:Date,
        required:true
    },
    toDate : {
        type:Date,
        required:true
    },
    description : {
        type:String,
        required:true
    },
})


export default mongoose.model('Education',educationSchema)