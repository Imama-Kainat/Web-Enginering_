import express from "express";
const router=express.Router();
import mongoose from "mongoose";
import {createProduct,updateProduct,deleteProduct,getProducts} from "../controllers/product.controller.js";
router.post("/",createProduct); //create a new product
router.delete("/:id",deleteProduct); //delete a product
router.get("/", getProducts); //get all products
//put is used for changing the data in the database and patch is used for changing 1 element in the database
router.put("/:id", updateProduct); //update a product
export default router;
