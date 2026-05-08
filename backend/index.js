
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

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