const express = require("express");
const Fetch = require("node-fetch");
const UsersService = require("../service/usersService");

module.exports = app => {
  const router = express.Router();
  app.use("/api", router);

  const usersService = new UsersService();

  router.get("/users", async (req, res, next) => {
    // const users = await Fetch("https://jsonplaceholder.typicode.com/users");
    // const solvdedUseres = await users.json();
    // const solvedUsers = await getUsers();
    const { tags } = req.query;
    try {
      const users = await usersService.getUsers({ tags });
      res.status(200).json({
        data: users,
        message: "Users listed"
      });
    } catch (error) {
      next(error);
    }
  });

  router.get("/users/:user", async (req, res) => {
    const { user } = req.params;
    // const users = await Fetch("https://jsonplaceholder.typicode.com/users");
    // const solvedUsers = await users.json();
    const solvedUsers = await getUsers();
    const filteredUsers = solvedUsers.filter(cUser => {
      const filterRegex = new RegExp(user, "gi");
      return filterRegex.test(cUser.username);
    });
    res.json(filteredUsers);
  });

  router.post("/", async (req, res, next) => {
    const { body: user } = req;
    try {
      const newUser = await usersService.createUser(user);
      res.status(201).json({
        data: newUser,
        message: "User created"
      });
    } catch (error) {
      next(error);
    }
  });
};

// const getUsers = async () => {
//   const users = await Fetch("https://jsonplaceholder.typicode.com/users");
//   const solvedUsers = await users.json();
//   return solvedUsers;
// };
