import express from "express";
import { createProduct, deleteProduct, getAllProducts, updateProduct } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.route("/products").get(getAllProducts).post(createProduct)
productRouter.put("/products/:id", updateProduct)
productRouter.delete("/products/:id", deleteProduct)

export default productRouter;