import express from "express";
import { createProduct, getAllProducts } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.route("/products").get(getAllProducts)
productRouter.route("/products").post(createProduct)

export default productRouter;