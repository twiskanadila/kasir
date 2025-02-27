// load library express
const express = require("express");

// initiate object that instance of express
const app = express();

// allow to read 'request with json type
app.use(express.json());

const mejaController = require("../controllers/meja.controller");
app.get("/", mejaController.getAllMeja);
app.get("/:id_meja", mejaController.getOneMeja);
app.post("/add", mejaController.addMeja);
app.post("/find", mejaController.findMeja);
app.put("/:id_meja", mejaController.updateMeja);
app.delete("/:id_meja", mejaController.deleteMeja);

// export app in order to load in another file
module.exports = app;
