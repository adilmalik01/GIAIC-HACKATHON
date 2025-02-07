import mongoose from 'mongoose'



const ReviewSchema = new mongoose.Schema({
  user: { type: String, required: true }, 
  rating: { type: Number, required: true, min: 1, max: 5 }, 
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const DishSchema = new mongoose.Schema({

  name: { type: String, required: true },

  description: { type: String },

  category: { type: String, required: true },

  price: { type: Number, required: true },

  discounct: { type: Number },

  images: { type: [String], required: true },

  ingredients: { type: [String] },

  stock: { type: Number, default: 0 },

  unitType: { type: String, required: true },

  availability: { type: Boolean, default: true },

  spice_level: { type: String, enum: ['Mild', 'Medium', 'Spicy','Low'] },

  ratings: {
    average: { type: Number },
    reviews_count: { type: Number }
  },
  

  reviews:[ReviewSchema],

  tags: { type: [String] }
})

export default mongoose.models.Dish || mongoose.model('Dish', DishSchema)
