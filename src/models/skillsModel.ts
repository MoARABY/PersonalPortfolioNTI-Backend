import mongoose from 'mongoose'

const skillsSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    category : {
        type:String,
        enum : ['backend','frontend','database']
    },
    image : {
        type:String,
        required:true
    }
})

export default mongoose.model('Skills',skillsSchema)