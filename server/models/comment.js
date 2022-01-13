import mongoose from 'mongoose';

const {Schema} = mongoose;

const commentSchema = new Schema(
    {
        body:{
            type:String,
        },
        comment:[{
            type:Schema.Types.ObjectId, 
            ref:'Comment'
        }],
        by:{
            type:Schema.Types.ObjectId,
            ref:"User",

        }
    }, 
    {timestamps:true}
)


export default mongoose.model('Comment', commentSchema);