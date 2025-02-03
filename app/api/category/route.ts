import Category from '@/app/models/Category'
import cloudinary from '@/lib/cloudinary'
import connectDB from '@/lib/mongodb'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    await connectDB()

    try {
        const categories = await Category.find({})
        return NextResponse.json({ categories: categories })
    } catch (error) {
        console.error('Error fetching categories:', error)
        return NextResponse.json(
            { error: 'Error fetching categories' },
            { status: 500 }
        )
    }
}

export async function POST(request: NextRequest) {
    await connectDB()

    try {
        const formData = await request.formData()
        const image = formData.get("image")
        const buffer = await image.arrayBuffer()
        const base64Image = Buffer.from(buffer).toString('base64')
        const uploadedImage = await cloudinary.uploader.upload(
            `data:image/png;base64,${base64Image}`)
        const category = {
            name: formData.get('name') as string,
            image: uploadedImage
        }

        console.log('Received category:', category)

        const newCategory = new Category(category)
        await newCategory.save()
        return NextResponse.json(
            { message: 'Category created successfully', category },
            { status: 201 }
        )
    } catch (error) {
        console.error('Error inserting category:', error)
        return NextResponse.json(
            { error: 'Failed to create category' },
            { status: 500 }
        )
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
