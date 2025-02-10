import View from "@/app/models/View";
import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
interface RequestBody {
    page: string;
}

export  async function POST(req: NextRequest) {

    try {
        await connectDB();
      
        const { page }: RequestBody = await req.json();

        if (!page) return NextResponse.json({ error: "Page is required" }, { status: 400 });

        const view = await View.findOneAndUpdate(
            { page },
            { $inc: { count: 1 } },
            { new: true, upsert: true }
        );

        return NextResponse.json({ totalViews: view.count }, { status: 200 });
    } catch (error) {
        console.error("Error updating views:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
