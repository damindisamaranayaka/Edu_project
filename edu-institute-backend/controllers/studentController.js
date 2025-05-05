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

// Get a student by ID
export const getStudentByName = async (req, res) => {
    try {
        const name = req.params.name;
        const student = await Student.findOne({ name: name });
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }
      res.status(200).json(student);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };