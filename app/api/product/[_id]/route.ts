import { connect } from "@/database/connectDB";
import { NextRequest,NextResponse } from "next/server";
import Product from "@/models/productModel";


 connect();
 
 export async function GET(req: NextRequest,{params}:{params:{_id:string}}){
    try {
        let product = await Product.findById(params._id);
       
        return NextResponse.json({product},{status:200})

           
        
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500});
        
    }
 }


 export async function PUT(req: NextRequest,{params}:{params:{_id:string}}){
    try {
        const {name , description,price,imageUrl,_id} = await req.json();
        let product = await Product.findByIdAndUpdate(params._id,{name,description,price,imageUrl,_id});
        console.log(product,'pok')
       
        return NextResponse.json({product},{status:200})

           
        
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:400});
        
    }
 }
