require('./db/connection');
const express = require('express');
const cors = require('cors');
const session = require('express-session');

const {userRouter} = require('./routes/user');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(userRouter);
// app.use(session({
//     secret: "secretkeytosigncookie",
//     resave: false,
//     saveUninitialized: false,
// }));

//testing cookies
// app.get("/", (req, res )=> {
//     req.session.isAuth = true;
//     console.log(req.session.id);
//     res.send("hello world");
// })

app.listen(PORT, ()=> console.log(`listening on port ${PORT}`));