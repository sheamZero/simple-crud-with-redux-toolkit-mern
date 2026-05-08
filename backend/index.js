
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
const port = process.env.PORT || 5000;

import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";


const app = express();
app.use(cors());
app.use(express.json());

connectDB();

// routes

app.get("/", (req, res) => {
  res.send("Server Running");
});


app.use("/api/products", productRoutes);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});