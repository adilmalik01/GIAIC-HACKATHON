import Dish from '@/app/models/Dish';
import connectDB from '@/lib/mongodb';
import { NextResponse } from 'next/server'

export async function GET(request: Request, { params }: { params: { id: string } }) {
    await connectDB()
   console.log(params,request)
    try { 
        const dish = await Dish.findById(params.id);
        if (!dish) {
            return NextResponse.json({ message: "Dish not found" }, { status: 404 });
        }
        return NextResponse.json({ message: dish });
    } catch (error) {
        console.error('Error fetching dish:', error)
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
