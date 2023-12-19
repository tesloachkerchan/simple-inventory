const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

async function authenticateUser(email, password) {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return { success: false, message: 'User not found' };
    }

    if (!user.password) {
      return { success: false, message: 'Invalid password' };
    }

    if (typeof password !== 'string') {
      return { success: false, message: 'Invalid password format' };
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return { success: false, message: 'Incorrect password' };
    }

    return { success: true, user };
  } catch (error) {
    console.error('An error occurred during authentication:', error);
    return { success: false, message: 'An error occurred during authentication' };
  }
}

module.exports = authenticateUser;