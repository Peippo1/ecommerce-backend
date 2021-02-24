require('./db/connection');
const express = require('express');
const cors = require('cors');

const {userRouter} = require('./routes/user');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(userRouter);


app.listen(PORT, ()=> console.log(`listening on port ${PORT}`));