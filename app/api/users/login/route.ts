import { connect } from "@/database/connectDB";
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import User from "@/models/userModel";
import jwt from 'jsonwebtoken';

 connect();
 
 export async function POST(req: NextRequest){
    try {
       
       

        const {email,password} = await req.json(); //  getting data from body

       
        let user = await User.findOne({email});  //  check user already exists or not 

       
        if(!user) return NextResponse.json({error:"user Doesn't Exists"},{status:400}) ; // if user not exists

        
        const isPasswordMatched = await bcryptjs.compare(password,user.password) ; // check password is same or not
        
        if(!isPasswordMatched)
            return NextResponse.json({message:"Invalid email or password"},{status:400})

        
  
         const token = await jwt.sign(
            {
                email:user.email,
            },
            process.env.TOKEN_SECRET!,
            {expiresIn:'1d'});

            const res = NextResponse.json({message:`welcome Back ${user.email}`,success:true , role : user.role ,token :token},{status:200})
            res.cookies.set("token",token,{httpOnly:true})

            return res;
            
        
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500});
        
    }
 }


