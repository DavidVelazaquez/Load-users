const express = require("express");
const Fetch = require("node-fetch");

module.exports = app => {
  const router = express.Router();
  app.use("/api", router);

  router.get("/users", async (req, res) => {
    const users = await Fetch("https://jsonplaceholder.typicode.com/users");
    const solvdedUseres = await users.json();
    res.status(200).json(solvdedUseres);
  });

  router.get("/users/:user", async (req, res) => {
    const { user } = req.params;
    const users = await Fetch("https://jsonplaceholder.typicode.com/users");
    const solvedUsers = await users.json();
    const filteredUsers = solvedUsers.filter(cUser => {
      const filterRegex = new RegExp(user, "gi");
      return filterRegex.test(cUser.username);
    });
    res.json(filteredUsers);
  });
};
