import Dish from '@/app/models/Dish';
import connectDB from '@/lib/mongodb';
import { isValidObjectId } from 'mongoose';
import { NextResponse } from 'next/server'

export async function GET(request: Request, { params }: { params: { id: string } }) {
    await connectDB()
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


export async function PUT(request: Request, { params }: { params: { id: string } }) {
    await connectDB()

    try {
        let data = await request.json()
        console.log(data)

        if (!isValidObjectId(params.id)) {
            return NextResponse.json(
                { error: 'Dish ID is required' },
                { status: 400 }
            )
        }

        const filter = { _id: params.id };
        const update = data;

        let updatedDish = await Dish.findOneAndUpdate(filter, data);
        return NextResponse.json({ message: "Dish Updated Successfully" })
    } catch (error) {
        console.error('Error fetching dishes:', error)
        return NextResponse.json(
            { error: 'Error fetching dishes' },
            { status: 500 }
        )
    }
}
