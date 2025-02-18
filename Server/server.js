const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '********',
  database: 'contact_form_db'
});

db.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// API Route to Save Form Data
app.post('/', (req, res) => {
  const { name, email, message } = req.body;
//   const sql = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
//   db.query(sql, [name, email, message], (err, result) => {
//     if (err) {
//       res.status(500).json({ error: 'Database error' });
//     } else {
      res.status(201).json({ message: `Message saved successfully ${name}, ${email}, ${message}` });
//     }
//   });
});


app.post('/api', (req, res) => {
    const { name, email, message } = req.body;
  //   const sql = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
  //   db.query(sql, [name, email, message], (err, result) => {
  //     if (err) {
  //       res.status(500).json({ error: 'Database error' });
  //     } else {
        res.status(201).json({ message: `API Message saved successfully ${name}, ${email}, ${message}`});
  //     }
  //   });
  });


  app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
  //   const sql = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
  //   db.query(sql, [name, email, message], (err, result) => {
  //     if (err) {
  //       res.status(500).json({ error: 'Database error' });
  //     } else {
        res.status(201).json({ message: `API/CONTACT Message saved successfully ${name}, ${email}, ${message}`});
  //     }
  //   });
  });



app.use('/', (req, res) => {
    res.status(200).send('Server is working, [Test by using app.use]');
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));










//--------------------------------------------------------------------------------------------------------
//  const express = require('express');
//  const cors = require('cors');
//  const bodyParser = require('body-parser');
//  const contactRoutes = require('./routes/contactRoutes');

//  const app = express();
//  const PORT = 5000;

//  app.use(cors());
//  app.use(express.json());
//  app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/api', contactRoutes);

//  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



//--------------------------------------------------------------------------------------------------------
// const express = require('express');
// const app = express();



// app.get('/', (req, res) => {
//     res.status(200).send('Hello World, this is a simple express server');
// });


// const PORT = 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


//--------------------------------------------------------------------------------------------------------
