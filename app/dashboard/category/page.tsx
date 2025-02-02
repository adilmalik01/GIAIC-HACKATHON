"use client";
import { useState, useEffect } from "react";
import Layout from "../Layout";
import axios, { AxiosResponse } from "axios";
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

const categorySchema = Yup.object().shape({
  name: Yup.string().min(3, "Category name must be at least 3 characters").required("Required"),
});


const Category = () => {
  const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);
  const [open, setOpen] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const fetchCategories = async () => {
    try {
      const response: AxiosResponse<any, any> = await axios.get("/api/category");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const addCategory = async (name: string) => {
    try {
      const response: any = await axios.post("/api/category", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });

      if (response.ok) {
        fetchCategories();
        setOpen(false);
      }
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  const updateCategory = async (id: number, name: string) => {
    try {
      const response = await axios.put(`/api/category/${id}`, { body: JSON.stringify({ name }) });

      if (response.ok) {
        fetchCategories();
        setOpen(false);
      }
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  const deleteCategory = async () => {
    if (deleteId === null) return;
    try {
      const response = await axios.delete(`/api/category/${deleteId}`);
      if (response.ok) {
        fetchCategories();
        setDeleteDialog(false);
      }
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const handleOpen = (index: number | null = null) => {
    setEditIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditIndex(null);
  };

  return (
    <Layout>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Manage Categories</h2>
        <Button variant="contained" color="primary" onClick={() => handleOpen()}>
          Add Category
        </Button>

        <TableContainer component={Paper} className="mt-4">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Category Name</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((category, index) => (
                <TableRow key={category.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{category.name}</TableCell>
                  <TableCell>
                    <Button color="primary" onClick={() => handleOpen(index)}>
                      Edit
                    </Button>
                    <Button
                      color="secondary"
                      onClick={() => {
                        setDeleteId(category.id);
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

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{editIndex !== null ? "Edit Category" : "Add Category"}</DialogTitle>
          <DialogContent>
            <Formik
              initialValues={{
                name: editIndex !== null ? categories[editIndex].name : "",
              }}
              validationSchema={categorySchema}
              onSubmit={(values) => {
                if (editIndex !== null) {
                  updateCategory(categories[editIndex].id, values.name);
                } else {
                  addCategory(values.name);
                }
              }}
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
                  <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" color="primary">
                      {editIndex !== null ? "Update" : "Add"}
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
