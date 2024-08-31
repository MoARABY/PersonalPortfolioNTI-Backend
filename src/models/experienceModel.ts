import mongoose from 'mongoose'




const experienceSchema= new mongoose.Schema({
    title :{
        type:String,
        required:true,
    },
    org :{
        type:String,
        required:true
    },
    formDate : {
        type:Date,
        required:true
    },
    toDate: {
        type:Date,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    role : {
        type:String,
        required:true
    },
    tools : {
        type:Array,
        default:[]
    }
})


export default mongoose.model('Experience',experienceSchema)