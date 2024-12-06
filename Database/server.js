const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const productsRouter = require("./routes/productRoutes");
require("dotenv").config();

const app = express();
const PORT = 5001;

// Middleware

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Routes
app.use("/api/products", productsRouter);

//Port
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
