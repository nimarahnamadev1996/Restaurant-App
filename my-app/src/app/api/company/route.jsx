import { connectedToDatabase } from "@/lib/mongodb";
import Company from "@/models/Company";
import { NextResponse } from "next/server";




export async function GET(request) {


    try{

        await connectedToDatabase()

        const {searchParams} = new URL(request.url)
        const category = searchParams.get("category")

        let products

        if(category){
            products = await Company.find({category})
        }else{
            products = await Company.find({})
        }
    
        return NextResponse.json(products, {status: 200})

    }catch(error){
        return NextResponse.json({error: "خطا در دریافت محصولات"}, {status:500})
    }
}