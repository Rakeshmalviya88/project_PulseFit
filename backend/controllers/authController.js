const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//
JWT_SECRET='rakesh_pulsefit'

const signup = async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.json({ success: true, message: 'User created successfully!' });
    console.log({newUser})
    //
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error aa rha hein' });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
    //
    res.json({ success: true,userId: user._id,username: user.username,  token });
    
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
    console.log(JWT_SECRET)
  }
};

module.exports = { signup, login };
