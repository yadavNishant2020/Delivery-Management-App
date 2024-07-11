import { sign } from 'jsonwebtoken';

const generateToken = (id) => {
  return sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

export default generateToken;
