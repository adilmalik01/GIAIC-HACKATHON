"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios"
import Layout from "../Layout";
import Image from "next/image";
import { TextField, Button, Checkbox, FormControlLabel, Select, MenuItem, Chip } from "@mui/material";

const validationSchema = Yup.object({
    name: Yup.string().required("Dish name is required"),
    description: Yup.string().required("Description is required"),
    category: Yup.string().required("Category is required"),
    price: Yup.number().required("Price is required").positive("Price must be positive"),
    discount: Yup.number().min(0, "Discount cannot be negative"),
    spiceLevel: Yup.string().required("Spice level is required"),
    ingredients: Yup.array().of(Yup.string().required("Ingredient cannot be empty")),
    tags: Yup.array().of(Yup.string().required("Tag cannot be empty")),
    images: Yup.array().min(1).max(5, "Select Only 5 Image").of(Yup.mixed().required("Image is required")),
});

export default function AddDishForm() {
    const initialValues = {
        name: "",
        description: "",
        category: "",
        price: "",
        discount: "",
        spiceLevel: "",
        ingredients: [],
        tags: [],
        available: true,
        images: [],
        stock: 0,
        unitType: ""
    };

    const handleSubmit = async (values: any) => {
        try {
            const formData = new FormData();
            formData.append("name", values.name);
            formData.append("description", values.description);
            formData.append("category", values.category);
            formData.append("price", values.price);
            formData.append("discount", values.discount);
            formData.append("spiceLevel", values.spiceLevel);
            formData.append("available", values.available);

            values.ingredients.forEach((ingredient: string | number) => {
                formData.append("ingredients[]", ingredient);
            });

            values.tags.forEach((tag: string | number) => {
                formData.append("tags[]", tag);
            });

            values.images.forEach((image: string) => {
                formData.append("images", image);
            });

            console.log("Form Data Sent:", formData);

            const response = await axios.post("/api/dishes", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log("Response:", response);

            if (response.status === 201) {
                console.log("Dish Added Successfully:", response.data);
            } else {
                console.error("Failed to add dish:", response.statusText);
            }
        } catch (error) {
            console.error("Error adding dish:", error);
        }
        console.log("Dish Data:", values);
    };

    return (
        <Layout>

            <div className="min-h-screen bg-gray-50 py-8 px-4">
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

                    <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Add New Dish</h2>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        {({ values, setFieldValue }) => (
                            <Form className="space-y-6">
                                <Field name="name" as={TextField} label="Dish Name" fullWidth variant="outlined" />
                                <ErrorMessage name="name" component="div" className="text-red-500" />

                                <Field name="description" as={TextField} label="Description" multiline rows={4} fullWidth variant="outlined" />
                                <ErrorMessage name="description" component="div" className="text-red-500" />

                                <Field name="category" as={Select} fullWidth displayEmpty>
                                    <MenuItem value="">Select Food Category</MenuItem>
                                    <MenuItem value="Mild">Mild</MenuItem>
                                    <MenuItem value="Medium">Medium</MenuItem>
                                    <MenuItem value="Spicy">Spicy</MenuItem>
                                    <MenuItem value="Extra Spicy">Extra Spicy</MenuItem>
                                </Field>
                                <ErrorMessage name="category" component="div" className="text-red-500" />

                                <Field name="price" type="number" as={TextField} label="Price ($)" fullWidth variant="outlined" />
                                <ErrorMessage name="price" component="div" className="text-red-500" />

                                <Field name="discount" type="number" as={TextField} label="Discount (%)" fullWidth variant="outlined" />
                                <ErrorMessage name="discount" component="div" className="text-red-500" />



                                <Field name="stock" type="number" as={TextField} label="stock" fullWidth variant="outlined" />
                                <ErrorMessage name="stock" component="div" className="text-red-500" />

                                <Field name="unitType" as={Select} fullWidth displayEmpty>
                                    <MenuItem value="">Select Unit Type</MenuItem>
                                    <MenuItem value="Liter">Liter</MenuItem>
                                    <MenuItem value="Pieces">Pieces</MenuItem>
                                    <MenuItem value="Kg">Kg</MenuItem>
                                    <MenuItem value="Gram">Gram</MenuItem>
                                    <MenuItem value="Dozen">Dozen</MenuItem>
                                </Field>
                                <ErrorMessage name="unitType" component="div" className="text-red-500" />
                                <TextField
                                    label="Ingredients"
                                    fullWidth
                                    variant="outlined"
                                    onKeyDown={(e: any) => {
                                        if (e.key === "Enter" && e.target.value) {
                                            e.preventDefault();
                                            setFieldValue("ingredients", [...values.ingredients, e.target.value]);
                                            e.target.value = "";
                                        }
                                    }}
                                />
                                {values.ingredients.map((ingredient, index) => (
                                    <Chip key={index} label={ingredient} className="m-1" />
                                ))}
                                <ErrorMessage name="ingredients" component="div" className="text-red-500" />

                                <TextField
                                    label="Tags"
                                    fullWidth
                                    variant="outlined"
                                    onKeyDown={(e: any) => {
                                        if (e.key === "Enter" && e.target.value) {
                                            e.preventDefault();
                                            setFieldValue("tags", [...values.tags, e.target.value]);
                                            e.target.value = "";
                                        }
                                    }}
                                />
                                {values.tags.map((tag, index) => (
                                    <Chip key={index} label={tag} className="m-1" />
                                ))}
                                <ErrorMessage name="tags" component="div" className="text-red-500" />

                                <input
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    onChange={(e) => setFieldValue("images", [...values.images, ...Array.from(e.target.files)])}
                                />
                                {values.images.map((image, index) => (
                                    <img key={index} src={URL.createObjectURL(image)} alt="Dish" className="w-24 h-24 object-cover m-2" />
                                ))}
                                <ErrorMessage name="images" component="div" className="text-red-500" />

                                <FormControlLabel
                                    control={<Field name="available" type="checkbox" as={Checkbox} color="primary" />}
                                    label="Available for Order"
                                />

                                <Button type="submit" variant="contained" color="primary" fullWidth>
                                    Add Dish
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </Layout>
    );
}
