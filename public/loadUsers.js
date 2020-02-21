const Fetch = require("node-fetch");

const getUsers = async () => {
  const users = await Fetch("http://localhost:3000/api/users").json();
};
