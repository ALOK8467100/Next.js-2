import { NextResponse } from "next/server";


export async function GET(req){
    console.log(req);
    // Hreader
    const requestHeaders = new Headers(req.headers)
    console.log(requestHeaders);

    // URL Query params

    const {searchParams} = new URL(req.url)
    console.log(searchParams);

    // Cookies

    const cook1 = req.cookies
    console.log("Cookies1:", cook1);

    return NextResponse.json({"msg" : "Hello NextJS API"})
}

export async function POST(req){
    console.log(req)
    return NextResponse.json({"msg" : "post Success"})
}