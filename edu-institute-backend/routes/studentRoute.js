import express from 'express';
import {getAllStudents, getStudentByName,  registerStudent, loginStudent} from '../controllers/studentController.js';

const studentRoutes = express.Router();

//studentRoutes.post("/", createStudent);         // POST /api/students
studentRoutes.get("/", getAllStudents);             // GET /api/students
studentRoutes.get("/name/:name", getStudentByName);   // GET /api/students/:name
studentRoutes.post("/register", registerStudent); // POST /api/students/register
studentRoutes.post("/login", loginStudent);     // POST /api/students/login
export default studentRoutes;