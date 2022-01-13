import mongoose from 'mongoose'

const {Schema} = mongoose;

const userSchema = new Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
            trim:true,
        },
        password:{
            type:String,
            required:true,
            min:8,
            max:64,
        },
        passwordResetCode:{
            data:String,
            default:"",
        },
        job:{
            type:String,
            trim:true,
        },
        avatar:{
            type:String,
            default:'/avatar.png',
        }, 
        handles:{}, 
        posts:[{
            type:Schema.Types.ObjectId,
            ref:'Post'
        }], 
        followers:[{
            type:Schema.Types.ObjectId,
            ref:'User'
        }],
        following:[{
            type:Schema.Types.ObjectId,
            ref:'User'
        }],
        bookmark:[
            {
                type:Schema.Types.ObjectId, 
                ref:'Post'
            }
        ],
        role:{
            type:[String],
            default:["Subscriber"],
            enum:["Subscriber","Editor", "SuperAdmin", "Admin"],
        }
    }, 

    {timestamps:true}

)

export default mongoose.model('User',userSchema);