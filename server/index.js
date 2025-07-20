const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');



const routes = require('./routes')
const app = express();

app.use(cors({
  origin: 'http://localhost:8080',
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
const logger = require('./midelware/logger')
app.use(logger);



app.use('/api',routes);
const url = 'mongodb://127.0.0.1:27017/e-comm-db';

// Middleware function to authenticate the user
// app.use(auth);

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to database'))
  .catch(err => console.error('Failed to connect to database', err))

app.listen(5000, () => console.log('Server started on port 5000'));
























// const express = require('express');
// require('./db/config');
// const Category = require('./middleware/Category');
// const app = express();

// app.post("/register", (req, resp)=>{
//     resp.send("api in progress");
//     console.log("db is conected");
// });

// app.listen(5000);