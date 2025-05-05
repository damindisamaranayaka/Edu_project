import Student from '../models/student.js';

// Add a new student
export const createStudent = async (req, res) => {
    try {
      const newStudent = new Student(req.body);
      const savedStudent = await newStudent.save();
      res.status(201).json(savedStudent);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

// Get all students
export const getAllStudents = async (req, res) => {
    try {
      const students = await Student.find();
      res.status(200).json(students);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };