const express = require("express");
const mongoose = require("mongoose");
const productss = require("./models/product.model.js");
const productRoutes = require("./routes/product.route.js");
const app = express();
// middleware to show json
app.use(express.json());

//routes
app.use("/api/products", productRoutes);

// ger data from server
app.get("/", (req, res) => {
  res.send("hello from node api server");
});

mongoose
  .connect("mongodb://localhost:27017/demoapi")
  .then(() => {
    console.log("connected to mongodb");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
