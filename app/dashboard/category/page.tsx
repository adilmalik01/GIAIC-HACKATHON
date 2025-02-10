"use client";
import { useState, useEffect } from "react";
import Layout from "../Layout";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { Sucess } from "@/app/components/Alerts/Alert";

const categorySchema = Yup.object().shape({

  
  name: Yup.string().min(3, "Category name must be at least 3 characters").required("Required"),
});

const Category = () => {
  const [categories, setCategories] = useState<{
     _id: number; name: string; image: string 
}[]>([]);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("/api/category");
      setCategories(response.data.categories);
      console.log(response)
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const addCategory = async (values: { name: string }) => {
    try {
      const formData: FormData = new FormData();
      formData.append("name", values.name);
      if (selectedImage) {
        formData.append("image", selectedImage);
      }
    const response = await axios.post("/api/category", formData);
      if(response.statusText){
        Sucess(response.data.message,"success")
      }

      fetchCategories();
      handleCloseAddDialog();
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  const updateCategory = async (values: { name: string }) => {
    if (editIndex === null) return;
    try {
      const formData: FormData = new FormData();
      formData.append("name", values.name);
      if (selectedImage) {
        formData.append("image", selectedImage);
      }
      await axios.put(`/api/category/${categories[editIndex]._id}`, formData);
      fetchCategories();
      handleCloseEditDialog();
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  const deleteCategory = async () => {
    if (deleteId === null) return;
    try {
     const response =  await axios.delete(`/api/category?id=${deleteId}`);
      if(response.statusText){
        Sucess(response.data.message,"success")
      }
      fetchCategories();
      setDeleteDialog(false);
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const handleOpenAddDialog = () => {
    setOpenAddDialog(true);
    setPreviewImage(null);
    setSelectedImage(null);
  };

  const handleCloseAddDialog = () => {
    setOpenAddDialog(false);
  };

  const handleOpenEditDialog = (index: number) => {
    setEditIndex(index);
    setOpenEditDialog(true);
    setPreviewImage(categories[index].image);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
    setEditIndex(null);
    setSelectedImage(null);
    setPreviewImage(null);
  };

  return (
    <Layout>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Manage Categories</h2>
        <Button variant="contained" color="primary" onClick={handleOpenAddDialog}>
          Add Category
        </Button>

        <TableContainer component={Paper} className="mt-4">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Category Name</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((category, index) => (
                <TableRow key={category._id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <Image width={100} height={100} src={category.image} alt="Category" className="h-12 w-12 object-cover" />
                  </TableCell>
                  <TableCell>{category.name}</TableCell>
                  <TableCell>
                    <Button color="primary" onClick={() => handleOpenEditDialog(index)}>
                      Edit
                    </Button>
                    <Button
                      color="secondary"
                      onClick={() => {
                        setDeleteId(category._id);
                        setDeleteDialog(true);
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Dialog open={openAddDialog} onClose={handleCloseAddDialog}>
          <DialogTitle>Add Category</DialogTitle>
          <DialogContent>
            <Formik
              initialValues={{
                name: "",
              }}
              validationSchema={categorySchema}
              onSubmit={addCategory}
            >
              {({ errors, touched, handleChange }) => (
                <Form>
                  <Field
                    as={TextField}
                    label="Category Name"
                    name="name"
                    fullWidth
                    onChange={handleChange}
                    error={touched.name && !!errors.name}
                    helperText={touched.name && errors.name}
                    className="mt-3"
                  />
                  <div className="mt-3">
                    <input type="file" accept="image/*" onChange={handleFileChange} />
                  </div>
                  {previewImage && (
                    <div className="mt-3">
                      <Image src={previewImage} alt="Preview" width={100} height={100} className="h-16 w-16 object-cover" />
                    </div>
                  )}
                  <DialogActions>
                    <Button onClick={handleCloseAddDialog} color="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" color="primary">
                      Add
                    </Button>
                  </DialogActions>
                </Form>
              )}
            </Formik>
          </DialogContent>
        </Dialog>

        <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
          <DialogTitle>Edit Category</DialogTitle>
          <DialogContent>
            <Formik
              initialValues={{
                name: categories[editIndex!]?.name || "",
              }}
              validationSchema={categorySchema}
              onSubmit={updateCategory}
            >
              {({ errors, touched, handleChange }) => (
                <Form>
                  <Field
                    as={TextField}
                    label="Category Name"
                    name="name"
                    fullWidth
                    onChange={handleChange}
                    error={touched.name && !!errors.name}
                    helperText={touched.name && errors.name}
                    className="mt-3"
                  />
                  <div className="mt-3">
                    <input type="file" accept="image/*" onChange={handleFileChange} />
                  </div>
                  {previewImage && (
                    <div className="mt-3">
                      <Image src={previewImage} alt="Preview" width={100} height={100} className="h-16 w-16 object-cover" />
                    </div>
                  )}
                  <DialogActions>
                    <Button onClick={handleCloseEditDialog} color="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" color="primary">
                      Update
                    </Button>
                  </DialogActions>
                </Form>
              )}
            </Formik>
          </DialogContent>
        </Dialog>

        <Dialog open={deleteDialog} onClose={() => setDeleteDialog(false)}>
          <DialogTitle>Delete Category</DialogTitle>
          <DialogContent>Are you sure you want to delete this category?</DialogContent>
          <DialogActions>
            <Button onClick={() => setDeleteDialog(false)} color="secondary">
              Cancel
            </Button>
            <Button onClick={deleteCategory} color="error">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Layout>
  );
};

export default Category;
