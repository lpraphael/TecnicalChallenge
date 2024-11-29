const express = require("express");
// const { errorMiddleware } = require("./middlewares/error");
const cors = require("cors");
const helmet = require("helmet");


const { countriesRoute } = require("./Routes");
const app = express();

app.use(helmet());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cors());

app.use("/", countriesRoute);

// app.use(errorMiddleware);

module.exports = app;
