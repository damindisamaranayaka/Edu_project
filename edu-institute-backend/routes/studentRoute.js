import express from 'express';
import {createStudent,getAllStudents, getStudentByName} from '../controllers/studentController.js';

const studentRoutes = express.Router();

studentRoutes.post("/", createStudent);         // POST /api/students
studentRoutes.get("/", getAllStudents);             // GET /api/students
studentRoutes.get("/name/:name", getStudentByName);   // GET /api/students/:name
export default studentRoutes;