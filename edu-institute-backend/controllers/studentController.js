import Student from '../models/student.js';
import bycrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// // Add a new student
// export const createStudent = async (req, res) => {
//     try {
//       const newStudent = new Student(req.body);
//       const savedStudent = await newStudent.save();
//       res.status(201).json(savedStudent);
//     } catch (err) {
//       res.status(400).json({ error: err.message });
//     }
//   };


//register a new student
export const registerStudent = async (req, res) => {
    try {
      const { name, age, email, password } = req.body;
  
      // Check if the student already exists
      const existingStudent = await Student.findOne({ email });
      if (existingStudent) {
        return res.status(400).json({ message: 'Student already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bycrypt.hash(password, 10);
  
      // Create a new student
      const newStudent = new Student({
        name,
        age,
        email,
        password: hashedPassword,
      });
  
      // Save the student to the database
      const savedStudent = await newStudent.save();
  
      // Generate a JWT token
      const token = jwt.sign({ id: savedStudent._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });
  
      res.status(201).json({ student: savedStudent, token });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

// Login a student
export const loginStudent = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find the student by email
      const student = await Student.findOne({ email });
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }
  
      // Check if the password is correct
      const isMatch = await bycrypt.compare(password, student.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // Generate a JWT token
      const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });
  
      res.status(200).json({ student, token });
    } catch (err) {
      res.status(500).json({ error: err.message });
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