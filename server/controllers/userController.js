import User from "../models/user.model.js";
import bycrypt from "bcryptjs";
export const register=async(req, res)=> {
    try {
        const{name, email, password}=req.body;
        if(!name||!email||!password)
        {
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }
        const user=await User.findOne({ email });
        if(user)
        {
            return res.status(400).json({
                success:false,
                messsage:"User already exists"
            })
        }
        const hashedPassword = await bycrypt.hash(password, 10);
        await User.create({
            name,
            email, 
            password:hashedPassword
        });
        return res.status(201).json({
            success:true,
            message:"User registered successfully"
        });

    }catch (error) {
        console.error("Error in register:", error);
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        });

    }
}


export const login=async(req, res)=>{
    try{
        const {email, password} = req.body;
        if(!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }
        const user = await User.findOne({ email});
        if(!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            });
        }
        const isPasswordMatch = await bycrypt.compare(password, user.password);
        if(!isPasswordMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            });
        }
        generateToken(res, user, `Welcome back ${user.name}`);

    }catch(error) {
        console.error("Error in login:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}