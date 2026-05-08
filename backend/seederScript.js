import dotenv from 'dotenv';
dotenv.config();
import Product from "./models/Product.js";
import connectDB from "./config/db.js";
import productsData from "./data/products.js";

connectDB();

const seedProducts = async () => {
    try {
        await Product.deleteMany({})
        await Product.insertMany(productsData);
        console.log("Products seeded successfully");
        process.exit();

    } catch (error) {
        console.error("Error seeding products:", error);
        process.exit(1);    
    }
}

seedProducts();
