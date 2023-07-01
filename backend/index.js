const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
const connectToDb = require('./db');
connectToDb();
//adding a middleware to solve the problem of CORS policy
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(cors());
app.use(express.json());//other wise request body will show you error
//api end points
//API to create a new user and login
app.use('/api',require('./routes/createUser'));
app.use('/api',require('./routes/displayData'));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})