import { connectDB } from "@/helper/db";
import { NextResponse } from "next/server";
connectDB();
export function GET(request) {
    const users = [{
        name: 'Amit Dewangan',
        phone: '887164',
        course: 'java'
    },
    {
        name: 'ABC ',
        phone: '1286',
        course: 'OCP'
    }
    ];
    return NextResponse.json(users)
}

export function POST() {

}

export function DELETE(request) {
    console.log("delete api called");
    return NextResponse.json({
        message: 'deleted!',
        status: true
    },{status:201,"statusText":'created'})
}

export function PUT() {

}