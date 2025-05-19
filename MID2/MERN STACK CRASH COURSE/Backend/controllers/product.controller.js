import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const createProduct = async (req, res) => {


    const product=req.body;//user will send 
    if (!product.name || !product.price || !product.image) {
        return res.status(400).jason9({sucess:false,message:"please enter all fields"});
    }
    const newProduct=new Product(product);
    try{
        await new Product(product).save();
        res.status(201).json({success:true,message:"product created successfully"});
    }
    catch(error){
        res.status(500).json({success:false,message:"product not created"});
    }

    
};
export const updateProduct = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Product not found" });
    }
    try {
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ success: true, product });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error updating product" });
    }
};
export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error deleting product" });
    }
};
export const getProducts = async (req, res) => {
    
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, products });
    } catch (error) {
        console.log("eror in getting products")
        res.status(500).json({ success: false, message: "Error fetching products" });
    }
};