import {NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Dish from "@/app/models/Dish";
import User from "@/app/models/User";
import order from "@/app/models/Order";
import View from "@/app/models/View";


export  async function GET() {
    try {
        await connectDB();

        const totalOrders = await order.countDocuments();

        const totalDishes = await Dish.countDocuments();

        const totalUsers = await User.countDocuments();

        const profitResult = await order.aggregate([
            {
                $group: {
                    _id: null,
                    totalProfit: { $sum: "$totalAmount" },
                },
            },
        ]);
        const totalProfit = profitResult.length > 0 ? profitResult[0].totalProfit : 0;

        const totalViews = await View.countDocuments();

        return NextResponse.json({ totalOrders, totalDishes, totalUsers, totalProfit, totalViews }, { status: 200 });
    } catch (error) {
        console.error("Dashboard API Error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}