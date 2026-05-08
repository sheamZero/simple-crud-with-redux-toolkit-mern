import express from 'express';
import { getAllProducts, getProductById } from '../controllers/productControllers.js';

const productRoutes = express.Router();

// get all products
// /api/products
productRoutes.get("/", getAllProducts);

productRoutes.get("/:id", getProductById);


export default productRoutes;