const contactsManagerRoutes = require("./routes/contactsManagerRoutes");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/contacts", contactsManagerRoutes);

module.exports = app;
