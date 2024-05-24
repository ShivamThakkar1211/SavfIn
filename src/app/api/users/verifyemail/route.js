import {connect} from "@/dbConfig/dbConfig"
import { NextResponse } from "next/server";
import User from "@/models/userModels";

connect();

export async function POST(request){
    try {
        const reqBody = await request.json()
        const {token} = reqBody 
        console.log(token);


     const user =  await User.findOne({verifyToken:token,verifyTokenExpiry:{$gt: Date.now()}})

     if(!user)
        {
            return NextResponse.json({error:error.message},{status:400})
        }

        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;
        await user.save();

        return NextResponse.json({
            message:"Email verified succesfullly",
            success:true
        })

    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }
}