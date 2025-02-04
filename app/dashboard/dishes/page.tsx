"use client";
import { useState, useEffect } from "react";
import Layout from "../Layout";
import axios from "axios";
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Paper, IconButton, Avatar, Button, Dialog, DialogTitle, DialogContent,
    DialogActions, TextField, Select, MenuItem,
    Chip
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import { Sucess } from "@/app/components/Alerts/Alert";

const Dishes = () => {
    const [dishes, setDishes] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [open, setOpen] = useState(false);
    const [editDish, setEditDish] = useState(null);
    const isMobile = useMediaQuery("(max-width:600px)");
    console.log(editDish)

    const FetchProducts = async () => {
        try {
            const response = await axios.get("/api/dishes");
            setDishes(response.data.dishes);
        } catch (error) {
            console.error("Error fetching dishes:", error);
        }
    };

    useEffect(() => {
        FetchProducts();
    }, []);

    const DeleteProduct = async (DeleteId: string) => {
        try {
            const response = await axios.delete(`/api/dishes?id=${DeleteId}`);
            if (response.status === 200) {
                Sucess(response.data.message, "success");
                FetchProducts();
            }
        } catch (error) {
            console.error("Error deleting dish:", error);
        }
    };

    const handleEditClick = (dish: any) => {
        setEditDish(dish);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setEditDish(null);
    };

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`/api/dishes/${editDish._id}`, editDish);
            if (response.status === 200) {
                Sucess("Dish updated successfully!", "success");
                FetchProducts();
                handleClose();
            }
        } catch (error) {
            console.error("Error updating dish:", error);
        }
    };

    return (
        <Layout>
            <TableContainer component={Paper} sx={{ margin: 2, boxShadow: 3, borderRadius: 2, overflowX: "auto" }}>
                <Table size={isMobile ? "small" : "medium"}>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Image</strong></TableCell>
                            <TableCell><strong>Product Name</strong></TableCell>
                            <TableCell><strong>Stock</strong></TableCell>
                            <TableCell><strong>Actions</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dishes.map((dish) => (
                            <TableRow key={dish._id}>
                                <TableCell>
                                    <Avatar src={dish.images[0]} alt={dish.name} sx={{ width: isMobile ? 40 : 56, height: isMobile ? 40 : 56 }} />
                                </TableCell>
                                <TableCell>{dish.name}</TableCell>
                                <TableCell>{dish.stock}</TableCell>
                                <TableCell>
                                    <IconButton color="primary" onClick={() => handleEditClick(dish)}>
                                        <Edit />
                                    </IconButton>
                                    <IconButton onClick={() => DeleteProduct(dish._id)} color="error">
                                        <Delete />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <DialogTitle>Edit Dish</DialogTitle>
                <DialogContent>
                {editDish && (
                        <>
                            <TextField label="Dish Name" fullWidth margin="dense" value={editDish.name} onChange={(e) => setEditDish({ ...editDish, name: e.target.value })} />
                            <TextField label="Description" fullWidth margin="dense" multiline rows={3} value={editDish.description} onChange={(e) => setEditDish({ ...editDish, description: e.target.value })} />
                            <TextField label="Price ($)" fullWidth type="number" margin="dense" value={editDish.price} onChange={(e) => setEditDish({ ...editDish, price: e.target.value })} />
                            <TextField label="Stock" fullWidth type="number" margin="dense" value={editDish.stock} onChange={(e) => setEditDish({ ...editDish, stock: e.target.value })} />
                            <Select fullWidth margin="dense" value={editDish.category} onChange={(e) => setEditDish({ ...editDish, category: e.target.value })}>
                                <MenuItem value="Mild">Mild</MenuItem>
                                <MenuItem value="Medium">Medium</MenuItem>
                                <MenuItem value="Spicy">Spicy</MenuItem>
                                <MenuItem value="Extra Spicy">Extra Spicy</MenuItem>
                            </Select>
                            <input type="file" accept="image/*" onChange={(e) => setNewImage(e.target.files[0])} />
                            <TextField label="Ingredients" fullWidth variant="outlined" onKeyDown={(e) => {
                                if (e.key === "Enter" && e.target.value) {
                                    e.preventDefault();
                                    setIngredients([...ingredients, e.target.value]);
                                    e.target.value = "";
                                }
                            }} />
                            {editDish.ingredients.map((ingredient, index) => (
                                <Chip key={index} label={ingredient} onDelete={() => setIngredients(ingredients.filter((_, i) => i !== index))} className="m-1" />
                            ))}
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">Cancel</Button>
                    <Button onClick={handleUpdate} color="primary">Update</Button>
                </DialogActions>
            </Dialog>
        </Layout>
    );
};

export default Dishes;
