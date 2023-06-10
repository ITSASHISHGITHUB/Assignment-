const express = require("express");
const app = express();
const pets = require("./pets.js");

app.get("/", (req, res) => {
  res.send("Try hitting /pets?sort=ASC/DESC to sort pets on their AGE!");
});

app.get("/pets", (req, res) => {
  const sortParam = req.query.sort;

  if (sortParam === "ASC") {
    pets.sort((a, b) => a.age - b.age);
  } else if (sortParam === "DESC") {
    pets.sort((a, b) => b.age - a.age);
  } else {
    // Invalid sort parameter
    return res.status(400).json({ error: "Invalid sort parameter" });
  }

  res.json(pets);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
