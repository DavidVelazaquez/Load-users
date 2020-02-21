async function getUsers() {
  const users = await fetch("http://localhost:3000/api/users");
  const solvedUsers = await users.json();
  const result = solvedUsers.data.map(user => {
    const { username, phone, email } = user;
    return `<p>${username} <strong>${email}</strong></p><p>${phone}</p>`;
  });
  document.body.innerHTML = result.join("");
}

getUsers();
