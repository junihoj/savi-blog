import User from "../models/user";

export const checkDuplicatedEmail = async (req, res, next)=>{
    // console.log(req.body);
    const {email} = req.body;
    //check 
    const user =await User.findOne({email}).exec()
    console.log('USER', user)
    if(user) return res.status(400).send("User already exist")
    next();
}