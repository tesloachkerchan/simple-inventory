const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userModel = require('./models/userModel');
const authenticateUser = require('./controller/athentication')
const registration = require('./controller/registration')
const add_product = require('./controller/add_product');
const productModel = require('./models/productModel');

const app= express()
//middle-ware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//connect to frontend
app.use(express.static('./public'));
//login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const authenticated = await authenticateUser(email, password);

if (authenticated.success) {
  if (authenticated.user.role === 'admin') {
     res.redirect('/admin.html'); // Redirect to admin.html on successful login
  } else {
     res.redirect('/staff.html'); // Redirect to staff.html on successful login
  }
} else {
  res.status(401).send(authenticated.message); // Return error message on failed login
}
});

//routes
app.post('/addproduct',add_product)
app.post('/register', registration);
app.get('/product', async (req, res) => {
  try {
    const products = await productModel.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching products');
  }
});

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
    .then(() => {
    console.log('mongodb connected!')
    })
.catch(err=>console.log(err))

//connect server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});