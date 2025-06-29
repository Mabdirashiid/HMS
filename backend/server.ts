import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js'; // 👈 include `.js` extension
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/auth.js';

dotenv.config();
await connectDB();

const app = express();



const corsOptions = {
  origin: 'http://localhost:5174',
  credentials: true,
};

app.options('*', cors(corsOptions)); // for preflight
app.use(cors(corsOptions));          // for all requests



app.use(express.json());

// Log the incoming origin
app.use((req, res, next) => {
    console.log('🔍 Origin:', req.headers.origin);
    next();
  });
  


app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
