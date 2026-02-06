import authOptions from "@/lib/auth";
import connectToDb from "@/lib/db";
import User from "@/models/user.model";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    try {
        await connectToDb();
        const session = await getServerSession(authOptions);

        if (!session || session.user.role !== "passenger" || !session.user.email || !session.user.id) {
            return NextResponse.json(
                { message: "Unauthorized" },
                { status: 401 }
            );
        }

        const user = await User.findById(session.user.id).select("-password");

        if (!user) {
            return NextResponse.json(
                { message: "User not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ user }, { status: 200 });

    } catch (err) {
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }   
}   
