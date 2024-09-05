import { User } from "../models/userModel.js"
import bcryptjs from "bcryptjs"


export const Login = async (req,res)=>{
    try{
        const {email , password} = req.body
    if (!email || !password){
        return res.status(401).json({
            message : "invalid data ",
            success : false 
        })
    }
    const user =  await user.findOne(email)
        if (! email){
            return res.status(401).json({
                message : "invalid email or password",
                success : false 
            })
        }
        const isMatch =  await bcryptjs.compare(password , user.password)
        if (!isMatch) {
            return res.status(401).json({
                message : "invalid email or password",
                success : false 
            })
        }
        const tokenData ={
            id : user._id 
        }

         
        const token  = await jwt.sign("token","qwertyuiop",{expiresIn:"1d"})

        
        return res.status(200).cookie(tokenData, token ,{httpOnly : true }).json({
            message : `Welcome Back ${user.fullName}`,
            success : true  

        })
    }catch(error){  
         
    }
}


export const Logout = async (res,req) =>{
    return res.status(200).cookie("token" , "" , {expiresIn : new Date(Date.now()), httpOnly:true}).json({
        message : "User logout Successfully",
        success : true 
    })
}





export const Register = async (req,res) => {
    try{
        const {fullName , email,password} = req.body 
        if(!fullName || !email || !password ){
            return res.status(401).json({
                massage : "invalid data",
                success : false 
            })
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(401).json({
                message:"This email is already used",
                success:false,
            })
        }
            const  hashedPassword = await bcryptjs.hash(password,16)
        
        await User.create({
            fullName,
            email,
            password :hashedPassword
        });
        //hashedPassword
        return res.status(201).json({
            message:"Account created successfully.",
            success:true,
        })
    }catch (error) {
        console.log(error);
    }
}