import User from '../models/user';
import jwt from 'jsonwebtoken'
import {hashPassword, comparePassword} from '../utils/auth';


export const register = (req, res)=>{
    console.log(req.body)

    // const user = new User({})

    try {

        const {name, email, job, password} = req.body
        
       // validation
       //TODO:  SET MINIMUM PASSWORD REQUIREMENT ON CLIENT SIDE
       // var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

        // hash password
        const hashedPassword = await hashPassword(password);

        const user = await new User({
            name,
            email,
            job,
            password:hashedPassword,
        }).save();

        console.log("saved User", user);
        return res.json({ok:true});
        
    } catch (error) {
       console.log(error);
       return res.status(400).send("Error, Try again");
    }
}



export const csrfController = (req,res)=>{
    
    res.send({getCsrfToken: req.csrfToken()});
}

export const login = (req,res)=>{

    console.log(req.body)

    try{
        const {email, password} = req.body;
        // console.log(email,password);
        //check if user exist
        const user = await User.findOne({email}).exec();
        if(!user) return res.status(400).send("No such User");
        const match =await comparePassword(password, user.password);
        console.log(match)
        if(!match) return res.status(400).send("Password is incorrect please try again")
        // create signed jwt
        const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET, {expiresIn:'7d'});

        // return user and token to client , exclude hashed password
        user.password = undefined;

        //send token in cookie using http only flag
        res.cookie("token", token, {
            httpOnly:true,
            // secure:true  //only works with https
        });
        res.json(user);
    }catch(err){
        console.log(err)
    }
}