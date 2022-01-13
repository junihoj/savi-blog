import Post from '../models/post'

export const allPost = (req,res)=>{
    const posts = Post.find({published:true}).exec()

    return res.json({posts})
}