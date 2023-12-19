const productModel = require('../models/productModel')

const add_product =  async (req, res) => {
  const { pname, quantity, desc, provider } = req.body;
  //create new product
  const newProduct = new productModel({ pname, quantity, desc, provider })
  try {
    await  newProduct.save();
    res.send('product created successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating product');
  }
}

module.exports = add_product;
