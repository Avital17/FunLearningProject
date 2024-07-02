const express = require('express');
const axios = require('axios');
const cors = require('cors');
const mongoose = require('mongoose');
const { User, Student, Parent, Teacher } = require('./Models/User');


const app = express();
const port = 3001; 

app.use(cors());
app.use(express.json());
//חיבור למונגו
mongoose.connect('mongodb+srv://avital:Av123456789@funlearningpoject.7s4o1az.mongodb.net/funlearning?retryWrites=true&w=majority&appName=FunLearningPoject')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('error', err));


//from signupstudent
app.post('/SignUp', async (req, res) => {
  const { userType, name, lastname, password, ID, IDparent, childrenIDs, subject } = req.body;
  let newUser;
  
  try {
    if (userType === 'Student') {
      newUser = new Student({ name, lastname, password, ID, IDparent });
    } 
    else {
      throw new Error('Invalid user type');
    }

    const savedUser = await newUser.save();
    res.json({ success: true, user: savedUser });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

//from SignUpParent.js
app.post('/SignUpParent', async (req, res) => {
  const { userType, name, lastname, password, ID, IDparent, childrenIDs, subject } = req.body;
  let newUser;
  
  try {
    if (userType === 'Parent') {
      newUser = new Parent({ name, lastname, password, ID});
    }else {
      throw new Error('Invalid user type');
    }

    const savedUser = await newUser.save();
    res.json({ success: true, user: savedUser });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

//from SignUpTeacher.js
app.post('/SignUpTeacher', async (req, res) => {
  const { userType, name, lastname, password, ID, IDparent, childrenIDs, subject } = req.body;
  let newUser;
  
  try {
    if (userType === 'Teacher') {
      newUser = new Teacher({ name, lastname, password, ID});
    }else {
      throw new Error('Invalid user type');
    }

    const savedUser = await newUser.save();
    res.json({ success: true, user: savedUser });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});


//האזנה לשרת
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
