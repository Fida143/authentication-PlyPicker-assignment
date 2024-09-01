import { NextRequest,NextResponse } from "next/server";

export async function GET(){
 try {
    const res = NextResponse.json({
        message:"Logout Successfully !",
        success:true,
    },{status:200});

    res.cookies.set("token","",{httpOnly:true,expires:new Date(0)})
    return res;
 } catch (error) {
    NextResponse.json({error:"Error while Logging Out"},{status:500})
    
 }
}