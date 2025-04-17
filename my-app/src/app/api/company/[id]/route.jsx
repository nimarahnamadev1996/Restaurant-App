import { connectedToDatabase } from "@/lib/mongodb"
import Company from "@/models/Company"
import { NextResponse } from "next/server"

    
export async function GET(req, {params}){
    try{
        await connectedToDatabase()
        const {id} = params

        const product = await Company.findOne({ _id:id })

        return NextResponse.json(product, {status:200})
        
    } catch(error){
        return NextResponse.json({error:error}, {status:500})
    }
}