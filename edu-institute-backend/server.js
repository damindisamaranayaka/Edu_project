import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cors from "cors";

import studentRoutes from './routes/studentRoute.js';


const app = express();
app.use(cors());
app.use(bodyParser.json());
dotenv.config();
app.use(express.json());
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});
app.use("/api/students", studentRoutes);