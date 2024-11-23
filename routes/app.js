const express = require('express');
const router = express.Router();
// const { MongoClient } = require("mongodb");

// const uri = "?";

// const client = new MongoClient(uri);

// let db;
// let usersCollection;

// client.connect()
//   .then(() => {
//     db = client.db("?");
//     usersCollection = db.collection("?");
//   })

router.get("/", (req, res) => {
  res.render("home", { title: "Strona główna" });
});


router.get("/add", (req, res) => {
  res.render("add");
});


router.post("/addFunc", async (req, res) => {
  const user = req.body.user; 
  console.log("Dane użytkownika:", user);

  await usersCollection.insertOne({ name: user});
  res.redirect("/load");
  }
);

router.get("/load", async (req, res) => {
    const users = await usersCollection.find().toArray();
    console.log("Załadowani użytkownicy:", users);

    res.render("load", { userTab: users });
});

module.exports = router;