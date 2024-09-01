import { connect } from "@/database/connectDB";
import { NextRequest,NextResponse } from "next/server";
import Product from "@/models/productModel";

 connect();
 
 export async function POST(req: NextRequest){
    try {
       
        const {name,description,price,imageUrl} = await req.json();
        let product = await Product.findOne({name});
        if(product) return NextResponse.json({error:"Same Product is already Exists"})

           product =  await Product.create({
                name,
                description,
                price,
                imageUrl
            })

            return NextResponse.json({message:"Product created successfully"},{status:201})
        
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500});
        
    }
 }


 export async function GET(req:NextRequest){
  try {
 
    const products = await Product.find({});
 
     return NextResponse.json({message:"Products fetched Successfully",products},{status:200},)
  } catch (error) {
     NextResponse.json({error:"Error while Logging Out"},{status:500})
     
  }
 }