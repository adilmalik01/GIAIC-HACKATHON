import Dish from '@/app/models/Dish'
import cloudinary from '@/lib/cloudinary'
import connectDB from '@/lib/mongodb'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  await connectDB()

  try {
    const dishes: any = await Dish.find({})

    return NextResponse.json({ dishes })
  } catch (error) {
    console.error('Error fetching dishes:', error)
    return NextResponse.json(
      { error: 'Error fetching dishes' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  await connectDB()

  try {
    const formData = await request.formData()
    const images = formData.getAll('images') as File[]

    const imageUrls: string[] = []

    for (const image of images) {
      const buffer = await image.arrayBuffer()
      const base64Image = Buffer.from(buffer).toString('base64')
      const uploadedImage = await cloudinary.uploader.upload(
        `data:image/png;base64,${base64Image}`
      )
      imageUrls.push(uploadedImage.secure_url)
    }
    const dish = {
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      category: formData.get('category') as string,
      price: Number(formData.get('price')),
      discount: Number(formData.get('discount')),
      stock: Number(formData.get('stock')),
      unitType: formData.get('unitType') as string,
      spiceLevel: formData.get('spiceLevel') as string,
      available: formData.get('available') === 'true',
      ingredients: formData.getAll('ingredients[]'),
      tags: formData.getAll('tags[]'),
      ratings: {
        average: 0,
        reviews_count: 0
      },
      images: imageUrls
    }

    console.log('Received dish:', dish)

    const newDish = new Dish(dish)
    await newDish.save()
    return NextResponse.json(
      { message: 'Dish created successfully', dish },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error inserting dish:', error)
    return NextResponse.json(
      { error: 'Failed to create dish' },
      { status: 500 }
    )
  }
}


export async function DELETE(request: Request) {
  await connectDB()

  try {
    const url = new URL(request.url)
    const dishId = url.searchParams.get('id')

    if (!dishId) {
      return NextResponse.json(
        { error: 'Dish ID is required' },
        { status: 400 }
      )
    }

    const deletedDish = await Dish.findByIdAndDelete(dishId)

    if (!deletedDish) {
      return NextResponse.json(
        { error: 'Dish not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { message: 'Dish deleted successfully', deletedDish },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error deleting dish:', error)
    return NextResponse.json(
      { error: 'Failed to delete dish' },
      { status: 500 }
    )
  }
}
