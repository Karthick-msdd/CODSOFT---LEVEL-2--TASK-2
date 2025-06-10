const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/auth");
const jobRoutes = require("./routes/job");
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);

app.listen(3000, () => console.log("server running on port 3000"));




