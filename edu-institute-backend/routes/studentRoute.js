import express from 'express';
import {createStudent,getAllStudents} from '../controllers/studentController.js';

const studentRoutes = express.Router();

studentRoutes.post("/", createStudent);         // POST /api/students
studentRoutes.get("/", getAllStudents);             // GET /api/students
export default studentRoutes;