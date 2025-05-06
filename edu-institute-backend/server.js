import express from 'express';
import mongoose from 'mongoose';
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cors from "cors";

import studentRoutes from './routes/studentRoute.js';


const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());

app.use("/api/students", studentRoutes);

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});
