import express from 'express';
import bodyParser from 'body-parser';
import './config/dotenv.js'; // Load environment variables
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

// Connect to database
connectDB();

export default app;
