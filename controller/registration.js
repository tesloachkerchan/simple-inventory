const userModel = require('../models/userModel')
const registration = async (req, res) => {
  const { name, email, password } = req.body;

  // Check if user already exists
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    return res.status(409).send('User with this email already exists');
  }

  // Create a new user
  const user = new  userModel({ name, email, password });
  try {
    await  user.save();
    res.send('User registered successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error registering user');
  }
}
module.exports = registration;