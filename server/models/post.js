import mongoose from "mongoose";
import Comment from './comment'
const {Schema} = mongoose;

const postSchema = Schema({
    title:{
        type:String,
    },
    slug:{
        type:String,
        lowercase:true,
    },
    body:{
        type:String,
        trim:true,
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    published:{
        type:Boolean,
        default:false,
    }, 
    coverImage:{
        type:String,
        default:"default"
    }, 
    comment:[{type:Schema.Types.ObjectId, ref:"Comment"}], 
    likes:[{type: String}]
})


export default mongoose.model('Post', postSchema);