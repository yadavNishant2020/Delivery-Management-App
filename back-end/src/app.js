import express from 'express';
import bodyParser from 'body-parser';
import './config/dotenv.js'; // Load environment variables
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);

// Connect to database
connectDB();

export default app;
