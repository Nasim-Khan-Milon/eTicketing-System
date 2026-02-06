import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { email, password } = body;

    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

    if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
        return NextResponse.json(
            { success: false, message: "Server not configured properly" },
            { status: 500 }
        );
    }

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        const token = jwt.sign(
            {
                email,
                role: "admin",
            },
            process.env.JWT_KEY as string,
            { expiresIn: "1d" }
        );
        return NextResponse.json({ success: true, token }, { status: 200 });
    } else {
        return NextResponse.json(
            { success: false, message: "Invalid email or password" },
            { status: 401 }
        );
    }
}

// Optional: handle GET if someone hits /api/admin-login directly
export async function GET() {
    return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
