const productss = require("../models/product.model");
//all product
getAllProducts = async (req, res) => {
  try {
    const products = await productss.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//singel product
getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productid = await productss.findById(id);
    res.status(200).json(productid);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//create product
createProduct=async(req,res)=>{
    try {
        const product = await productss.create(req.body);
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

//update product
updateProduct=async(req,res)=>{
    try {
        const { id } = req.params;
        const product = await productss.findByIdAndUpdate(id, req.body);
        if (!product) {
          return res.status(500).json({ message: "Product not found" });
        }
        const updatedProduct = await productss.findById(id);
        res.status(200).json(updatedProduct);
      } catch (error) {
        res.status(404).json({ message: "no product found on this id" });
      }
}
//deleting product
deleteProduct=async(req,res)=>{
    try {
        const { id } = req.params;
        const product = await productss.findByIdAndDelete(id);
        if (!product) {
          return res.status(404).json("no product found");
        }
        res.status(200).json({ message: "Product deleted Successfully" });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
 updateProduct,
 deleteProduct
};
