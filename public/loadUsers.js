async function getUsers() {
  const users = await fetch("http://localhost:3000/api/users");
  const solvedUsers = await users.json();
  const result = solvedUsers.data.map(user => {
    const { username, phone, email, city } = user;
    return `<article class='user__card'><p class='user__card-username'>${username}</p><p class='user__card-email'>${email}</p><p class='user__card-phone'>${phone}</p><p class='user__card-city'>${city}</p></article>`;
  });
  document.getElementById("root").innerHTML = result.join("");
}

async function filterUsers(filter) {
  const users = await fetch(`http://localhost:3000/api/users/${filter}`);
  const solvedUsers = await users.json();
  const result = solvedUsers.map(user => {
    const { username, phone, email, city } = user;
    return `<article class='user__card'><p class='user__card-username'>${username}</p><p class='user__card-email'>${email}</p><p class='user__card-phone'>${phone}</p><p class='user__card-city'>${city}</p></article>`;
  });
  document.getElementById("root").innerHTML = result.join("");
}

window.onload = () => {
  getUsers();

  document.getElementById("input__filter").addEventListener("keyup", () => {
    const myFilter = document.getElementById("input__filter").value;
    filterUsers(myFilter);
  });
};
