import { NextResponse } from "next/server"

export const GET = async (req, context) => {
    console.log("Context:", context );
    console.log("Context.params:", context.params );
    console.log("Context.params.id:", context.params.id );
    return NextResponse.json({"msg" : "Post Succesfully" }, {status:201})
}