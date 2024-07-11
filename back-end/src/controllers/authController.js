import bcrypt from 'bcryptjs';
import User from '../models/user.js';
import generateToken from '../utils/jwt.js';

export const signup = async (req, res) => {
  const { name, email, username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      username,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    console.error('Error in sign up:', err);
    if (err.code === 11000) {
      res.status(400).json({ error: 'Email or username already exists' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

export const signin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    const token = generateToken(user._id);

    res.json({ token });
  } catch (err) {
    console.error('Error in sign in:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
