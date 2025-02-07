import User from "@/app/models/User";
import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        await connectDB();

        const users = await User.aggregate([
            {
                $project: {
                    _id: 1,
                    profilepic: 1,
                    name: 1,
                    email: 1,
                    isAdmin: 1,
                }
            }
        ]);

        return NextResponse.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
