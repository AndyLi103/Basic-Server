// Citations: https://www.geeksforgeeks.org/steps-to-create-an-express-js-application/

const express = require('express');

const app = express();
const PORT = process.env.PORT || 8081;

// Starting server
app.listen(PORT, (error) =>{
  console.log(`Server Running on port ${PORT}`);
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Route for hello
app.get('/hello', (req, res)=>{
  if (!req.query.name) {
    res.status(200).send('Hello, world!')
  } else {
    res.status(200).send(`Hello, ${req.query.name}!`)
  }
});

app.post('/hello', (req, res)=>{
  res.status(405).send('This method is unsupported.')
});

// Route for check
app.get('/check', (req, res)=>{
  res.status(200).send('All is well!')
});

app.post('/check', (req, res)=>{
  res.status(405).send('This method is unsupported.')
});