

import Category from '@/app/models/Category'
import cloudinary from '@/lib/cloudinary'
import connectDB from '@/lib/mongodb'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    await connectDB()

    try {
        const categories = await Category.find({})
        return NextResponse.json({  categories })
    } catch (error) {
        console.error('Error fetching categories:', error)
        return NextResponse.json(
            { error: 'Error fetching categories' },
            { status: 500 }
        )
    }
}

export async function POST(request: NextRequest) {
    await connectDB();

    try {
        const formData = await request.formData();

        const imageFile = formData.get("image") as File | null;
        console.log("Received Image File:", imageFile);

        if (!imageFile) {
            return NextResponse.json({ error: "Image is required" }, { status: 400 });
        }

        const buffer = await imageFile.arrayBuffer();
        const base64Image = Buffer.from(buffer).toString("base64");

        console.log("Base64 Image (first 50 chars):", base64Image.substring(0, 50) + "...");

        const uploadedImage = await cloudinary.uploader.upload(`data:${imageFile.type};base64,${base64Image}`);

        console.log("Cloudinary Response:", uploadedImage);

        const category = {
            name: formData.get("name") as string,
            image: uploadedImage.secure_url, // Save only the URL
        };

        const newCategory = new Category(category);
        await newCategory.save();

        return NextResponse.json(
            { message: "Category created successfully", category },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error inserting category:", error);
        return NextResponse.json(
            { error: "Failed to create category", details: error },
            { status: 500 }
        );
    }
}

export async function DELETE(request: NextRequest) {
    await connectDB()

    try {
        const url = new URL(request.url)
        const categoryId = url.searchParams.get('id')

        if (!categoryId) {
            return NextResponse.json(
                { error: 'Category ID is required' },
                { status: 400 }
            )
        }

        const deletedCategory = await Category.findByIdAndDelete(categoryId)

        if (!deletedCategory) {
            return NextResponse.json(
                { error: 'Category not found' },
                { status: 404 }
            )
        }

        return NextResponse.json(
            { message: 'Category deleted successfully', deletedCategory },
            { status: 200 }
        )
    } catch (error) {
        console.error('Error deleting category:', error)
        return NextResponse.json(
            { error: 'Failed to delete category' },
            { status: 500 }
        )
    }
}
