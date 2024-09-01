 import { connect } from "@/database/connectDB";
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import User from "@/models/userModel";

 connect();
 
 export async function POST(req: NextRequest){
    try {
       
        const {email,password,role} = await req.json();
        let user = await User.findOne({email});
        if(user) return NextResponse.json({error:"user already Exists"})

            const salt = await bcryptjs.genSalt(10);
            const hashedPassword = await bcryptjs.hash(password,salt)
           user =  await User.create({
                email: email,
                password :hashedPassword,
                role:role
            })

            return NextResponse.json({message:"User registered successfully"},{status:201})
        
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500});
        
    }
 }