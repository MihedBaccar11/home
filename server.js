const express = require("express");
const passport = require("passport");
const cors = require("cors");
const connectDB = require("./config/connectDB");
const app = express();
require("dotenv").config();
connectDB();

app.use(express.json());
app.use(cors());

app.use(passport.initialize());

// Routes
app.use("/user", require("./routes/user"));
app.use("/admin", require("./routes/admin"));
app.use("/product", require("./routes/product"));
app.use("/comande", require("./routes/comande"));
app.use("/gallerie", require("./routes/gallerie"));

app.listen(process.env.PORT, (err) => {
  err
    ? console.log(err, "can not coonect to db")
    : console.log("server is running...");
});
