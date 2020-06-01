const express = require("express");
const connectDb = require("./config/db");
const cors = require("cors");

const PORT = process.env.PORT || 3000;
const app = express();

//Connect DataBase
connectDb();

//Init Middleware
app.use(express.json({extended: false}));
app.use(cors());

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/lesson", require("./routes/api/lesson"));

app.listen(3000);